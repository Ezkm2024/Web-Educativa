// Preguntas de la trivia
const questions = [
    {
        question: "¿Qué lenguaje de programación utiliza principalmente Angular?",
        options: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Java"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el comando de Angular CLI para crear un nuevo proyecto?",
        options: [
            "ng new",
            "angular create",
            "ng init",
            "angular new"
        ],
        correct: 0
    },
    {
        question: "¿Qué es un componente en Angular?",
        options: [
            "Una función JavaScript",
            "Una clase TypeScript con decorador @Component",
            "Un archivo CSS",
            "Una base de datos"
        ],
        correct: 1
    },
    {
        question: "¿Qué significa SPA en el contexto de Angular?",
        options: [
            "Single Page Application",
            "Simple Page App",
            "System Program Application",
            "Server Page Application"
        ],
        correct: 0
    },
    {
        question: "¿Qué empresa desarrolla y mantiene Angular?",
        options: [
            "Microsoft",
            "Facebook",
            "Google",
            "Amazon"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

// Elementos del DOM
const questionElement = document.getElementById('trivia-question');
const optionsElement = document.getElementById('trivia-options');
const feedbackElement = document.getElementById('trivia-feedback');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const questionNumberElement = document.getElementById('question-number');
const totalQuestionsElement = document.getElementById('total-questions');

// Inicializar
function init() {
    totalQuestionsElement.textContent = questions.length;
    loadQuestion();
    
    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Cargar pregunta
function loadQuestion() {
    answered = false;
    const question = questions[currentQuestion];
    
    questionElement.textContent = question.question;
    questionNumberElement.textContent = currentQuestion + 1;
    
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.setAttribute('tabindex', '0');
        button.setAttribute('role', 'button');
        button.addEventListener('click', () => selectAnswer(index));
        // Accesibilidad del teclado
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectAnswer(index);
            }
        });
        optionsElement.appendChild(button);
    });
    
    feedbackElement.classList.remove('show', 'correct', 'incorrect');
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';
}

// Seleccionar respuesta
function selectAnswer(selectedIndex) {
    if (answered) return;
    
    answered = true;
    const question = questions[currentQuestion];
    const options = optionsElement.querySelectorAll('.option-btn');
    
    // Deshabilitar todos los botones
    options.forEach(btn => btn.disabled = true);
    
    // Marcar respuesta correcta e incorrecta
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
        scoreElement.textContent = score;
        showFeedback('¡Correcto! 🎉', true);
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
        showFeedback(`Incorrecto. La respuesta correcta es: ${question.options[question.correct]}`, false);
    }
    
    // Mostrar botón siguiente o reiniciar
    if (currentQuestion < questions.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        restartBtn.style.display = 'block';
        showFinalScore();
    }
}

// Mostrar retroalimentación
function showFeedback(message, isCorrect) {
    feedbackElement.textContent = message;
    feedbackElement.classList.add('show', isCorrect ? 'correct' : 'incorrect');
}

// Mostrar puntaje final
function showFinalScore() {
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '¡Excelente! 🏆 Obtuviste el 100% de las respuestas correctas.';
    } else if (percentage >= 80) {
        message = `¡Muy bien! 👍 Obtuviste ${score} de ${questions.length} respuestas correctas.`;
    } else if (percentage >= 60) {
        message = `Buen intento. Obtuviste ${score} de ${questions.length} respuestas correctas.`;
    } else {
        message = `Sigue practicando. Obtuviste ${score} de ${questions.length} respuestas correctas.`;
    }
    
    setTimeout(() => {
        showFeedback(message, percentage >= 60);
    }, 1000);
}

// Siguiente pregunta
nextBtn.addEventListener('click', () => {
    currentQuestion++;
    loadQuestion();
});

// Reiniciar trivia
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = score;
    loadQuestion();
});

