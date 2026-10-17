let selections = {
    goals: [],
    budget: null,
    level: null
};

let allFilteredResults = []; // Store all results for category filtering

// "القواعد والكتابة" covers both grammar and writing tools; "جميع المهارات" covers every tool
function matchesGoal(goal, tool) {
    if (goal === 'all') return true;
    if (goal === 'grammar') return tool.skills.includes('grammar') || tool.skills.includes('writing');
    return tool.skills.includes(goal);
}

// Inline validation message instead of a browser alert
function showStepError(stepId, message) {
    const step = document.getElementById(stepId);
    let box = step.querySelector('.step-error');
    if (!box) {
        box = document.createElement('p');
        box.className = 'step-error';
        box.setAttribute('role', 'alert');
        step.querySelector('.button-group').before(box);
    }
    box.textContent = message;
}

function clearStepErrors() {
    document.querySelectorAll('.step-error').forEach(e => e.remove());
}

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
            showStepError('step-1', 'الرجاء اختيار مهارة واحدة على الأقل');
            return;
        }
        selections.goals = Array.from(checked).map(i => i.value);
    } else if (stepNumber === 3) {
        const checked = document.querySelector('input[name="budget"]:checked');
        if (!checked) {
            showStepError('step-2', 'الرجاء اختيار ميزانية');
            return;
        }
        selections.budget = checked.value;
    }
    
    // Navigate
    clearStepErrors();
    currentStep.classList.remove('active');
    document.getElementById('step-' + stepNumber).classList.add('active');
    updateProgressBar(stepNumber);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(stepNumber) {
    clearStepErrors();
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step-' + stepNumber).classList.add('active');
    updateProgressBar(stepNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults() {
    const checked = document.querySelector('input[name="level"]:checked');
    if (!checked) {
        showStepError('step-3', 'الرجاء اختيار مستواك');
        return;
    }
    selections.level = checked.value;
    clearStepErrors();
    
    // Filter tools and calculate relevance scores
    let filtered = tools.filter(tool => {
        const goalMatch = selections.goals.some(goal => matchesGoal(goal, tool));
        
        // A tool fits a budget if it can be used at that price: free tools fit every budget
        let matchesBudget = true;
        if (selections.budget === 'free') {
            matchesBudget = tool.isFree;
        } else if (selections.budget === 'cheap') {
            matchesBudget = tool.isFree || tool.priceMin <= 10;
        }
        
        // Every tool carries the "all" tag, so a specific level must match the tool's own levels
        const matchesLevel = selections.level === 'all' || tool.levels.includes(selections.level);
        
        return goalMatch && matchesBudget && matchesLevel;
    }).map(tool => {
        // Calculate relevance score
        const totalSkills = tool.skills.filter(s => s !== 'all').length;
        const matchingSkills = selections.goals.includes('all')
            ? totalSkills
            : selections.goals.filter(goal => matchesGoal(goal, tool)).length;
        
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
    
    // Store results globally for category filtering
    allFilteredResults = filtered;
    
    // Display results
    displayResults(filtered);
    
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('results').classList.add('active');
    updateProgressBar(4);
    
    // Setup category filter buttons after DOM is updated
    setTimeout(() => {
        setupCategoryFilters();
    }, 0);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayResults(tools) {
    const container = document.getElementById('results-container');
    document.getElementById('count').textContent = tools.length;
    
    if (tools.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>😔 لم يتم العثور على تطابق تام</h3>
                <p>حاول تعديل المرشحات لرؤية المزيد من الخيارات</p>
            </div>
        `;
    } else {
        container.innerHTML = tools.map(tool => `
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
}

function setupCategoryFilters() {
    const filterContainer = document.querySelector('.category-filter');
    
    // Remove any existing listener
    const newContainer = filterContainer.cloneNode(true);
    filterContainer.parentNode.replaceChild(newContainer, filterContainer);
    
    // Add event delegation listener to container
    newContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            // Remove active class from all buttons
            newContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Get selected category
            const selectedCategory = e.target.dataset.category;
            
            // Filter and display
            if (selectedCategory === 'all') {
                displayResults(allFilteredResults);
            } else {
                const categoryFiltered = allFilteredResults.filter(tool => 
                    tool.category === selectedCategory
                );
                displayResults(categoryFiltered);
            }
        }
    });
}

function resetFinder() {
    clearStepErrors();
    selections = {goals: [], budget: null, level: null};
    document.querySelectorAll('input').forEach(i => i.checked = false);
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step-1').classList.add('active');
    updateProgressBar(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// "جميع المهارات" and single skills are exclusive: picking one clears the other
document.querySelectorAll('#step-1 input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', () => {
        if (!box.checked) return;
        if (box.value === 'all') {
            document.querySelectorAll('#step-1 input[type="checkbox"]:not([value="all"])').forEach(b => b.checked = false);
        } else {
            document.getElementById('all').checked = false;
        }
    });
});

// Initialize
updateProgressBar(1);
