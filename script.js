// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Initialize quiz
    initializeQuiz();
    
    // Add scroll animations
    addScrollAnimations();
});

// Interactive Diagram - Show Type Info
const typeData = {
    1: {
        name: "Typ 1: Der Reformer",
        badge: "Der Perfektionist",
        description: "Menschen vom Typ 1 streben nach Perfektion und Integrität. Sie haben ein starkes inneres Gespür für richtig und falsch.",
        motivation: "Integer, korrekt und moralisch gut zu sein",
        fear: "Korrupt, böse oder fehlerhaft zu sein",
        color: "#e74c3c"
    },
    2: {
        name: "Typ 2: Der Helfer",
        badge: "Der Geber",
        description: "Typ 2 ist warm, fürsorglich und großzügig. Sie haben ein starkes Bedürfnis, anderen zu helfen und für sie da zu sein.",
        motivation: "Geliebt und gebraucht zu werden",
        fear: "Ungeliebt und unwürdig der Liebe zu sein",
        color: "#e67e22"
    },
    3: {
        name: "Typ 3: Der Erfolgsmensch",
        badge: "Der Leistungsträger",
        description: "Typ 3 ist ehrgeizig, zielorientiert und energiegeladen. Sie sind Meister der Anpassung und präsentieren sich erfolgreich.",
        motivation: "Wertvoll, bewundert und erfolgreich zu sein",
        fear: "Wertlos und ohne inhärenten Wert zu sein",
        color: "#f39c12"
    },
    4: {
        name: "Typ 4: Der Individualist",
        badge: "Der Romantiker",
        description: "Typ 4 ist kreativ, sensibel und introspektiv. Sie haben eine tiefe emotionale Reichweite und streben nach Authentizität.",
        motivation: "Sich selbst finden und einzigartig sein",
        fear: "Keine persönliche Identität oder Bedeutung zu haben",
        color: "#2ecc71"
    },
    5: {
        name: "Typ 5: Der Forscher",
        badge: "Der Beobachter",
        description: "Typ 5 ist analytisch, neugierig und unabhängig. Sie sind tiefe Denker, die Wissen und Verständnis sammeln.",
        motivation: "Kompetent und sachkundig zu sein",
        fear: "Inkompetent, hilflos oder abhängig zu sein",
        color: "#1abc9c"
    },
    6: {
        name: "Typ 6: Der Loyalist",
        badge: "Der Skeptiker",
        description: "Typ 6 ist verantwortungsbewusst, vertrauenswürdig und loyal. Sie schätzen Sicherheit, Stabilität und Zugehörigkeit.",
        motivation: "Sicherheit und Unterstützung zu haben",
        fear: "Ohne Unterstützung und Orientierung zu sein",
        color: "#3498db"
    },
    7: {
        name: "Typ 7: Der Enthusiast",
        badge: "Der Optimist",
        description: "Typ 7 ist optimistisch, vielseitig und spontan. Sie sind lebenslustig und haben einen unersättlichen Appetit auf neue Erfahrungen.",
        motivation: "Glücklich, zufrieden und frei zu sein",
        fear: "In Schmerz, Mangel oder Langeweile gefangen zu sein",
        color: "#9b59b6"
    },
    8: {
        name: "Typ 8: Der Herausforderer",
        badge: "Der Beschützer",
        description: "Typ 8 ist selbstbewusst, stark und durchsetzungsfähig. Sie sind geborene Anführer, die Kontrolle und Macht schätzen.",
        motivation: "Unabhängig, stark und Herr über ihr eigenes Leben zu sein",
        fear: "Verletzt, kontrolliert oder von anderen verletzt zu werden",
        color: "#34495e"
    },
    9: {
        name: "Typ 9: Der Friedliebende",
        badge: "Der Vermittler",
        description: "Typ 9 ist friedliebend, harmoniesuchend und verständnisvoll. Sie sind entspannt, geduldig und akzeptierend.",
        motivation: "Inneren und äußeren Frieden zu haben",
        fear: "Getrennt, verloren oder in Konflikt zu sein",
        color: "#95a5a6"
    }
};

