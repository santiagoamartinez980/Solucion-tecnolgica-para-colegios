// MÓDULOS (6 temas) con video, preguntas y respuestas correctas
const modulesData = [
    {
        id: 0,
        title: "Robótica Educativa",
        videoUrl: "https://www.youtube.com/embed/m8fPAfNyZVY",
        desc: "Aprende robótica desde cero con Micro:bit, sensores y proyectos prácticos.",
        icon: "🤖",
        preguntas: [
            { text: "¿Qué placa se utiliza principalmente en el video para proyectos de robótica educativa?", options: ["Arduino Uno", "Micro:bit", "Raspberry Pi", "ESP32"], correct: 1 },
            { text: "¿Cuál es el nombre del kit que se muestra en el video?", options: ["Smart Cutebot Pro", "Mbot Ultimate", "LEGO Spike", "Kit inventor"], correct: 0 },
            { text: "¿Uno de los retos propuestos en el video es:", options: ["Detectar colores", "Movimiento aleatorio", "Reconocimiento facial", "Vuelo con drones"], correct: 1 },
            { text: "¿Qué recurso en línea mencionan para acceder a tutoriales y documentación?", options: ["Wiki de Elecfreaks", "GitHub oficial", "Arduino Project Hub", "Micro:bit classroom"], correct: 0 },
            { text: "¿Qué tipo de proyecto demuestran al final del video?", options: ["Robótica submarina", "Detección de sonido y luces", "Impresión 3D", "Navegación GPS"], correct: 1 }
        ]
    },
    {
        id: 1,
        title: "Tecnologías Emergentes",
        videoUrl: "https://www.youtube.com/embed/Ojlp2ckkQ-Y",
        desc: "IoT, gemelos digitales, impresión 3D y el futuro de la tecnología.",
        icon: "🌐",
        preguntas: [
            { text: "¿Cuál es uno de los ejemplos de IoT mencionados en el video?", options: ["Lámparas inteligentes", "Autos voladores", "Microondas 5G", "Impresoras láser"], correct: 0 },
            { text: "¿Qué concepto se refiere a una réplica digital de un objeto o proceso físico?", options: ["Realidad aumentada", "Gemelo digital", "Blockchain", "Edge computing"], correct: 1 },
            { text: "¿Qué tecnología permite superponer información virtual sobre el mundo real?", options: ["Realidad Virtual", "Realidad Aumentada", "Metaverso", "Hologramas"], correct: 1 },
            { text: "¿Cuál de estos NO es una tecnología emergente según el video?", options: ["Impresión 3D", "Internet de las Cosas", "USB 2.0", "Blockchain"], correct: 2 },
            { text: "¿Qué área se beneficia con sensores IoT para monitoreo en tiempo real?", options: ["Agricultura de precisión", "Edición de video", "Telefonía fija", "Textilería manual"], correct: 0 }
        ]
    },
    {
        id: 2,
        title: "Infraestructura TIC",
        videoUrl: "https://www.youtube.com/embed/P62mr2eQHfw",
        desc: "Hardware, software y redes: la columna vertebral de las organizaciones.",
        icon: "🖧",
        preguntas: [
            { text: "¿Qué conjunto abarca la infraestructura de IT según el video?", options: ["Hardware, software y redes", "Solo servidores", "Solo software de gestión", "Solo equipos de usuario"], correct: 0 },
            { text: "¿Qué software se menciona para la gestión de activos TI?", options: ["InvGate Asset Management", "Jira", "Nagios", "Zabbix"], correct: 0 },
            { text: "¿Cuál es un beneficio de una infraestructura optimizada?", options: ["Aumento del paperleo", "Menor productividad", "Impacto positivo en servicio al cliente", "Aislamiento de datos"], correct: 2 },
            { text: "¿Qué herramienta permite ver la relación entre componentes de TI?", options: ["CMDB (Configuration Management Database)", "CRM", "ERP", "SCADA"], correct: 0 },
            { text: "¿Qué funcionalidad importante ofrece el software ITAM?", options: ["Alertas ante fallos", "Edición de fotos", "Diseño 3D", "Juegos multijugador"], correct: 0 }
        ]
    },
    {
        id: 3,
        title: "Inteligencia Artificial",
        videoUrl: "https://www.youtube.com/embed/XuWMWPwdlik",
        desc: "IA generativa, ChatGPT, aplicaciones educativas y ética.",
        icon: "🧠",
        preguntas: [
            { text: "¿Cuál es un ejemplo de IA generativa mencionado?", options: ["ChatGPT", "Windows Media Player", "MySQL", "Photoshop"], correct: 0 },
            { text: "¿Qué tipo de IA aprende de grandes volúmenes de datos para crear contenido nuevo?", options: ["IA generativa", "IA reactiva", "IA simbólica", "IA híbrida"], correct: 0 },
            { text: "¿Cuál es una aplicación educativa de la IA?", options: ["Tutores personalizados", "Proyectores analógicos", "Pizarrón de tiza", "Libros de texto sin digitalizar"], correct: 0 },
            { text: "¿Qué aspecto ético de la IA se discute en el video?", options: ["Sesgos algorítmicos", "Velocidad de proceso", "Cantidad de LEDs", "Tamaño del servidor"], correct: 0 },
            { text: "¿Cuál es un asistente de voz basado en IA?", options: ["Siri", "MS-DOS", "Norton Commander", "Excel 95"], correct: 0 }
        ]
    },
    {
        id: 4,
        title: "Competencias Docentes en TIC",
        videoUrl: "https://www.youtube.com/embed/CdfPG1eU0dU",
        desc: "Formación del profesorado en tecnología educativa.",
        icon: "👩‍🏫",
        preguntas: [
            { text: "¿Qué universidad produjo la píldora formativa?", options: ["Universidad de Sevilla", "Universidad Complutense", "Universidad de Barcelona", "Universidad de los Andes"], correct: 0 },
            { text: "¿Cuál es la duración máxima de cada video objeto de aprendizaje?", options: ["4 minutos", "10 minutos", "15 minutos", "30 minutos"], correct: 0 },
            { text: "¿En qué plataforma se integran estos recursos?", options: ["Blackboard", "Moodle", "Coursera", "Edmodo"], correct: 0 },
            { text: "¿Qué busca este material multimedia?", options: ["Reforzar contenidos de aprendizaje", "Reemplazar al profesor", "Eliminar tareas", "Reducir horas de clase"], correct: 0 },
            { text: "¿Qué asignatura aborda estos recursos?", options: ["TIC aplicadas a la educación", "Cálculo avanzado", "Derecho romano", "Anatomía"], correct: 0 }
        ]
    },
    {
        id: 5,
        title: "Innovación Educativa",
        videoUrl: "https://www.youtube.com/embed/9fw0c4Gngfk",
        desc: "Metodologías activas, flipped classroom y transformación pedagógica.",
        icon: "💡",
        preguntas: [
            { text: "¿Qué método se menciona como ejemplo de innovación educativa?", options: ["Flipped classroom", "Clase magistral tradicional", "Copiar apuntes", "Examen oral puro"], correct: 0 },
            { text: "¿Cuál es uno de los objetivos de la innovación educativa?", options: ["Mejorar procesos de aprendizaje", "Aumentar la deserción", "Eliminar la tecnología", "Reducir la creatividad"], correct: 0 },
            { text: "¿Qué rol tiene el alumno en entornos innovadores?", options: ["Activo y protagonista", "Pasivo y receptor", "Observador", "Espectador"], correct: 0 },
            { text: "¿Qué implica el aula invertida?", options: ["Ver contenido en casa y practicar en clase", "Más tareas escritas", "Eliminar exámenes", "Solo libros de texto"], correct: 0 },
            { text: "¿La innovación educativa requiere?", options: ["Voluntad de cambio y formación", "Prohibir la tecnología", "Aulas sin alumnos", "Solo pizarra digital"], correct: 0 }
        ]
    }
];

