const tools = [
    // ========== تطبيقات (جميع المهارات) ==========
    {
        name: "Duolingo",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "all"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 12.99,
        link: "https://www.duolingo.com",
        description: "منصة تعلم لغات تفاعلية تعلم المفردات والقواعد والقراءة والكتابة والاستماع والتحدث من خلال دروس قصيرة تفاعلية.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-B2"
    },
    {
        name: "Babbel",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "all"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 7,
        priceMax: 13,
        link: "https://www.babbel.com",
        description: "دورات لغة مصممة من قبل خبراء مع دروس منظمة تركز على مهارات المحادثة العملية وشرح القواعد وحوارات من الحياة الواقعية متوافقة مع معايير CEFR.",
        isFree: false,
        platforms: ["iOS", "Android", "ويب", "سطح المكتب"],
        cefr: "A1-B2"
    },
    {
        name: "Busuu",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "all"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 13.95,
        link: "https://www.busuu.com",
        description: "منصة تعلم لغات مجتمعية تقدم دروساً تفاعلية مع ملاحظات من متحدثين أصليين وشهادات McGraw-Hill الرسمية وخطط دراسة مخصصة.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-B2"
    },
    {
        name: "HelloEnglish",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "all"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://helloenglish.com",
        description: "تطبيق لتعلم الإنجليزية مع أكثر من 475 درساً تفاعلياً وألعاباً وتدريبات في التحدث والقراءة والكتابة والاستماع مع تعليمات متاحة بأكثر من 22 لغة أصلية.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب", "سطح المكتب"],
        cefr: "A1-B2"
    },
    {
        name: "Rosetta Stone",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "all"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 10.50,
        priceMax: 15.99,
        link: "https://www.rosettastone.com",
        description: "برنامج تعلم لغات غامر يستخدم طريقة الانغماس الديناميكي مع ربط بصري-سمعي وتقنية التعرف على الكلام TruAccent ودروس منظمة.",
        isFree: false,
        platforms: ["iOS", "Android", "ويب", "سطح المكتب"],
        cefr: "A1-B2"
    },
    {
        name: "Beelinguapp",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "vocabulary"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 6.99,
        link: "https://beelinguapp.com",
        description: "تطبيق لتعلم اللغات يركز على القراءة باستخدام نصوص متوازية مع ترجمات جنباً إلى جنب وسرد صوتي على طريقة الكاريوكي من متحدثين أصليين واختبارات فهم.",
        isFree: true,
        platforms: ["iOS", "Android"],
        cefr: "A2-C2"
    },
    {
        name: "LingoDeer",
        category: "تطبيقات (جميع المهارات)",
        skills: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "all"],
        levels: ["beginner", "all"],
        priceMin: 0,
        priceMax: 14.99,
        link: "https://www.lingodeer.com",
        description: "تطبيق تعلم لغات منظم مع دروس مصممة من قبل خبراء تركز على اللغات الآسيوية والأوروبية مع شروحات قواعد شاملة وتعليم نظام الكتابة.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-B1"
    },
    {
        name: "Drops",
        category: "تطبيقات (جميع المهارات)",
        skills: ["listening", "vocabulary"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 13,
        link: "https://languagedrops.com",
        description: "تطبيق تعلم مصغر يركز على المفردات باستخدام جلسات ممتعة مدتها 5 دقائق مع تذكيرات بصرية وألعاب السحب وربط الصور بأكثر من 50 لغة.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-B2"
    },

    // ========== المفردات/التكرار المتباعد ==========
    {
        name: "Anki",
        category: "المفردات/التكرار المتباعد",
        skills: ["vocabulary", "reading", "listening"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 24.99,
        link: "https://apps.ankiweb.net",
        description: "برنامج بطاقات تعليمية مجاني ومفتوح المصدر يستخدم التكرار المتباعد والاستدعاء النشط للحفظ طويل الأمد مع أقصى قدر من التخصيص.",
        isFree: true,
        platforms: ["Windows", "macOS", "Linux", "iOS", "Android", "ويب"],
        cefr: "الكل"
    },
    {
        name: "Quizlet",
        category: "المفردات/التكرار المتباعد",
        skills: ["vocabulary", "reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 7.99,
        link: "https://quizlet.com",
        description: "منصة تعلم مدعومة بالذكاء الاصطناعي مع بطاقات تعليمية واختبارات تدريبية وألعاب وأوضاع دراسة للتعلم التعاوني مع محتوى من إنشاء المستخدمين.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "الكل"
    },
    {
        name: "Vocabulary.com",
        category: "المفردات/التكرار المتباعد",
        skills: ["vocabulary"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 2.99,
        link: "https://www.vocabulary.com",
        description: "منصة تعلم مفردات تكيفية مع 140,000+ كلمة وخوارزمية ذكية وتمارين جذابة للنجاح الأكاديمي.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "B1-C2"
    },
    {
        name: "WordUp",
        category: "المفردات/التكرار المتباعد",
        skills: ["vocabulary"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 4.99,
        link: "https://www.wordupapp.co",
        description: "أداة بناء مفردات إنجليزية مدعومة بالذكاء الاصطناعي مع خريطة معرفية تظهر جميع الكلمات المفيدة البالغ عددها 25,000 مصنفة حسب التردد في العالم الحقيقي.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب", "سطح المكتب"],
        cefr: "A1-C2"
    },
    {
        name: "Magoosh Vocabulary Builder",
        category: "المفردات/التكرار المتباعد",
        skills: ["vocabulary"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://magoosh.com/vocabulary-builder",
        description: "لعبة مفردات مجانية مع 1,200 كلمة منسقة من قبل خبراء للتحضير للاختبارات (GRE، SAT، TOEFL) عبر المستويات الأساسية إلى المتقدمة.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "B2-C2"
    },

    // ========== القواعد/الكتابة ==========
    {
        name: "Grammarly",
        category: "القواعد/الكتابة",
        skills: ["grammar", "writing"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 30,
        link: "https://www.grammarly.com",
        description: "مساعد كتابة مدعوم بالذكاء الاصطناعي يتحقق من القواعد والإملاء وعلامات الترقيم ويقدم اقتراحات للنبرة مع ميزات ذكاء اصطناعي متقدمة.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android", "سطح المكتب"],
        cefr: "B1-C2"
    },
    {
        name: "LanguageTool",
        category: "القواعد/الكتابة",
        skills: ["grammar", "writing"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 19.90,
        link: "https://languagetool.org",
        description: "مدقق قواعد وأسلوب وإملاء متعدد اللغات مفتوح المصدر يدعم أكثر من 30 لغة مع إعادة صياغة مدعومة بالذكاء الاصطناعي.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android", "سطح المكتب"],
        cefr: "الكل"
    },
    {
        name: "Hemingway Editor",
        category: "القواعد/الكتابة",
        skills: ["writing"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 19.99,
        link: "https://hemingwayapp.com",
        description: "محرر يركز على سهولة القراءة يبرز الجمل المعقدة والصوت المبني للمجهول والظروف لجعل الكتابة جريئة وواضحة.",
        isFree: true,
        platforms: ["ويب", "سطح المكتب"],
        cefr: "B1-C2"
    },
    {
        name: "ProWritingAid",
        category: "القواعد/الكتابة",
        skills: ["grammar", "writing"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 30,
        link: "https://prowritingaid.com",
        description: "محرر كتابة شامل مع أكثر من 25 تقريراً متعمقاً يغطي القواعد والأسلوب وسهولة القراءة وتحليل المخطوطات للكتاب.",
        isFree: true,
        platforms: ["ويب", "سطح المكتب"],
        cefr: "B2-C2"
    },
    {
        name: "QuillBot",
        category: "القواعد/الكتابة",
        skills: ["grammar", "writing"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 19.95,
        link: "https://quillbot.com",
        description: "أداة إعادة صياغة مدعومة بالذكاء الاصطناعي مع التحقق من القواعد والتلخيص وميزات الترجمة عبر لغات متعددة.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android", "سطح المكتب"],
        cefr: "B1-C2"
    },
    {
        name: "British Council Learn English Grammar",
        category: "القواعد/الكتابة",
        skills: ["grammar"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 3,
        link: "https://learnenglish.britishcouncil.org/apps/learnenglish-grammar",
        description: "تطبيق محمول مجاني مع أكثر من 1,000 سؤال تدريبي على القواعد عبر 10 أنواع من الأنشطة مصممة لمتعلمي الإنجليزية في جميع المستويات.",
        isFree: true,
        platforms: ["iOS", "Android"],
        cefr: "A1-B2"
    },

    // ========== النطق ==========
    {
        name: "ELSA Speak",
        category: "النطق",
        skills: ["speaking", "listening"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 11.99,
        link: "https://elsaspeak.com/en",
        description: "تطبيق نطق مدعوم بالذكاء الاصطناعي يقدم ملاحظات فورية عن التعرف على الكلام حول النطق والطلاقة والتنغيم.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-C2"
    },
    {
        name: "Speechling",
        category: "النطق",
        skills: ["speaking", "listening"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 19.99,
        link: "https://speechling.com",
        description: "منصة تعلم لغات غير ربحية تقدم تدريباً على النطق مع ملاحظات بشرية من مدربين متحدثين أصليين خلال 24 ساعة.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-C2"
    },
    {
        name: "Sounds: The Pronunciation App",
        category: "النطق",
        skills: ["reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 4.99,
        link: "https://apps.apple.com/app/sounds-pronunciation-app",
        description: "تطبيق رسم صوتي تفاعلي مبني على 'أسس الصوت' لأدريان أندرهيل يُظهر النطق البريطاني والأمريكي.",
        isFree: true,
        platforms: ["iOS", "Android"],
        cefr: "A1-C2"
    },
    {
        name: "English Pronunciation by TalkEnglish",
        category: "النطق",
        skills: ["speaking", "listening", "reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.talkenglish.com",
        description: "موقع تعلم إنجليزية مجاني شامل يقدم دروساً في النطق والمفردات وتدريبات على التحدث مع تسجيلات صوتية.",
        isFree: true,
        platforms: ["ويب", "Android"],
        cefr: "A1-C1"
    },
    {
        name: "Forvo",
        category: "النطق",
        skills: ["listening"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 2,
        link: "https://forvo.com",
        description: "أكبر قاموس نطق في العالم مع أكثر من 7 مليون نطق من متحدثين أصليين بأكثر من 450 لغة، من التشارك الجماعي.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "الكل"
    },
    {
        name: "YouGlish",
        category: "النطق",
        skills: ["listening"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://youglish.com",
        description: "أداة مجانية للبحث في مقاطع فيديو YouTube لإظهار أشخاص حقيقيين يستخدمون كلمات/عبارات محددة في السياق مع أكثر من 100 مليون مقطع.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "الكل"
    },

    // ========== القراءة/القراء المتدرجة ==========
    {
        name: "ReadTheory",
        category: "القراءة/القراء المتدرجة",
        skills: ["reading", "vocabulary"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://readtheory.org",
        description: "منصة فهم قراءة تكيفية مجانية مع ذكاء اصطناعي يضبط الصعوبة بناءً على أداء الطالب باستخدام إطار Lexile.",
        isFree: true,
        platforms: ["ويب"],
        cefr: "A1-C2"
    },
    {
        name: "LingQ",
        category: "القراءة/القراء المتدرجة",
        skills: ["reading", "listening", "vocabulary"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 12.99,
        link: "https://www.lingq.com/en",
        description: "منصة تعلم لغات تستخدم محتوى أصلي (بودكاست، مقالات، فيديوهات) مع بناء مفردات متكامل من خلال القراءة والاستماع.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A1-C2"
    },
    {
        name: "CommonLit",
        category: "القراءة/القراء المتدرجة",
        skills: ["reading", "vocabulary", "writing"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.commonlit.org",
        description: "برنامج محو أمية مجاني مع أكثر من 3,000 نص إنجليزي و800 نص إسباني ومنهج ELA كامل K-12 وأدوات تقييم.",
        isFree: true,
        platforms: ["ويب"],
        cefr: "A2-C1"
    },
    {
        name: "News in Levels",
        category: "القراءة/القراء المتدرجة",
        skills: ["reading", "listening", "vocabulary"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.newsinlevels.com",
        description: "موقع أخبار مجاني يقدم الأحداث الجارية معاد كتابتها في ثلاثة مستويات (1000، 2000، 3000 من أكثر الكلمات شيوعاً) مع صوت بريطاني وأمريكي.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "A1-B2"
    },
    {
        name: "Breaking News English",
        category: "القراءة/القراء المتدرجة",
        skills: ["reading", "listening", "vocabulary", "grammar", "speaking", "writing"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://breakingnewsenglish.com",
        description: "موقع ESL/EFL مجاني يقدم دروس أخبار في 7 مستويات مع أنشطة واسعة واستماع وتمارين متعددة المهارات.",
        isFree: true,
        platforms: ["ويب"],
        cefr: "A1-C2"
    },
    {
        name: "ReadWorks",
        category: "القراءة/القراء المتدرجة",
        skills: ["reading", "vocabulary", "writing"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.readworks.org",
        description: "منظمة غير ربحية مجانية توفر أكثر من 6,000 مقطع قراءة K-12 مبني على البحث مع أسئلة فهم وأنشطة مفردات ودعم المعلمين.",
        isFree: true,
        platforms: ["ويب"],
        cefr: "A1-C1"
    },

    // ========== الاستماع/البودكاست ==========
    {
        name: "6 Minute English (BBC)",
        category: "الاستماع/البودكاست",
        skills: ["listening", "vocabulary", "reading"],
        levels: ["intermediate", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.bbc.co.uk/learningenglish",
        description: "بودكاست أسبوعي يحتوي على مناقشات مدتها 6 دقائق حول مواضيع حالية مع شرح المفردات ونصوص.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب", "Spotify", "YouTube"],
        cefr: "B1-B2"
    },
    {
        name: "All Ears English",
        category: "الاستماع/البودكاست",
        skills: ["listening", "vocabulary", "speaking"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 26.99,
        link: "https://www.allearsenglish.com",
        description: "بودكاست إنجليزية أمريكية يومي يعلم مهارات المحادثة والتعابير والرؤى الثقافية من خلال محادثات حقيقية.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب", "منصات البودكاست"],
        cefr: "B1-C1"
    },
    {
        name: "ESL Pod",
        category: "الاستماع/البودكاست",
        skills: ["listening", "vocabulary", "grammar"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 29,
        link: "https://tv.eslpod.com",
        description: "بودكاست تعلم إنجليزية منظم مع حوارات بطيئة وبسرعة عادية وشروحات تفصيلية ورؤى ثقافية.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "A2-C1"
    },
    {
        name: "Culips ESL Podcast",
        category: "الاستماع/البودكاست",
        skills: ["listening", "vocabulary", "speaking"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 15,
        link: "https://www.culips.co",
        description: "بودكاست إنجليزية محادثة يحتوي على حوارات طبيعية وتعابير وعبارات عملية للمواقف اليومية.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android", "منصات البودكاست"],
        cefr: "B1-C1"
    },
    {
        name: "VOA Learning English",
        category: "الاستماع/البودكاست",
        skills: ["listening", "reading", "vocabulary"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://learningenglish.voanews.com",
        description: "محتوى تعلم إنجليزية قائم على الأخبار يستخدم مفردات مبسطة ووتيرة كلام أبطأ لمتعلمي الإنجليزية.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android", "منصات البودكاست"],
        cefr: "A1-C1"
    },
    {
        name: "Luke's English Podcast",
        category: "الاستماع/البودكاست",
        skills: ["listening", "vocabulary", "grammar"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 6,
        link: "https://teacherluke.co.uk",
        description: "بودكاست حائز على جوائز يعلم الإنجليزية البريطانية من خلال محادثات مسلية وقصص وكوميديا ودروس لغوية تفصيلية.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب", "YouTube", "منصات البودكاست"],
        cefr: "B2-C2"
    },

    // ========== قنوات يوتيوب ==========
    {
        name: "BBC Learning English",
        category: "قنوات يوتيوب",
        skills: ["grammar", "vocabulary", "listening", "reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.youtube.com/@bbclearningenglish",
        description: "قناة BBC الرسمية تقدم دروس إنجليزية منظمة تغطي القواعد والمفردات والنطق والرؤى الثقافية.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "A1-C1"
    },
    {
        name: "EnglishClass101",
        category: "قنوات يوتيوب",
        skills: ["grammar", "vocabulary", "listening", "reading", "writing"],
        levels: ["beginner", "intermediate", "all"],
        priceMin: 0,
        priceMax: 47,
        link: "https://www.youtube.com/@englishclass101",
        description: "منصة شاملة تقدم دروساً صوتية ومرئية منظمة تغطي القواعد والمفردات والرؤى الثقافية والمحادثة العملية.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "A1-B2"
    },
    {
        name: "Rachel's English",
        category: "قنوات يوتيوب",
        skills: ["listening"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 397,
        link: "https://www.youtube.com/@rachelsenglish",
        description: "قناة متخصصة في نطق الإنجليزية الأمريكية وتدريب اللهجة تحتوي على تعليمات صوتية تفصيلية ومقاطع فيديو لوضع الفم.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "B1-C2"
    },
    {
        name: "English with Lucy",
        category: "قنوات يوتيوب",
        skills: ["vocabulary", "grammar"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 200,
        link: "https://www.youtube.com/@englishwithlucy",
        description: "قناة تعلم إنجليزية بريطانية تركز على المفردات الراقية والنطق والرؤى الثقافية بالنطق البريطاني المتلقى.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "A2-C2"
    },
    {
        name: "Learn English with TV Series",
        category: "قنوات يوتيوب",
        skills: ["listening", "vocabulary"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 35,
        link: "https://www.youtube.com/c/learnenglishwithtvseries",
        description: "قناة تعلم قائمة على الترفيه تحلل مشاهد المسلسلات التلفزيونية والأفلام لتعليم الإنجليزية الأمريكية الأصيلة من خلال تحليل الحوار.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "B1-C2"
    },
    {
        name: "EngVid",
        category: "قنوات يوتيوب",
        skills: ["grammar", "vocabulary", "writing"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.youtube.com/@engvid",
        description: "منصة تعاونية تضم معلمين متمرسين متعددين يقدمون دروس إنجليزية مجانية تغطي القواعد والمفردات والتحضير للاختبارات.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "A1-C2"
    },
    {
        name: "Speak English With Vanessa",
        category: "قنوات يوتيوب",
        skills: ["speaking", "listening"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 35,
        link: "https://www.youtube.com/@speakenglishwithvanessa",
        description: "قناة محادثة إنجليزية أمريكية تركز على بناء الطلاقة والثقة والقدرة على التحدث الطبيعي من خلال دروس عملية يومية.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "B1-C1"
    },
    {
        name: "mmmEnglish",
        category: "قنوات يوتيوب",
        skills: ["listening", "grammar", "vocabulary"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 297,
        link: "https://www.youtube.com/@mmmenglish_emma",
        description: "قناة معلمة إنجليزية أسترالية تركز على بناء الثقة من خلال دروس عملية وتقنيات التقليد والطلاقة في المحادثة.",
        isFree: true,
        platforms: ["YouTube", "ويب"],
        cefr: "A2-C1"
    },

    // ========== القواميس/المراجع ==========
    {
        name: "Cambridge Dictionary",
        category: "القواميس/المراجع",
        skills: ["vocabulary", "reading", "grammar"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 30,
        link: "https://dictionary.cambridge.org",
        description: "قاموس مبني على المدونات اللغوية لمتعلمي الإنجليزية في جميع المستويات مع تعريفات واضحة وأمثلة وقاموس مرادفات متكامل.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "A1-C2"
    },
    {
        name: "Oxford Learner's Dictionaries",
        category: "القواميس/المراجع",
        skills: ["vocabulary", "reading", "grammar", "writing", "speaking"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 50,
        link: "https://www.oxfordlearnersdictionaries.com",
        description: "قاموس المتعلمين المتقدمين الأكثر مبيعاً في العالم مع قوائم كلمات Oxford 3000/5000 ومحتوى متوافق مع CEFR.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "A1-C1"
    },
    {
        name: "Merriam-Webster Learner's Dictionary",
        category: "القواميس/المراجع",
        skills: ["vocabulary", "reading", "grammar"],
        levels: ["intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 5.99,
        link: "https://learnersdictionary.com",
        description: "قاموس إنجليزية أمريكية مصمم خصيصاً لمتعلمي ESL/EFL مع تعريفات واضحة باستخدام لغة بسيطة وأمثلة واسعة.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "B1-C2"
    },
    {
        name: "Longman Dictionary",
        category: "القواميس/المراجع",
        skills: ["vocabulary", "reading", "grammar", "writing"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 30,
        link: "https://www.ldoceonline.com",
        description: "قاموس متعلمين متقدم مع تعريفات باستخدام 2,000 كلمة شائعة وأمثلة مدونة واسعة تُظهر الإنجليزية الطبيعية.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "الكل"
    },
    {
        name: "WordReference",
        category: "القواميس/المراجع",
        skills: ["vocabulary"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.wordreference.com",
        description: "قواميس ثنائية اللغة مجانية على الإنترنت مع مناقشات منتدى واسعة وأزواج لغات متعددة بما في ذلك تعريفات الإنجليزية.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android"],
        cefr: "الكل"
    },
    {
        name: "Reverso Context",
        category: "القواميس/المراجع",
        skills: ["vocabulary", "reading", "writing"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 5.49,
        link: "https://context.reverso.net/translation",
        description: "أداة ترجمة سياقية مدعومة بالذكاء الاصطناعي تظهر ملايين الأمثلة الحقيقية من نصوص أصلية بلغات متعددة.",
        isFree: true,
        platforms: ["ويب", "iOS", "Android", "سطح المكتب", "إضافات المتصفح"],
        cefr: "الكل"
    },

    // ========== تبادل اللغات/المجتمعات ==========
    {
        name: "HelloTalk",
        category: "تبادل اللغات",
        skills: ["speaking", "listening", "writing", "reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 12.99,
        link: "https://www.hellotalk.com",
        description: "تطبيق تبادل لغات عالمي يربط المتعلمين بمتحدثين أصليين عبر أكثر من 150 لغة من خلال النصوص والمكالمات الصوتية والفيديو.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "الكل"
    },
    {
        name: "Tandem",
        category: "تبادل اللغات",
        skills: ["speaking", "listening", "writing", "reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 13.99,
        link: "https://tandem.net",
        description: "منصة تبادل لغات تربط ملايين المتعلمين في جميع أنحاء العالم بمتحدثين أصليين من خلال ملفات شخصية موثقة ودردشة متكاملة.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "الكل"
    },
    {
        name: "HiNative",
        category: "تبادل اللغات",
        skills: ["reading", "writing", "listening", "grammar"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 9.99,
        link: "https://hinative.com",
        description: "مجتمع أسئلة وأجوبة عالمي حيث يسأل المتعلمون أسئلة حول أكثر من 110 لغة ويحصلون على إجابات من أكثر من 5 ملايين متحدث أصلي.",
        isFree: true,
        platforms: ["iOS", "Android", "ويب"],
        cefr: "الكل"
    },
    {
        name: "ConversationExchange",
        category: "تبادل اللغات",
        skills: ["speaking", "writing", "listening", "reading"],
        levels: ["beginner", "intermediate", "advanced", "all"],
        priceMin: 0,
        priceMax: 0,
        link: "https://www.conversationexchange.com",
        description: "منصة تبادل لغات قائمة على الويب تقدم لقاءات وجهاً لوجه ومراسلة صديق بالقلم واتصالات دردشة نصية/صوتية.",
        isFree: true,
        platforms: ["ويب"],
        cefr: "الكل"
    }
];

// ربط أسماء المهارات بالأيقونات لتجربة مستخدم أفضل
const skillIcons = {
    speaking: "🗣️",
    listening: "👂",
    reading: "📖",
    writing: "✏️",
    grammar: "📝",
    vocabulary: "📚",
    all: "🌟"
};

// دالة مساعدة للحصول على فئات فريدة
function getCategories() {
    return [...new Set(tools.map(tool => tool.category))];
}

// دالة مساعدة لتصفية الأدوات
function filterTools(filters) {
    return tools.filter(tool => {
        const matchesSkills = !filters.skills || filters.skills.some(skill => tool.skills.includes(skill));
        const matchesLevel = !filters.level || tool.levels.includes(filters.level) || tool.levels.includes('all');
        const matchesBudget = !filters.budget || 
            (filters.budget === 'free' && tool.isFree) ||
            (filters.budget === 'cheap' && tool.priceMax <= 10) ||
            (filters.budget === 'any');
        const matchesCategory = !filters.category || tool.category === filters.category;
        
        return matchesSkills && matchesLevel && matchesBudget && matchesCategory;
    });
}