function showTypeInfo(typeNumber) {
    const panel = document.getElementById('type-info-panel');
    const content = document.getElementById('type-info-content');
    const type = typeData[typeNumber];
    
    content.innerHTML = `
        <div style="border-left: 5px solid ${type.color}; padding-left: 2rem;">
            <h2 style="color: ${type.color}; margin-bottom: 1rem;">${type.name}</h2>
            <span style="background-color: ${type.color}; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">${type.badge}</span>
            
            <div style="margin-top: 2rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.8rem;">Beschreibung</h4>
                <p style="line-height: 1.8; color: var(--text-dark);">${type.description}</p>
            </div>
            
            <div style="margin-top: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.8rem;">Grundmotivation</h4>
                <p style="line-height: 1.8; color: var(--text-dark);">→ ${type.motivation}</p>
            </div>
            
            <div style="margin-top: 1.5rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.8rem;">Grundangst</h4>
                <p style="line-height: 1.8; color: var(--text-dark);">→ ${type.fear}</p>
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <button onclick="smoothScroll('#type-${typeNumber}')" style="padding: 0.8rem 2rem; background-color: ${type.color}; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 1rem; font-weight: 600;">
                    Mehr über Typ ${typeNumber} erfahren
                </button>
            </div>
        </div>
    `;
    
    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeTypeInfo() {
    const panel = document.getElementById('type-info-panel');
    panel.classList.add('hidden');
}

// Quiz System
const quizQuestions = [
    {
        question: "Wie gehst du mit Fehlern um?",
        options: [
            { text: "Ich kritisiere mich selbst stark und versuche, es besser zu machen", type: 1 },
            { text: "Ich sorge mich, was andere denken könnten", type: 2 },
            { text: "Ich versuche, sie schnell zu beheben und weiterzumachen", type: 3 },
            { text: "Ich reflektiere tief über meine Gefühle dabei", type: 4 },
            { text: "Ich analysiere, was schiefgelaufen ist", type: 5 },
            { text: "Ich mache mir Sorgen über die Konsequenzen", type: 6 },
            { text: "Ich lenke mich mit etwas Positivem ab", type: 7 },
            { text: "Ich nehme die Verantwortung und handle direkt", type: 8 },
            { text: "Ich versuche, den Frieden zu bewahren und es zu minimieren", type: 9 }
        ]
    },
    {
        question: "Was motiviert dich am meisten?",
        options: [
            { text: "Das Richtige zu tun und die Welt zu verbessern", type: 1 },
            { text: "Anderen zu helfen und geliebt zu werden", type: 2 },
            { text: "Erfolg zu haben und bewundert zu werden", type: 3 },
            { text: "Meine Einzigartigkeit auszudrücken und verstanden zu werden", type: 4 },
            { text: "Wissen zu erwerben und kompetent zu sein", type: 5 },
            { text: "Sicherheit zu haben und loyal zu sein", type: 6 },
            { text: "Neue Erfahrungen zu machen und Freiheit zu haben", type: 7 },
            { text: "Stark und unabhängig zu sein", type: 8 },
            { text: "Harmonie und inneren Frieden zu haben", type: 9 }
        ]
    },
    {
        question: "Wovor hast du am meisten Angst?",
        options: [
            { text: "Korrupt oder falsch zu sein", type: 1 },
            { text: "Ungeliebt und nicht gebraucht zu werden", type: 2 },
            { text: "Zu versagen und wertlos zu sein", type: 3 },
            { text: "Keine eigene Identität zu haben", type: 4 },
            { text: "Inkompetent und hilflos zu sein", type: 5 },
            { text: "Ohne Unterstützung und unsicher zu sein", type: 6 },
            { text: "In Schmerz oder Langeweile gefangen zu sein", type: 7 },
            { text: "Verletzlich und kontrolliert zu werden", type: 8 },
            { text: "In Konflikt und getrennt zu sein", type: 9 }
        ]
    },
    {
        question: "Wie triffst du Entscheidungen?",
        options: [
            { text: "Ich überlege, was richtig und ethisch ist", type: 1 },
            { text: "Ich denke darüber nach, wie es andere betrifft", type: 2 },
            { text: "Ich wähle, was mich meinen Zielen näherbringt", type: 3 },
            { text: "Ich folge meinen Gefühlen und meiner Intuition", type: 4 },
            { text: "Ich sammle Informationen und analysiere alle Optionen", type: 5 },
            { text: "Ich suche Rat und denke über Risiken nach", type: 6 },
            { text: "Ich wähle die aufregendste oder lustigste Option", type: 7 },
            { text: "Ich vertraue meinem Bauchgefühl und handle entschlossen", type: 8 },
            { text: "Ich versuche, alle glücklich zu machen und Konflikte zu vermeiden", type: 9 }
        ]
    },
    {
        question: "Wie würden Freunde dich beschreiben?",
        options: [
            { text: "Prinzipientreu, verantwortungsbewusst, perfektionistisch", type: 1 },
            { text: "Fürsorglich, großzügig, herzlich", type: 2 },
            { text: "Erfolgreich, ehrgeizig, charismatisch", type: 3 },
            { text: "Kreativ, tiefgründig, einzigartig", type: 4 },
            { text: "Intelligent, zurückhaltend, analytisch", type: 5 },
            { text: "Loyal, verantwortungsbewusst, vorsichtig", type: 6 },
            { text: "Optimistisch, abenteuerlustig, begeisterungsfähig", type: 7 },
            { text: "Stark, selbstbewusst, direkt", type: 8 },
            { text: "Friedliebend, entspannt, verständnisvoll", type: 9 }
        ]
    },
    {
        question: "Was ist deine größte Stärke?",
        options: [
            { text: "Mein starkes Verantwortungsgefühl und meine Integrität", type: 1 },
            { text: "Meine Empathie und meine Fähigkeit, anderen zu helfen", type: 2 },
            { text: "Meine Zielorientierung und Anpassungsfähigkeit", type: 3 },
            { text: "Meine Kreativität und emotionale Tiefe", type: 4 },
            { text: "Meine Fähigkeit zu beobachten und zu verstehen", type: 5 },
            { text: "Meine Loyalität und Verlässlichkeit", type: 6 },
            { text: "Mein Optimismus und meine Vielseitigkeit", type: 7 },
            { text: "Meine Führungsstärke und mein Mut", type: 8 },
            { text: "Meine Fähigkeit, Frieden zu stiften und zu vermitteln", type: 9 }
        ]
    },
    {
        question: "Wie gehst du mit Stress um?",
        options: [
            { text: "Ich werde noch kritischer und strenger mit mir selbst", type: 1 },
            { text: "Ich versuche, noch mehr für andere zu tun, werde aber manipulativer", type: 2 },
            { text: "Ich arbeite noch härter, verliere aber meine Authentizität", type: 3 },
            { text: "Ich ziehe mich zurück und werde melancholisch", type: 4 },
            { text: "Ich isoliere mich und werde noch mehr zum Beobachter", type: 5 },
            { text: "Ich werde ängstlicher und misstrauischer", type: 6 },
            { text: "Ich lenke mich ab und vermeide unangenehme Gefühle", type: 7 },
            { text: "Ich werde konfrontativer und kontrollierender", type: 8 },
            { text: "Ich werde träge und vermeide Probleme noch mehr", type: 9 }
        ]
    },
    {
        question: "Was ist dir in Beziehungen am wichtigsten?",
        options: [
            { text: "Ehrlichkeit, Integrität und gemeinsame Werte", type: 1 },
            { text: "Emotionale Nähe und das Gefühl, gebraucht zu werden", type: 2 },
            { text: "Gegenseitige Bewunderung und Unterstützung meiner Ziele", type: 3 },
            { text: "Tiefe emotionale Verbindung und Verständnis", type: 4 },
            { text: "Respekt für meine Privatsphäre und intellektuelle Anregung", type: 5 },
            { text: "Vertrauen, Sicherheit und Verlässlichkeit", type: 6 },
            { text: "Spaß, Abenteuer und gemeinsame Erlebnisse", type: 7 },
            { text: "Ehrlichkeit, Stärke und gegenseitiger Respekt", type: 8 },
            { text: "Harmonie, Akzeptanz und Frieden", type: 9 }
        ]
    }
];

let currentQuestion = 0;
let answers = [];

function initializeQuiz() {
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    const progressElement = document.getElementById('progress-indicator');
    
    if (currentQuestion >= quizQuestions.length) {
        showResults();
        return;
    }
    
    const question = quizQuestions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index);
        
        if (answers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionsElement.appendChild(optionDiv);
    });
    
    // Update progress indicator
    progressElement.innerHTML = '';
    for (let i = 0; i < quizQuestions.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === currentQuestion) {
            dot.classList.add('active');
        }
        if (answers[i] !== undefined) {
            dot.style.backgroundColor = 'var(--secondary-color)';
        }
        progressElement.appendChild(dot);
    }
    
    // Update button states
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = 
        currentQuestion === quizQuestions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter';
}