// Estado de progreso: almacena si cada módulo está completado (quiz aprobado)
let completedModules = new Array(modulesData.length).fill(false);
let currentModuleId = null;    // módulo abierto en el modal

// Referencias DOM
const cardsGrid = document.getElementById("cardsGrid");
const modal = document.getElementById("modalLeccion");
const modalTitle = document.getElementById("modalTitulo");
const videoFrame = document.getElementById("videoFrame");
const preguntasContainer = document.getElementById("preguntasContainer");
const submitBtn = document.getElementById("submitQuizBtn");
const quizFeedback = document.getElementById("quizFeedback");
const closeModalBtn = document.getElementById("closeModalBtn");
const globalProgressFill = document.getElementById("globalProgress");
const progressPercentSpan = document.getElementById("progressPercent");

// Función para guardar en localStorage y actualizar UI de cards
function saveProgressAndUpdateUI() {
    localStorage.setItem("modulosCompletados", JSON.stringify(completedModules));
    renderCards();                // refrescar estado de cada botón
    updateGlobalProgress();
}

// Actualizar barra de progreso general
function updateGlobalProgress() {
    const completados = completedModules.filter(v => v === true).length;
    const percent = (completados / modulesData.length) * 100;
    globalProgressFill.style.width = `${percent}%`;
    progressPercentSpan.innerText = `${Math.round(percent)}%`;
}

