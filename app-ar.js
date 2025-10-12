let selections = {
    goals: [],
    budget: null,
    level: null
};

function updateProgressBar(stepNum) {
    document.querySelectorAll('.progress-step').forEach(step => {
        const stepNumber = parseInt(step.dataset.step);
        if (stepNumber < stepNum) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNumber === stepNum) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
}

function nextStep(stepNumber) {
    const currentStep = document.querySelector('.step.active');
    
    // Validation
    if (stepNumber === 2) {
        const checked = document.querySelectorAll('#step-1 input:checked');
        if (checked.length === 0) {
            alert('⚠️ الرجاء اختيار مهارة واحدة على الأقل');
            return;
        }
        selections.goals = Array.from(checked).map(i => i.value);
    } else if (stepNumber === 3) {
        const checked = document.querySelector('input[name="budget"]:checked');
        if (!checked) {
            alert('⚠️ الرجاء اختيار ميزانية');
            return;
        }
        selections.budget = checked.value;
    }
    
    // Navigate
    currentStep.classList.remove('active');
    document.getElementById('step-' + stepNumber).classList.add('active');
    updateProgressBar(stepNumber);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(stepNumber) {
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step-' + stepNumber).classList.add('active');
    updateProgressBar(stepNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults() {
    const checked = document.querySelector('input[name="level"]:checked');
    if (!checked) {
        alert('⚠️ الرجاء اختيار مستواك');
        return;
    }
    selections.level = checked.value;
    
    // Filter tools and calculate relevance scores
    let filtered = tools.filter(tool => {
        const matchesGoal = selections.goals.some(goal => tool.skills.includes(goal));
        
        let matchesBudget = true;
        if (selections.budget === 'free') {
            matchesBudget = tool.isFree;
        } else if (selections.budget === 'cheap') {
            matchesBudget = tool.priceMax <= 10;
        }
        
        const matchesLevel = tool.levels.includes(selections.level) || tool.levels.includes('all');
        
        return matchesGoal && matchesBudget && matchesLevel;
    }).map(tool => {
        // Calculate relevance score
        const matchingSkills = selections.goals.filter(goal => tool.skills.includes(goal)).length;
        const totalSkills = tool.skills.filter(s => s !== 'all').length;
        
        // Specialization score: more specialized (fewer skills) = higher score
        const specializationScore = totalSkills > 0 ? matchingSkills / totalSkills : 0;
        
        // Bonus for highly specialized tools (3 or fewer skills)
        const specializationBonus = totalSkills <= 3 ? 0.3 : 0;
        
        // Final relevance score
        const relevanceScore = specializationScore + specializationBonus;
        
        return { ...tool, relevanceScore };
    });
    
    // Sort by relevance, then by price (free first)
    filtered.sort((a, b) => {
        // First sort by relevance
        if (Math.abs(a.relevanceScore - b.relevanceScore) > 0.01) {
            return b.relevanceScore - a.relevanceScore;
        }
        // Then by free vs paid
        if (a.isFree && !b.isFree) return -1;
        if (!a.isFree && b.isFree) return 1;
        // Finally by price
        return a.priceMin - b.priceMin;
    });
    
    // Display results
    const container = document.getElementById('results-container');
    document.getElementById('count').textContent = filtered.length;
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>😔 لم يتم العثور على تطابق تام</h3>
                <p>حاول تعديل المرشحات لرؤية المزيد من الخيارات</p>
            </div>
        `;
    } else {
        container.innerHTML = filtered.map(tool => `
            <div class="tool-card">
                <div class="tool-card-header">
                    <div>
                        <h3>${tool.name}</h3>
                        <span class="category">${tool.category}</span>
                    </div>
                </div>
                <p>${tool.description}</p>
                <div class="tool-features">
                    <span class="feature-tag">📊 ${tool.cefr}</span>
                    <span class="feature-tag">💻 ${tool.platforms.slice(0, 2).join(' ، ')}${tool.platforms.length > 2 ? '...' : ''}</span>
                </div>
                <p class="price">${tool.isFree && tool.priceMin === 0 ? 'مجاني' : tool.priceMin === tool.priceMax ? `${tool.priceMin} دولار/شهر` : `${tool.priceMin}-${tool.priceMax} دولار/شهر`}</p>
                <a href="${tool.link}" class="tool-link" target="_blank" rel="noopener">
                    زيارة الموقع ←
                </a>
            </div>
        `).join('');
    }
    
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('results').classList.add('active');
    updateProgressBar(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetFinder() {
    selections = {goals: [], budget: null, level: null};
    document.querySelectorAll('input').forEach(i => i.checked = false);
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step-1').classList.add('active');
    updateProgressBar(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
updateProgressBar(1);