function selectOption(index) {
    answers[currentQuestion] = index;
    displayQuestion();
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) {
        alert('Bitte wähle eine Antwort aus.');
        return;
    }
    
    currentQuestion++;
    displayQuestion();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function showResults() {
    // Calculate scores
    const scores = {};
    for (let i = 1; i <= 9; i++) {
        scores[i] = 0;
    }
    
    answers.forEach((answerIndex, questionIndex) => {
        const question = quizQuestions[questionIndex];
        const selectedOption = question.options[answerIndex];
        scores[selectedOption.type]++;
    });
    
    // Find top type
    let topType = 1;
    let maxScore = 0;
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            topType = type;
        }
    }
    
    // Find second type
    let secondType = 1;
    let secondScore = 0;
    for (let type in scores) {
        if (type != topType && scores[type] > secondScore) {
            secondScore = scores[type];
            secondType = type;
        }
    }
    
    // Hide quiz, show results
    document.getElementById('quiz-container').style.display = 'none';
    const resultElement = document.getElementById('quiz-result');
    resultElement.classList.remove('hidden');
    
    const type = typeData[topType];
    const secondTypeData = typeData[secondType];
    
    document.getElementById('result-content').innerHTML = `
        <div class="result-type-card" style="border-left: 5px solid ${type.color};">
            <h4 style="color: ${type.color};">Dein Haupttyp: ${type.name}</h4>
            <p><strong>Beschreibung:</strong> ${type.description}</p>
            <p><strong>Grundmotivation:</strong> ${type.motivation}</p>
            <p><strong>Grundangst:</strong> ${type.fear}</p>
        </div>
        
        <div class="result-type-card" style="border-left: 5px solid ${secondTypeData.color}; opacity: 0.8;">
            <h4 style="color: ${secondTypeData.color};">Dein Zweittyp: ${secondTypeData.name}</h4>
            <p>Du zeigst auch starke Tendenzen zu diesem Typ. Dies könnte dein Flügel sein oder ein Typ, zu dem du dich in bestimmten Situationen bewegst.</p>
        </div>
        
        <div style="margin-top: 2rem; padding: 2rem; background: var(--background-light); border-radius: 15px;">
            <h5 style="color: var(--primary-color); margin-bottom: 1rem;">Wichtiger Hinweis</h5>
            <p>Dieses Quiz gibt nur einen ersten Eindruck. Für eine genaue Typisierung ist tiefere Selbstreflexion und möglicherweise professionelle Begleitung empfehlenswert. Lies die detaillierten Beschreibungen aller Typen, um mehr über dich zu erfahren.</p>
        </div>
        
        <div style="margin-top: 2rem; text-align: center;">
            <button onclick="smoothScroll('#type-${topType}')" style="padding: 1rem 2rem; background-color: ${type.color}; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 1.1rem; font-weight: 600; margin: 0.5rem;">
                Mehr über deinen Typ erfahren
            </button>
        </div>
    `;
    
    resultElement.scrollIntoView({ behavior: 'smooth' });
}

function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('quiz-result').classList.add('hidden');
    displayQuestion();
    document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth' });
}

// Scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate feature cards
    document.querySelectorAll('.feature-card, .type-detail, .journey-card, .level-card, .center-card, .practice-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});