// Renderizar todas las tarjetas con estado bloqueado/completado
function renderCards() {
    cardsGrid.innerHTML = "";
    modulesData.forEach((mod, idx) => {
        const isCompleted = completedModules[idx];
        const isLocked = !isModuleAccessible(idx);
        
        const card = document.createElement("div");
        card.className = `curso-card ${isLocked && !isCompleted ? "locked" : ""}`;
        card.innerHTML = `
            <div class="card-icon">${mod.icon}</div>
            <h3>${mod.title}</h3>
            <p>${mod.desc}</p>
            <span class="card-status ${isCompleted ? "completed" : ""}">
                ${isCompleted ? "✓ Completado" : (isLocked ? "🔒 Bloqueado" : "📘 Disponible")}
            </span>
            <button class="btn-acceder" data-idx="${idx}" ${isLocked && !isCompleted ? "disabled" : ""}>
                ${isCompleted ? "Repasar módulo" : "Acceder y completar"}
            </button>
        `;
        cardsGrid.appendChild(card);
    });
    
    // Eventos después de renderizar
    document.querySelectorAll(".btn-acceder").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(btn.getAttribute("data-idx"));
            abrirModal(idx);
        });
    });
}

// Verificar si un módulo es accesible (depende de completar el anterior)
function isModuleAccessible(moduleIndex) {
    if (moduleIndex === 0) return true;   // primer módulo siempre abierto
    // debe estar completado el módulo anterior
    return completedModules[moduleIndex - 1] === true;
}

// Abrir modal con el video y cuestionario
function abrirModal(moduleId) {
    if (!isModuleAccessible(moduleId) && !completedModules[moduleId]) {
        alert("Debes completar el módulo anterior antes de acceder a éste.");
        return;
    }
    currentModuleId = moduleId;
    const mod = modulesData[moduleId];
    modalTitle.innerText = mod.title;
    videoFrame.src = mod.videoUrl;
    // Generar preguntas dinámicamente
    generarPreguntas(mod.preguntas);
    quizFeedback.innerHTML = "";
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    
    // Si el módulo ya estaba completado, mostrar mensaje y permitir repaso (pero sin revalidar)
    if (completedModules[moduleId]) {
        quizFeedback.innerHTML = "<span style='color:#15803d;'>✅ Ya habías completado este módulo. Puedes repasar el contenido.</span>";
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.6";
    } else {
        // Asegurarse de que el usuario vea el cuestionario limpio
    }
    modal.style.display = "flex";
}

function generarPreguntas(preguntas) {
    preguntasContainer.innerHTML = "";
    preguntas.forEach((p, idx) => {
        const divPreg = document.createElement("div");
        divPreg.className = "pregunta-item";
        divPreg.innerHTML = `
            <div class="pregunta-text">${idx+1}. ${p.text}</div>
            <div class="opciones" data-pregunta="${idx}">
                ${p.options.map((opt, optIdx) => `
                    <label>
                        <input type="radio" name="preg${idx}" value="${optIdx}">
                        ${opt}
                    </label>
                `).join("")}
            </div>
        `;
        preguntasContainer.appendChild(divPreg);
    });
}

// Evaluar respuestas
function evaluarCuestionario() {
    if (completedModules[currentModuleId]) return true; // ya estaba completo
    const mod = modulesData[currentModuleId];
    let correctas = 0;
    for (let i = 0; i < mod.preguntas.length; i++) {
        const selected = document.querySelector(`input[name="preg${i}"]:checked`);
        if (selected && parseInt(selected.value) === mod.preguntas[i].correct) {
            correctas++;
        }
    }
    const porcentaje = (correctas / mod.preguntas.length) * 100;
    if (porcentaje >= 60) {   // mínimo 60% para aprobar
        completedModules[currentModuleId] = true;
        saveProgressAndUpdateUI();
        quizFeedback.innerHTML = `<span style='color:#15803d;'>✅ ¡Aprobado! (${correctas}/${mod.preguntas.length}) Has desbloqueado el siguiente módulo.</span>`;
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.6";
        updateGlobalProgress();
        return true;
    } else {
        quizFeedback.innerHTML = `<span style='color:#b91c1c;'>❌ No alcanzaste el mínimo (${correctas}/${mod.preguntas.length}). Necesitas al menos 60%. Vuelve a ver el video y reintenta.</span>`;
        return false;
    }
}

// Eventos
submitBtn.addEventListener("click", () => {
    if (completedModules[currentModuleId]) return;
    evaluarCuestionario();
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = "";  // pausar video
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
});

// Cargar progreso guardado y actualizar interfaz
function loadProgress() {
    const saved = localStorage.getItem("modulosCompletados");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed.length === modulesData.length) completedModules = parsed;
        } catch(e) {}
    }
    renderCards();
    updateGlobalProgress();
}

loadProgress();