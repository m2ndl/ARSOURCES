"""Check every tool link in tools-data-ar.js and write a Markdown report of the ones that fail.

Exit code 1 when at least one link is broken, so the workflow knows to open an issue.
Sites that block automated visitors (401, 403, 418, 429, or a reset connection) count as working:
a person can still open them in a browser.
"""
import re
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.parse import urlparse

DATA = Path(__file__).resolve().parents[2] / 'tools-data-ar.js'
REPORT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('link-report.md')
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0 Safari/537.36')
ALIVE = {401, 403, 405, 406, 418, 429}


def tools():
    text = DATA.read_text(encoding='utf-8')
    return re.findall(r'name:\s*"([^"]+)"[^{}]*?link:\s*"([^"]+)"', text, re.S)


def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'en,ar'})
    try:
        with urllib.request.urlopen(req, timeout=25) as res:
            return res.status, res.geturl()
    except urllib.error.HTTPError as e:
        return e.code, e.geturl()
    except ConnectionResetError:  # some sites drop scripted visitors but open fine in a browser
        return 403, url
    except Exception as e:  # DNS failure, refused connection, timeout, bad certificate
        if isinstance(getattr(e, 'reason', None), ConnectionResetError):
            return 403, url
        return None, type(e).__name__ + ': ' + str(getattr(e, 'reason', e))[:120]


def check(item):
    name, url = item
    status, final = fetch(url)
    if status is None or status >= 500:
        time.sleep(5)  # one retry for passing outages
        status, final = fetch(url)
    if status is None and 'timed out' in final.lower():
        return name, url, 'slow', final  # some sites stall scripted visitors; not proof the link is dead
    if status is None:
        return name, url, 'broken', final
    if status in (404, 410) or status >= 500:
        return name, url, 'broken', f'HTTP {status}'
    if status >= 400 and status not in ALIVE:
        return name, url, 'broken', f'HTTP {status}'

    def host(u):
        return urlparse(u).hostname.removeprefix('www.') if urlparse(u).hostname else ''
    if final and host(final) != host(url):
        return name, url, 'moved', final
    return name, url, 'ok', ''


def main():
    items = tools()
    with ThreadPoolExecutor(8) as pool:
        results = list(pool.map(check, items))
    broken = [r for r in results if r[2] == 'broken']
    moved = [r for r in results if r[2] == 'moved']
    slow = [r for r in results if r[2] == 'slow']
    lines = [f'Checked {len(items)} links in `tools-data-ar.js`.', '']
    if broken:
        lines += ['## Not working', '', '| Tool | Link | Problem |', '|---|---|---|']
        lines += [f'| {n} | {u} | {p} |' for n, u, _, p in broken] + ['']
    if moved:
        lines += ['## Now redirects to another site (worth a look)', '', '| Tool | Link | Ends up at |', '|---|---|---|']
        lines += [f'| {n} | {u} | {p} |' for n, u, _, p in moved] + ['']
    if slow:
        lines += ['## Did not answer in time (check by hand if it repeats)', '', '| Tool | Link |', '|---|---|']
        lines += [f'| {n} | {u} |' for n, u, _, _ in slow] + ['']
    if not broken and not moved and not slow:
        lines.append('All links work.')
    REPORT.write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print('\n'.join(lines))
    sys.exit(1 if broken else 0)


if __name__ == '__main__':
    main()