// Menú móvil
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observar elementos para animaciones al hacer scroll
document.querySelectorAll('.feature-card, .use-card, .resource-card, .concept-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ========== JUEGO DE RULETA ==========
let rouletteWheel, spinBtn, rouletteResult, rouletteInfo, roulettePoints, rouletteSpins;
let isSpinning = false;
let totalPoints = 0;
let totalSpins = 0;
let currentRotation = 0;

// Información sobre cada concepto
const conceptInfo = {
    'Componentes': {
        description: 'Los componentes son los bloques fundamentales de Angular. Cada componente encapsula lógica, plantilla y estilos, permitiendo crear aplicaciones modulares y reutilizables.',
        points: 10
    },
    'Directivas': {
        description: 'Las directivas extienden el HTML con comportamientos personalizados. Angular incluye directivas estructurales (*ngIf, *ngFor) y directivas de atributo para manipular el DOM.',
        points: 8
    },
    'Servicios': {
        description: 'Los servicios son clases que contienen lógica de negocio reutilizable. Se inyectan en componentes mediante el sistema de inyección de dependencias de Angular.',
        points: 12
    },
    'Módulos': {
        description: 'Los módulos agrupan componentes, servicios y otros elementos relacionados. El AppModule es el módulo raíz que arranca la aplicación Angular.',
        points: 9
    },
    'Routing': {
        description: 'El sistema de enrutamiento permite navegar entre diferentes vistas sin recargar la página, creando una experiencia de aplicación de una sola página (SPA).',
        points: 11
    },
    'Pipes': {
        description: 'Los pipes transforman datos en las plantillas. Angular incluye pipes integrados (date, currency, uppercase) y permite crear pipes personalizados.',
        points: 7
    },
    'Forms': {
        description: 'Angular ofrece dos enfoques para formularios: Template-driven Forms y Reactive Forms, ambos con validación integrada y manejo de errores.',
        points: 13
    },
    'HTTP': {
        description: 'El servicio HttpClient permite realizar peticiones HTTP a APIs. Angular incluye interceptores para manejar requests y responses de forma centralizada.',
        points: 10
    }
};

// Función para girar la ruleta
function spinRoulette() {
    if (!rouletteWheel || !spinBtn || isSpinning) return;
    
    isSpinning = true;
    spinBtn.disabled = true;
    
    // Ocultar resultados anteriores
    if (rouletteResult) rouletteResult.classList.remove('show');
    if (rouletteInfo) rouletteInfo.classList.remove('show');
    
    // Calcular rotación aleatoria (mínimo 3 vueltas completas)
    const segments = 8;
    const segmentAngle = 360 / segments; // 45 grados por segmento
    const minSpins = 3;
    const maxSpins = 6;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const randomSegment = Math.floor(Math.random() * segments);
    
    // IMPORTANTE: Sincronización con CSS
    // El conic-gradient en CSS usa "from -90deg", lo que significa:
    // - El primer color (rojo #dd0031) empieza en la parte superior (visualmente 0°)
    // - En coordenadas matemáticas, la parte superior es -90° (o 270°)
    // - Los segmentos HTML están rotados: -22.5°, 22.5°, 67.5°, 112.5°, etc.
    // - El puntero está fijo en la parte superior (visualmente 0°, matemáticamente -90°)
    
    // Calcular ángulo final para que el segmento aleatorio quede debajo del puntero
    // Los segmentos están centrados en: -22.5°, 22.5°, 67.5°, 112.5°, 157.5°, 202.5°, 247.5°, 292.5°
    // Para que el segmento N quede en el puntero (0° visual = -90° matemático):
    // - Segmento 0 (centrado en -22.5°): necesita rotar -22.5° - (-90°) = 67.5°
    // - Segmento 1 (centrado en 22.5°): necesita rotar 22.5° - (-90°) = 112.5°
    // - En general: segmentCenterAngle - (-90°) = segmentCenterAngle + 90°
    
    const segmentCenters = [-22.5, 22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5];
    const targetSegmentCenter = segmentCenters[randomSegment];
    const rotationOffset = -90; // Offset del conic-gradient
    const targetAngle = targetSegmentCenter - rotationOffset; // Ángulo necesario para centrar el segmento
    
    const finalAngle = currentRotation + (spins * 360) + targetAngle;
    currentRotation = finalAngle;
    
    // Aplicar rotación
    rouletteWheel.style.transform = `rotate(${finalAngle}deg)`;
    
    // Determinar concepto ganador - CÁLCULO PRECISO
    // El puntero está fijo en la parte superior (0° visual = -90° matemático)
    // Cuando la ruleta rota X grados, necesitamos calcular qué segmento está en -90°
    
    // Normalizar el ángulo final a 0-360
    let normalizedAngle = ((finalAngle % 360) + 360) % 360;
    
    // Convertir a coordenadas matemáticas (0° = derecha, 90° = abajo, -90° = arriba)
    // El puntero está en -90° (arriba)
    // Si la ruleta rota X grados, el segmento que estaba en (-90° - X) ahora está en -90°
    let pointerAngleMath = -90; // Posición del puntero en coordenadas matemáticas
    let relativeAngle = (pointerAngleMath - normalizedAngle + 360) % 360;
    
    // Convertir de vuelta a coordenadas visuales (0° = arriba)
    let pointerAngleVisual = (relativeAngle + 90) % 360;
    
    // Calcular qué segmento está en esa posición
    // Los segmentos están centrados en: -22.5°, 22.5°, 67.5°, 112.5°, 157.5°, 202.5°, 247.5°, 292.5°
    // En coordenadas visuales (0° = arriba): 67.5°, 112.5°, 157.5°, 202.5°, 247.5°, 292.5°, 337.5°, 22.5°
    // Pero mejor: calcular directamente desde el ángulo normalizado
    
    // Método más directo: usar el segmento aleatorio que ya calculamos
    // Pero verificamos con cálculo matemático para depuración
    let calculatedSegment = Math.floor((pointerAngleVisual + (segmentAngle / 2)) / segmentAngle) % segments;
    if (calculatedSegment < 0) calculatedSegment += segments;
    
    // Usar el segmento aleatorio (que es el correcto porque lo calculamos para que quede ahí)
    let winningSegment = randomSegment;
    
    // Logs de depuración detallados
    console.log('=== DEPURACIÓN RULETA ===');
    console.log('Segmento aleatorio seleccionado:', randomSegment);
    console.log('Centro del segmento (CSS):', targetSegmentCenter + '°');
    console.log('Ángulo objetivo calculado:', targetAngle.toFixed(2) + '°');
    console.log('Ángulo final (normalizado):', normalizedAngle.toFixed(2) + '°');
    console.log('Ángulo relativo al puntero:', relativeAngle.toFixed(2) + '°');
    console.log('Ángulo del puntero (visual):', pointerAngleVisual.toFixed(2) + '°');
    console.log('Segmento calculado (verificación):', calculatedSegment);
    console.log('Segmento usado:', winningSegment);
    console.log('¿Coinciden?', calculatedSegment === randomSegment ? '✅ SÍ' : '❌ NO - ERROR DE SINCRONIZACIÓN');
    console.log('Ángulo por segmento:', segmentAngle + '°');
    console.log('========================');
    
    const segmentsArray = Array.from(rouletteWheel.querySelectorAll('.roulette-segment'));
    if (segmentsArray.length === 0) {
        console.error('No se encontraron segmentos de ruleta');
        isSpinning = false;
        spinBtn.disabled = false;
        return;
    }
    
    // Verificar que el segmento calculado sea válido
    if (winningSegment < 0 || winningSegment >= segmentsArray.length) {
        console.error('Índice de segmento inválido:', winningSegment);
        winningSegment = 0; // Fallback al primer segmento
    }
    
    const winningConcept = segmentsArray[winningSegment]?.getAttribute('data-concept');
    
    if (!winningConcept || !conceptInfo[winningConcept]) {
        console.error('Concepto ganador no encontrado:', winningConcept, 'en segmento:', winningSegment);
        console.log('Segmentos disponibles:', segmentsArray.map(s => s.getAttribute('data-concept')));
        isSpinning = false;
        spinBtn.disabled = false;
        return;
    }
    
    console.log('✅ Concepto ganador confirmado:', winningConcept);
    
    // Mostrar resultado después de la animación
    setTimeout(() => {
        const concept = conceptInfo[winningConcept];
        const pointsEarned = concept.points;
        totalPoints += pointsEarned;
        totalSpins++;
        
        // Actualizar estadísticas
        if (roulettePoints) roulettePoints.textContent = totalPoints;
        if (rouletteSpins) rouletteSpins.textContent = totalSpins;
        
        // Mostrar modal
        showRouletteModal(winningConcept, pointsEarned, concept.description);
        
        isSpinning = false;
        spinBtn.disabled = false;
        
        // Efecto de confeti si obtiene muchos puntos
        if (pointsEarned >= 12) {
            createConfetti();
        }
    }, 4000);
}

// Función para mostrar el modal
function showRouletteModal(concept, points, description) {
    const modal = document.getElementById('roulette-modal');
    const modalTitle = document.getElementById('roulette-modal-title');
    const modalConcept = document.getElementById('roulette-modal-concept');
    const modalPoints = document.getElementById('roulette-modal-points');
    const modalDescription = document.getElementById('roulette-modal-description');
    
    if (!modal) return;
    
    // Actualizar contenido del modal
    if (modalConcept) modalConcept.textContent = concept;
    if (modalPoints) modalPoints.textContent = `+${points} puntos`;
    if (modalDescription) modalDescription.textContent = description;
    
    // Mostrar modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
    
    // Efecto de confeti
    createConfetti();
}

// Función para cerrar el modal
function closeRouletteModal() {
    const modal = document.getElementById('roulette-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restaurar scroll
    }
}

// Función para crear efecto de confeti
function createConfetti() {
    const colors = ['#dd0031', '#1976d2', '#4caf50', '#ff9800', '#9c27b0', '#f44336', '#00bcd4', '#ffc107'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Agregar animación de confeti al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar ruleta cuando el DOM esté listo
function initRoulette() {
    rouletteWheel = document.getElementById('roulette-wheel');
    spinBtn = document.getElementById('spin-btn');
    rouletteResult = document.getElementById('roulette-result');
    rouletteInfo = document.getElementById('roulette-info');
    roulettePoints = document.getElementById('roulette-points');
    rouletteSpins = document.getElementById('roulette-spins');
    
    if (spinBtn) {
        spinBtn.addEventListener('click', spinRoulette);
    }
    
    // Event listeners para cerrar el modal
    const modalCloseBtn = document.getElementById('roulette-modal-close');
    const modalBtnClose = document.getElementById('roulette-modal-btn-close');
    const modal = document.getElementById('roulette-modal');
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeRouletteModal);
    }
    
    if (modalBtnClose) {
        modalBtnClose.addEventListener('click', closeRouletteModal);
    }
    
    // Cerrar modal al hacer clic fuera
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeRouletteModal();
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeRouletteModal();
        }
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRoulette);
} else {
    initRoulette();
}

