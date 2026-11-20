/**
 * 1. ICONOS SVG INLINE (SIN DEPENDENCIA DE CDNs DE ICONOS)
 */
const SVG_ICONS = {
    briefcase: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    smile: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
    clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
    rocket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>',
    chat: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    star: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    checkCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    up: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>',
    down: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
    edit: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    trash: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
    doctor: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>',
    salud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
    hospital: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>',
    ambulancia: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/><path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
    puerta_cerrada: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16"/><path d="M2 21h20"/><path d="M9 12h.01"/></svg>',
    puerta_abierta: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 21H2"/><path d="M10 3H7a2 2 0 00-2 2v16"/><path d="M14 12h.01"/><path d="M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z"/><path d="M22 21h-3"/></svg>',
    avion: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    palmera: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/></svg>',
    balon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 7a16 16 20 0 1 10.98 4.362"/><path d="M12 12a13 13 0 0 1-8.66 5"/><path d="M16.83 13.634a16 16 0 0 1-9.267 7.328"/><path d="M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10"/><path d="M8.17 15.366a16 16 0 0 1-1.713-11.69"/><circle cx="12" cy="12" r="10"/></svg>',
    lapiz: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>',
    calendario: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>',
    telefono: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>',
    persona: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    persona_check: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>',
    persona_cross: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></svg>',
    persona_alarm: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 15H9a4 4 0 00-4 4v2"/><path d="M18.988 13v4"/><path d="M18.988 21h.01"/><circle cx="12" cy="7" r="4"/></svg>',
    
    
};

const ICON_OPTIONS = [
    { value: 'briefcase', label: 'Maletín' },
    { value: 'smile', label: 'Sonrisa' },
    { value: 'clock', label: 'Reloj' },
    { value: 'heart', label: 'Corazón' },
    { value: 'alert', label: 'Alerta' },
    { value: 'rocket', label: 'Cohete' },
    { value: 'chat', label: 'Diálogo' },
    { value: 'star', label: 'Estrella' },
    { value: 'doctor', label: 'Médico' },
    { value: 'salud', label: 'Salud' },
    { value: 'hospital', label: 'Hospital' },
    { value: 'ambulancia', label: 'Ambulancia' },
    { value: 'puerta_cerrada', label: 'Puerta Cerrada' },
    { value: 'puerta_abierta', label: 'Puerta Abierta' },
    { value: 'palmera', label: 'Palmera' },
    { value: 'balon', label: 'Balón' },
    { value: 'lapiz', label: 'Lapiz' },
    { value: 'calendario', label: 'Calendario' },
    { value: 'telefono', label: 'Telefono' },
    { value: 'persona', label: 'Persona' },
    { value: 'persona_check', label: 'Persona ausente' },
    { value: 'persona_cross', label: 'Persona presente' },
    { value: 'persona_alarm', label: 'Persona atención' },


];

const COLOR_OPTIONS = [
    { value: 'indigo', label: 'Índigo', dot: '#4f46e5' },
    { value: 'emerald', label: 'Esmeralda', dot: '#059669' },
    { value: 'amber', label: 'Ámbar', dot: '#d97706' },
    { value: 'rose', label: 'Rosa', dot: '#e11d48' },
    { value: 'cyan', label: 'Cian', dot: '#0891b2' },
    { value: 'violet', label: 'Violeta', dot: '#7c3aed' },
    { value: 'slate', label: 'Pizarra', dot: '#475569' }
];

/**
 * 2. DATOS POR DEFECTO
 */
const DEFAULT_FORM_VARS = [
    { key: 'nombre', label: 'Nombre del padre/madre', placeholder: 'Ej. Laura', type: 'text' },
    { key: 'alumno', label: 'Nombre del alumno/a', placeholder: 'Ej. Elisa', type: 'text' },
    { key: 'asunto', label: 'Asunto', placeholder: 'Ej. retraso', type: 'text' },
    { key: 'fecha', label: 'Fecha / Cuando', placeholder: 'Ej.viernes 20', type: 'text' },

];

const DEFAULT_CATEGORIES = [
    { id: 'retraso', label: 'Retraso', description: 'Respuesta a aviso de retraso del alumno/a', icon: 'clock', color: 'indigo' },
    { id: 'ausencia', label: 'Ausencia', description: 'Respuesta a aviso de ausencia del alumno/a', icon: 'persona_cross', color: 'rose' },
    { id: 'visitamed', label: 'Visita Médica', description: 'Respuesta a aviso de visita médica', icon: 'doctor', color: 'emerald' },
    { id: 'enfermedad', label: 'Enfermedad', description: 'Aviso por enfermedad y deseo de recuperación', icon: 'salud', color: 'slate' },
    { id: 'justificante', label: 'Solicitud de justificante', description: 'Petición de justificación por ausencia sin justificar', icon: 'alert', color: 'cyan' }
];

const DEFAULT_TEMPLATES = {
    retraso: [
        "Hola {nombre},\n\nRecibimos su aviso sobre el retraso de {alumno} ({asunto}) correspondiente a {fecha}. Quedamos enterados de la situación y tomamos debida nota en el centro.\n\nUn saludo cordial,\nSecretaría / Jefatura de Estudios",
        "Buenos días, {nombre}:\n\nLe confirmamos que hemos recibido su comunicación informando del retraso de {alumno} en relación con {fecha} ({asunto}). Quedamos enterados y tomamos nota.\n\nAtentamente,\nEl equipo del centro",
        "Hola {nombre}, ¿qué tal?\n\nGracias por avisarnos del retraso de {alumno} para {fecha} ({asunto}). Quedamos enterados de lo ocurrido y tomamos nota de ello.\n\nUn saludo,\nDirección / Secretaría",
        "Estimado/a {nombre}:\n\nAcusamos recibo de su mensaje sobre el retraso de {alumno} ({asunto}) en {fecha}. Quedamos enterados de la situación y tomamos nota.\n\nReciba un cordial saludo,\nEl despacho del centro"
    ],
    ausencia: [
        "Hola {nombre},\n\nRecibimos su aviso sobre la ausencia de {alumno} ({asunto}) en {fecha}. Quedamos enterados de la situación y tomamos nota de ello.\n\nUn saludo cordial,\nSecretaría / Jefatura de Estudios",
        "Buenos días, {nombre}:\n\nLe confirmamos que hemos recibido su comunicación sobre la falta de asistencia de {alumno} correspondiente a {fecha} ({asunto}). Quedamos enterados y tomamos nota.\n\nAtentamente,\nEl equipo del centro",
        "Hola {nombre}, ¿qué tal?\n\nGracias por informarnos de la ausencia de {alumno} para {fecha} ({asunto}). Quedamos enterados de la situación y tomamos nota.\n\nUn saludo,\nDirección / Secretaría",
        "Estimado/a {nombre}:\n\nHemos recibido su aviso indicando la ausencia de {alumno} ({asunto}) en {fecha}. Quedamos enterados y tomamos nota en el registro.\n\nReciba un cordial saludo,\nEl despacho del centro"
    ],
    visitamed: [
        "Hola {nombre},\n\nRecibimos su aviso sobre la visita médica de {alumno} ({asunto}) prevista para {fecha}. Quedamos enterados de la situación y tomamos nota de ello.\n\nUn saludo cordial,\nSecretaría / Jefatura de Estudios",
        "Buenos días, {nombre}:\n\nLe confirmamos que hemos recibido su mensaje informando de la cita/visita médica de {alumno} en {fecha} ({asunto}). Quedamos enterados y tomamos nota.\n\nAtentamente,\nEl equipo del centro",
        "Hola {nombre}, ¿qué tal?\n\nGracias por avisarnos de la visita médica de {alumno} para {fecha} ({asunto}). Quedamos enterados de la situación y tomamos nota.\n\nUn saludo,\nDirección / Secretaría",
        "Estimado/a {nombre}:\n\nAcusamos recibo de su comunicación sobre la asistencia a consulta médica de {alumno} ({asunto}) en {fecha}. Quedamos enterados y tomamos nota.\n\nReciba un cordial saludo,\nEl despacho del centro"
    ],
    enfermedad: [
        "Hola {nombre},\n\nRecibimos su aviso sobre la indisposición/enfermedad de {alumno} ({asunto}) en {fecha}. Quedamos enterados de la situación, tomamos nota y le deseamos una pronta recuperación.\n\nUn saludo cordial,\nSecretaría / Jefatura de Estudios",
        "Buenos días, {nombre}:\n\nLe confirmamos que hemos recibido su mensaje sobre el estado de salud de {alumno} en {fecha} ({asunto}). Quedamos enterados, tomamos nota y esperamos su pronta mejoría.\n\nAtentamente,\nEl equipo del centro",
        "Hola {nombre}, ¿qué tal?\n\nGracias por avisarnos de que {alumno} no puede asistir por enfermedad en {fecha} ({asunto}). Quedamos enterados, tomamos nota y le deseamos que se recupere muy pronto.\n\nUn saludo,\nDirección / Secretaría",
        "Estimado/a {nombre}:\n\nHemos recibido su comunicación sobre la ausencia por enfermedad de {alumno} ({asunto}) en {fecha}. Quedamos enterados de la situación, tomamos nota y deseamos su pronta recuperación.\n\nReciba un cordial saludo,\nEl despacho del centro"
    ],
    justificante: [
        "Hola {nombre},\n\nNos ponemos en contacto desde el centro porque consta una ausencia de {alumno} ({asunto}) en {fecha} sin justificar. Le rogamos que nos remita el correspondiente justificante a la mayor brevedad posible.\n\nUn saludo cordial,\nSecretaría / Jefatura de Estudios",
        "Buenos días, {nombre}:\n\nLe comunicamos que figura una falta de asistencia de {alumno} en {fecha} ({asunto}) pendiente de justificación. Le solicitamos que aporte el justificante correspondiente cuando le sea posible.\n\nAtentamente,\nEl equipo del centro",
        "Hola {nombre}, ¿qué tal?\n\nLe escribimos porque tenemos registrada una ausencia de {alumno} en {fecha} ({asunto}) sin justificar. ¿Podría enviarnos el justificante correspondiente, por favor?\n\nUn saludo,\nDirección / Secretaría",
        "Estimado/a {nombre}:\n\nPor medio de la presente le notificamos que consta una ausencia sin justificar de {alumno} ({asunto}) en {fecha}. Le pedimos que nos haga llegar la justificación oportuna a la brevedad.\n\nReciba un cordial saludo,\nEl despacho del centro"
    ]
};

const STORAGE_KEYS = {
    VARS: 'msgcraft_variables_v3',
    CATS: 'msgcraft_categories_v3',
    TEMPLATES: 'msgcraft_templates_v3'
};

/**
 * 3. ESTADO GLOBAL DE LA APLICACIÓN
 */
let state = {
    variables: [],
    categories: [],
    templates: {},
    selectedCategory: 'retraso',
    lastTemplateIndex: null,
    tempVars: [],
    draftValues: {},
    editingVarIndex: null,
    editingCatIndex: null,
    editingTplIndex: null,
    pendingDeleteCatId: null
};

/**
 * 4. PERSISTENCIA EN LOCALSTORAGE
 */
function loadWorkspace() {
    try {
        const rawVars = localStorage.getItem(STORAGE_KEYS.VARS);
        const rawCats = localStorage.getItem(STORAGE_KEYS.CATS);
        const rawTpls = localStorage.getItem(STORAGE_KEYS.TEMPLATES);

        state.variables = rawVars ? JSON.parse(rawVars) : JSON.parse(JSON.stringify(DEFAULT_FORM_VARS));
        state.categories = rawCats ? JSON.parse(rawCats) : JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
        state.templates = rawTpls ? JSON.parse(rawTpls) : JSON.parse(JSON.stringify(DEFAULT_TEMPLATES));

        if (!state.categories.some(c => c.id === state.selectedCategory)) {
            state.selectedCategory = state.categories[0] ? state.categories[0].id : '';
        }
    } catch (e) {
        state.variables = JSON.parse(JSON.stringify(DEFAULT_FORM_VARS));
        state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
        state.templates = JSON.parse(JSON.stringify(DEFAULT_TEMPLATES));
    }
}

function saveWorkspace() {
    try {
        localStorage.setItem(STORAGE_KEYS.VARS, JSON.stringify(state.variables));
        localStorage.setItem(STORAGE_KEYS.CATS, JSON.stringify(state.categories));
        localStorage.setItem(STORAGE_KEYS.TEMPLATES, JSON.stringify(state.templates));
    } catch (e) {
        showToast("Error al guardar en almacenamiento local", "error");
    }
}

/**
 * 5. RENDERIZADO DEL FORMULARIO PRINCIPAL Y CATEGORÍAS
 */
function renderDynamicForm() {
    const container = document.getElementById('dynamicFormFieldsGrid');
    container.innerHTML = '';

    if (state.variables.length === 0) {
        container.innerHTML = `
            <div class="col-span-2" style="text-align:center; padding:1.5rem; background:var(--bg-app); border:1px dashed var(--border-strong); border-radius:0.85rem; font-size:0.8rem; color:var(--text-muted);">
                No hay variables configuradas. Pulsa <strong>«Configurar campos»</strong> para crear tus propios campos.
            </div>
        `;
        return;
    }

    state.variables.forEach(v => {
        const fieldDiv = document.createElement('div');
        if (v.type === 'textarea') {
            fieldDiv.className = 'col-span-2';
        }

        const val = state.draftValues[v.key] || '';
        const safeKey = escapeHtml(v.key);

        fieldDiv.innerHTML = `
            <label for="field_${safeKey}" class="field-label-row">
                <span>${escapeHtml(v.label)}</span>
                <span class="var-code-pill">{${safeKey}}</span>
            </label>
            ${v.type === 'textarea'
                ? `<textarea id="field_${safeKey}" data-key="${safeKey}" rows="2" class="textarea-control dynamic-input" placeholder="${escapeHtml(v.placeholder || '')}">${escapeHtml(val)}</textarea>`
                : `<input type="text" id="field_${safeKey}" data-key="${safeKey}" value="${escapeHtml(val)}" class="input-control dynamic-input" placeholder="${escapeHtml(v.placeholder || '')}">`
            }
        `;
        container.appendChild(fieldDiv);
    });

    container.querySelectorAll('.dynamic-input').forEach(el => {
        el.addEventListener('input', (e) => {
            state.draftValues[e.target.dataset.key] = e.target.value;
        });
    });
}

function renderTempVariables() {
    const container = document.getElementById('customVarsContainer');
    container.innerHTML = '';

    state.tempVars.forEach(item => {
        const row = document.createElement('div');
        row.className = 'adhoc-row';
        row.innerHTML = `
            <div class="key-wrapper" style="width: 38%;">
                <span>{</span>
                <input type="text" placeholder="etiqueta" value="${escapeHtml(item.key)}" data-id="${item.id}" data-field="key" class="temp-var-input">
                <span>}</span>
            </div>
            <input type="text" placeholder="Valor temporal..." value="${escapeHtml(item.value)}" data-id="${item.id}" data-field="value" class="input-control input-sm temp-var-input" style="background:#fff;">
            <button type="button" data-remove-temp="${item.id}" class="btn-icon danger" title="Quitar variable temporal">
                ${SVG_ICONS.trash}
            </button>
        `;
        container.appendChild(row);
    });

    container.querySelectorAll('.temp-var-input').forEach(el => {
        el.addEventListener('input', (e) => {
            const found = state.tempVars.find(t => t.id === e.target.dataset.id);
            if (found) {
                found[e.target.dataset.field] = e.target.dataset.field === 'key'
                    ? sanitizeKey(e.target.value)
                    : e.target.value;
            }
        });
    });

    container.querySelectorAll('[data-remove-temp]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.removeTemp;
            state.tempVars = state.tempVars.filter(t => t.id !== id);
            renderTempVariables();
        });
    });
}

function renderCategoryGrid() {
    const grid = document.getElementById('categorySelectorGrid');
    grid.innerHTML = '';

    if (state.categories.length === 0) {
        grid.innerHTML = `
            <div class="col-span-2" style="text-align:center; padding:1.5rem; background:var(--bg-app); border:1px dashed var(--border-strong); border-radius:0.85rem; font-size:0.8rem; color:var(--text-muted);">
                No hay categorías creadas. Pulsa <strong>«Editar categorías»</strong> para crear una.
            </div>
        `;
        updateCategoryCountBadge();
        return;
    }

    state.categories.forEach(cat => {
        const isSelected = cat.id === state.selectedCategory;
        const color = cat.color || 'indigo';
        const count = (state.templates[cat.id] || []).length;
        const iconSvg = SVG_ICONS[cat.icon] || SVG_ICONS.briefcase;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `cat-card ${isSelected ? `theme-${color}-active` : ''}`;
        btn.innerHTML = `
            <div class="cat-icon-box ${isSelected ? '' : `theme-${color}-idle`}">
                ${iconSvg}
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                    <span class="cat-card-title">${escapeHtml(cat.label)}</span>
                    ${isSelected
                        ? `<span style="color:var(--brand-600); flex-shrink:0;">${SVG_ICONS.checkCircle}</span>`
                        : `<span class="count-pill">${count}</span>`
                    }
                </div>
                <p class="cat-card-desc">${escapeHtml(cat.description || '')}</p>
            </div>
        `;

        btn.addEventListener('click', () => {
            state.selectedCategory = cat.id;
            state.lastTemplateIndex = null;
            renderCategoryGrid();
        });

        grid.appendChild(btn);
    });

    updateCategoryCountBadge();
}

function updateCategoryCountBadge() {
    const list = state.templates[state.selectedCategory] || [];
    const badge = document.getElementById('categoryCountBadge');
    badge.textContent = `${list.length} ${list.length === 1 ? 'plantilla' : 'plantillas'}`;
}

/**
 * 6. GENERACIÓN DE MENSAJE, COPIADO Y TRADUCCION
 */
function generateRandomMessage() {
    currentMessageLang = 'es';
    const langSel = document.getElementById('langSelector');
    if (langSel) langSel.value = 'es';
    const cat = state.categories.find(c => c.id === state.selectedCategory);
    const list = state.templates[state.selectedCategory] || [];

    if (!cat || list.length === 0) {
        showToast("Esta categoría no tiene plantillas. Añade una en «Plantillas».", "error");
        return;
    }

    let idx = 0;
    if (list.length > 1) {
        do {
            idx = Math.floor(Math.random() * list.length);
        } while (idx === state.lastTemplateIndex);
    }
    state.lastTemplateIndex = idx;

    const varsMap = {};
    state.variables.forEach(v => {
        varsMap[v.key] = (state.draftValues[v.key] || '').trim();
    });
    state.tempVars.forEach(t => {
        if (t.key) varsMap[t.key] = t.value.trim();
    });

    const result = list[idx].replace(/\{([a-zA-Z0-9_áéíóúÁÉÍÓÚñÑ-]+)\}/g, (match, key) => {
        const direct = varsMap[key];
        const foundKey = Object.keys(varsMap).find(k => k.toLowerCase() === key.toLowerCase());
        const val = direct !== undefined ? direct : (foundKey ? varsMap[foundKey] : undefined);
        return (val && val.length > 0) ? val : match;
    });

    document.getElementById('outputTextarea').value = result;

    const metaBadge = document.getElementById('templateMetaBadge');
    metaBadge.classList.remove('hidden');
    document.getElementById('templateIndexLabel').textContent = `${cat.label} · Variación #${idx + 1} de ${list.length}`;

    refreshOutputCounters();
}

function refreshOutputCounters() {
    const text = document.getElementById('outputTextarea').value;
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    document.getElementById('charWordCounter').textContent = `${words} ${words === 1 ? 'palabra' : 'palabras'} · ${chars} caracteres`;

    const hasUnfilled = /\{[a-zA-Z0-9_áéíóúÁÉÍÓÚñÑ-]+\}/.test(text);
    const warn = document.getElementById('missingVarsWarning');
    if (hasUnfilled && text.trim().length > 0) {
        warn.classList.remove('hidden');
    } else {
        warn.classList.add('hidden');
    }
}

function copyOutputMessage() {
    const textarea = document.getElementById('outputTextarea');
    if (!textarea.value.trim()) {
        showToast("No hay ningún mensaje generado para copiar", "error");
        return;
    }

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        const btn = document.getElementById('btnCopy');
        const textEl = document.getElementById('copyText');

        btn.classList.remove('btn-dark');
        btn.classList.add('btn-success');
        textEl.textContent = '¡Copiado!';
        showToast("Mensaje copiado al portapapeles", "success");

        setTimeout(() => {
            btn.classList.remove('btn-success');
            btn.classList.add('btn-dark');
            textEl.textContent = 'Copiar Mensaje';
        }, 2000);
    } catch (err) {
        showToast("No se pudo copiar automáticamente", "error");
    }
    window.getSelection().removeAllRanges();
}

let currentMessageLang = 'es';

async function translateText(text, targetLang, sourceLang = 'auto') {
    if (!text || !text.trim()) return text;
    if (sourceLang === targetLang) return text;

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(sourceLang)}&tl=${encodeURIComponent(targetLang)}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    // data[0] contiene array de segmentos traducidos: [[ ["Texto traducido", "Original", ...], ... ]]
    if (!Array.isArray(data) || !Array.isArray(data[0])) {
        throw new Error("Respuesta inesperada del servicio de traducción");
    }

    return data[0].map(segment => segment[0]).join('');
}

/**
 * 7. GESTOR MODAL 1: VARIABLES DEL FORMULARIO
 */
function openVarsModal() {
    resetVarForm();
    renderVarsManagerList();
    document.getElementById('varsManagerModal').classList.remove('hidden');
}

function closeVarsModal() {
    document.getElementById('varsManagerModal').classList.add('hidden');
    renderDynamicForm();
}

function resetVarForm() {
    state.editingVarIndex = null;
    document.getElementById('varFormModeTitle').textContent = 'Añadir nueva variable al cuestionario';
    document.getElementById('varInputKey').value = '';
    document.getElementById('varInputLabel').value = '';
    document.getElementById('varInputPlaceholder').value = '';
    document.getElementById('varInputType').value = 'text';
    document.getElementById('btnSaveVarForm').textContent = 'Añadir variable';
    document.getElementById('btnCancelEditVar').classList.add('hidden');
}

function renderVarsManagerList() {
    const list = document.getElementById('varsManagerList');
    document.getElementById('varsCountLabel').textContent = `${state.variables.length} ${state.variables.length === 1 ? 'variable' : 'variables'}`;
    list.innerHTML = '';

    if (state.variables.length === 0) {
        list.innerHTML = `<div class="item-card" style="text-align:center; color:var(--text-muted); font-size:0.82rem;">No hay variables definidas. Añade una arriba.</div>`;
        return;
    }

    state.variables.forEach((v, idx) => {
        const row = document.createElement('div');
        row.className = 'item-card flex items-center justify-between gap-3';
        row.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
                <div class="flex flex-col">
                    <button type="button" data-var-up="${idx}" ${idx === 0 ? 'disabled' : ''} class="btn-icon" title="Subir">${SVG_ICONS.up}</button>
                    <button type="button" data-var-down="${idx}" ${idx === state.variables.length - 1 ? 'disabled' : ''} class="btn-icon" title="Bajar">${SVG_ICONS.down}</button>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center flex-wrap gap-2">
                        <strong style="font-size:0.86rem; color:var(--text-primary);">${escapeHtml(v.label)}</strong>
                        <span class="var-code-pill">{${escapeHtml(v.key)}}</span>
                        <span class="count-pill">${v.type === 'textarea' ? 'Texto largo' : 'Texto corto'}</span>
                    </div>
                    <p style="margin:0.2rem 0 0 0; font-size:0.75rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                        Placeholder: ${escapeHtml(v.placeholder || 'Sin ejemplo')}
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-1 shrink-0">
                <button type="button" data-var-edit="${idx}" class="btn-icon" title="Editar variable">${SVG_ICONS.edit}</button>
                <button type="button" data-var-del="${idx}" class="btn-icon danger" title="Eliminar variable">${SVG_ICONS.trash}</button>
            </div>
        `;
        list.appendChild(row);
    });

    list.querySelectorAll('[data-var-up]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.varUp);
            if (idx > 0) {
                [state.variables[idx - 1], state.variables[idx]] = [state.variables[idx], state.variables[idx - 1]];
                saveWorkspace();
                renderVarsManagerList();
            }
        });
    });

    list.querySelectorAll('[data-var-down]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.varDown);
            if (idx < state.variables.length - 1) {
                [state.variables[idx + 1], state.variables[idx]] = [state.variables[idx], state.variables[idx + 1]];
                saveWorkspace();
                renderVarsManagerList();
            }
        });
    });

    list.querySelectorAll('[data-var-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.varEdit);
            const v = state.variables[idx];
            state.editingVarIndex = idx;
            document.getElementById('varFormModeTitle').textContent = `Editando variable {${v.key}}`;
            document.getElementById('varInputKey').value = v.key;
            document.getElementById('varInputLabel').value = v.label;
            document.getElementById('varInputPlaceholder').value = v.placeholder || '';
            document.getElementById('varInputType').value = v.type || 'text';
            document.getElementById('btnSaveVarForm').textContent = 'Actualizar variable';
            document.getElementById('btnCancelEditVar').classList.remove('hidden');
            document.getElementById('varInputLabel').focus();
        });
    });

    list.querySelectorAll('[data-var-del]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.varDel);
            state.variables.splice(idx, 1);
            if (state.editingVarIndex === idx) resetVarForm();
            saveWorkspace();
            renderVarsManagerList();
            showToast("Variable eliminada", "success");
        });
    });
}

/**
 * 8. GESTOR MODAL 2: CATEGORÍAS / TONOS
 */
function populateCatSelects() {
    document.getElementById('catInputIcon').innerHTML = ICON_OPTIONS.map(o =>
        `<option value="${o.value}">${o.label}</option>`
    ).join('');
    document.getElementById('catInputColor').innerHTML = COLOR_OPTIONS.map(c =>
        `<option value="${c.value}">${c.label}</option>`
    ).join('');
}

function openCatsModal() {
    populateCatSelects();
    resetCatForm();
    hideCatDeletePrompt();
    renderCatsManagerList();
    document.getElementById('catsManagerModal').classList.remove('hidden');
}

function closeCatsModal() {
    document.getElementById('catsManagerModal').classList.add('hidden');
    renderCategoryGrid();
}

function resetCatForm() {
    state.editingCatIndex = null;
    document.getElementById('catFormModeTitle').textContent = 'Crear nueva categoría';
    document.getElementById('catInputLabel').value = '';
    document.getElementById('catInputDesc').value = '';
    document.getElementById('catInputIcon').value = 'briefcase';
    document.getElementById('catInputColor').value = 'indigo';
    document.getElementById('btnSaveCatForm').textContent = 'Crear categoría';
    document.getElementById('btnCancelEditCat').classList.add('hidden');
}

function hideCatDeletePrompt() {
    state.pendingDeleteCatId = null;
    document.getElementById('catDeleteConfirmBox').classList.add('hidden');
}

function renderCatsManagerList() {
    const list = document.getElementById('catsManagerList');
    document.getElementById('catsCountLabel').textContent = `${state.categories.length} ${state.categories.length === 1 ? 'categoría' : 'categorías'}`;
    list.innerHTML = '';

    state.categories.forEach((cat, idx) => {
        const count = (state.templates[cat.id] || []).length;
        const colorObj = COLOR_OPTIONS.find(c => c.value === cat.color) || COLOR_OPTIONS[0];
        const iconSvg = SVG_ICONS[cat.icon] || SVG_ICONS.briefcase;

        const row = document.createElement('div');
        row.className = 'item-card flex items-center justify-between gap-3';
        row.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
                <div class="flex flex-col">
                    <button type="button" data-cat-up="${idx}" ${idx === 0 ? 'disabled' : ''} class="btn-icon" title="Subir">${SVG_ICONS.up}</button>
                    <button type="button" data-cat-down="${idx}" ${idx === state.categories.length - 1 ? 'disabled' : ''} class="btn-icon" title="Bajar">${SVG_ICONS.down}</button>
                </div>
                <div class="cat-icon-box theme-${cat.color || 'indigo'}-idle">
                    ${iconSvg}
                </div>
                <div class="min-w-0">
                    <div class="flex items-center flex-wrap gap-2">
                        <span style="width:9px; height:9px; border-radius:999px; background:${colorObj.dot}; display:inline-block;"></span>
                        <strong style="font-size:0.86rem; color:var(--text-primary);">${escapeHtml(cat.label)}</strong>
                        <span class="count-pill">${count} ${count === 1 ? 'plantilla' : 'plantillas'}</span>
                    </div>
                    <p style="margin:0.15rem 0 0 0; font-size:0.75rem; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                        ${escapeHtml(cat.description || 'Sin descripción')}
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-1 shrink-0">
                <button type="button" data-cat-edit="${idx}" class="btn-icon" title="Editar categoría">${SVG_ICONS.edit}</button>
                <button type="button" data-cat-del="${cat.id}" class="btn-icon danger" title="Eliminar categoría">${SVG_ICONS.trash}</button>
            </div>
        `;
        list.appendChild(row);
    });

    list.querySelectorAll('[data-cat-up]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.catUp);
            if (idx > 0) {
                [state.categories[idx - 1], state.categories[idx]] = [state.categories[idx], state.categories[idx - 1]];
                saveWorkspace();
                renderCatsManagerList();
            }
        });
    });

    list.querySelectorAll('[data-cat-down]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.catDown);
            if (idx < state.categories.length - 1) {
                [state.categories[idx + 1], state.categories[idx]] = [state.categories[idx], state.categories[idx + 1]];
                saveWorkspace();
                renderCatsManagerList();
            }
        });
    });

    list.querySelectorAll('[data-cat-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.catEdit);
            const cat = state.categories[idx];
            state.editingCatIndex = idx;
            document.getElementById('catFormModeTitle').textContent = `Editando categoría «${cat.label}»`;
            document.getElementById('catInputLabel').value = cat.label;
            document.getElementById('catInputDesc').value = cat.description || '';
            document.getElementById('catInputIcon').value = cat.icon || 'briefcase';
            document.getElementById('catInputColor').value = cat.color || 'indigo';
            document.getElementById('btnSaveCatForm').textContent = 'Actualizar categoría';
            document.getElementById('btnCancelEditCat').classList.remove('hidden');
            document.getElementById('catInputLabel').focus();
        });
    });

    list.querySelectorAll('[data-cat-del]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const catId = e.currentTarget.dataset.catDel;
            if (state.categories.length <= 1) {
                showToast("Debe existir al menos una categoría activa", "error");
                return;
            }
            const tpls = state.templates[catId] || [];
            if (tpls.length === 0) {
                deleteCategoryNow(catId, null);
            } else {
                const cat = state.categories.find(c => c.id === catId);
                state.pendingDeleteCatId = catId;
                document.getElementById('catDeleteConfirmTitle').textContent = `La categoría «${cat.label}» contiene ${tpls.length} ${tpls.length === 1 ? 'plantilla' : 'plantillas'}`;
                const others = state.categories.filter(c => c.id !== catId);
                document.getElementById('reassignTargetSelect').innerHTML = others.map(o =>
                    `<option value="${o.id}">Mover a: ${escapeHtml(o.label)}</option>`
                ).join('');
                document.getElementById('catDeleteConfirmBox').classList.remove('hidden');
            }
        });
    });
}

function deleteCategoryNow(catId, targetCatId) {
    if (targetCatId && state.templates[catId]) {
        if (!state.templates[targetCatId]) state.templates[targetCatId] = [];
        state.templates[targetCatId].push(...state.templates[catId]);
    }
    delete state.templates[catId];
    state.categories = state.categories.filter(c => c.id !== catId);
    if (state.selectedCategory === catId) {
        state.selectedCategory = state.categories[0] ? state.categories[0].id : '';
    }
    hideCatDeletePrompt();
    resetCatForm();
    saveWorkspace();
    renderCatsManagerList();
    showToast(targetCatId ? "Plantillas movidas y categoría eliminada" : "Categoría eliminada", "success");
}

/**
 * 9. GESTOR MODAL 3: PLANTILLAS Y RESPALDO JSON
 */
function openLibraryModal() {
    if (state.categories.length === 0) {
        showToast("Crea primero al menos una categoría", "error");
        return;
    }
    const select = document.getElementById('modalCategorySelect');
    select.innerHTML = state.categories.map(c => {
        const count = (state.templates[c.id] || []).length;
        return `<option value="${c.id}" ${c.id === state.selectedCategory ? 'selected' : ''}>${escapeHtml(c.label)} (${count})</option>`;
    }).join('');

    resetTemplateForm();
    renderVariableChips();
    renderModalTemplatesList();
    document.getElementById('libraryModal').classList.remove('hidden');
}

function closeLibraryModal() {
    document.getElementById('libraryModal').classList.add('hidden');
    renderCategoryGrid();
}

function resetTemplateForm() {
    state.editingTplIndex = null;
    document.getElementById('tplFormModeTitle').textContent = 'Nueva plantilla (haz clic en una variable para insertarla)';
    document.getElementById('templateEditorTextarea').value = '';
    document.getElementById('btnSaveTemplateForm').textContent = 'Guardar plantilla';
    document.getElementById('btnCancelEditTemplate').classList.add('hidden');
}

function renderVariableChips() {
    const container = document.getElementById('quickTagButtons');
    const keys = [...new Set([
        ...state.variables.map(v => v.key),
        ...state.tempVars.filter(t => t.key).map(t => t.key)
    ])];

    container.innerHTML = '';
    keys.forEach(key => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'chip-tag';
        chip.textContent = `{${key}}`;
        chip.addEventListener('click', () => {
            const ta = document.getElementById('templateEditorTextarea');
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            const val = ta.value;
            ta.value = val.substring(0, start) + `{${key}}` + val.substring(end);
            ta.focus();
            ta.selectionStart = ta.selectionEnd = start + key.length + 2;
        });
        container.appendChild(chip);
    });
}

function renderModalTemplatesList() {
    const catId = document.getElementById('modalCategorySelect').value;
    const list = state.templates[catId] || [];
    const container = document.getElementById('modalTemplatesList');
    container.innerHTML = '';

    if (list.length === 0) {
        container.innerHTML = `<div class="item-card" style="text-align:center; color:var(--text-muted); font-size:0.82rem;">No hay plantillas en esta categoría. Escribe una arriba y guárdala.</div>`;
        return;
    }

    list.forEach((tpl, idx) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="section-kicker" style="color:var(--brand-600);">Variación #${idx + 1}</span>
                <div class="flex items-center gap-1">
                    <button type="button" data-tpl-edit="${idx}" class="btn-icon" title="Editar plantilla">${SVG_ICONS.edit}</button>
                    <button type="button" data-tpl-del="${idx}" class="btn-icon danger" title="Eliminar plantilla">${SVG_ICONS.trash}</button>
                </div>
            </div>
            <p style="margin:0; font-size:0.83rem; color:#334155; white-space:pre-line; line-height:1.55;">${escapeHtml(tpl)}</p>
        `;
        container.appendChild(card);
    });

    container.querySelectorAll('[data-tpl-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.tplEdit);
            state.editingTplIndex = idx;
            document.getElementById('tplFormModeTitle').textContent = `Editando Variación #${idx + 1}`;
            document.getElementById('templateEditorTextarea').value = list[idx];
            document.getElementById('btnSaveTemplateForm').textContent = 'Actualizar plantilla';
            document.getElementById('btnCancelEditTemplate').classList.remove('hidden');
            document.getElementById('templateEditorTextarea').focus();
        });
    });

    container.querySelectorAll('[data-tpl-del]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.tplDel);
            state.templates[catId].splice(idx, 1);
            if (state.editingTplIndex === idx) resetTemplateForm();
            saveWorkspace();
            updateModalCategoryOptionLabel(catId);
            renderModalTemplatesList();
            showToast("Plantilla eliminada", "success");
        });
    });
}

function updateModalCategoryOptionLabel(catId) {
    const select = document.getElementById('modalCategorySelect');
    const cat = state.categories.find(c => c.id === catId);
    if (cat && select.selectedIndex >= 0) {
        const count = (state.templates[catId] || []).length;
        select.options[select.selectedIndex].textContent = `${cat.label} (${count})`;
    }
}

/**
 * 10. UTILIDADES GENERALES Y EVENTOS
 */
function sanitizeKey(str) {
    return str
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9_]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '');
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

let toastTimer;
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const icon = document.getElementById('toastIcon');
    document.getElementById('toastMessage').textContent = msg;
    icon.innerHTML = SVG_ICONS.checkCircle;
    icon.style.color = type === 'error' ? '#fb7185' : '#34d399';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

document.addEventListener('DOMContentLoaded', () => {
    loadWorkspace();
    renderDynamicForm();
    renderCategoryGrid();

    // Acciones principales
    document.getElementById('btnGenerate').addEventListener('click', generateRandomMessage);
    document.getElementById('btnVariation').addEventListener('click', generateRandomMessage);
    document.getElementById('btnCopy').addEventListener('click', copyOutputMessage);
    document.getElementById('outputTextarea').addEventListener('input', refreshOutputCounters);

    document.getElementById('btnClearForm').addEventListener('click', () => {
        state.draftValues = {};
        state.tempVars = [];
        renderDynamicForm();
        renderTempVariables();
        showToast("Campos del cuestionario limpiados", "success");
    });

    document.getElementById('btnAddCustomVar').addEventListener('click', () => {
        state.tempVars.push({ id: 'tmp_' + Date.now(), key: '', value: '' });
        renderTempVariables();
    });

    // --- EVENTOS MODAL VARIABLES ---
    document.getElementById('btnOpenVarsManager').addEventListener('click', openVarsModal);
    document.getElementById('btnQuickEditVars').addEventListener('click', openVarsModal);
    document.getElementById('btnCloseVarsModal').addEventListener('click', closeVarsModal);
    document.getElementById('btnDoneVarsModal').addEventListener('click', closeVarsModal);
    document.getElementById('btnCancelEditVar').addEventListener('click', resetVarForm);

    document.getElementById('btnSaveVarForm').addEventListener('click', () => {
        const rawKey = document.getElementById('varInputKey').value;
        const cleanKey = sanitizeKey(rawKey);
        const label = document.getElementById('varInputLabel').value.trim();
        const placeholder = document.getElementById('varInputPlaceholder').value.trim();
        const type = document.getElementById('varInputType').value;

        if (!cleanKey) {
            showToast("Introduce una clave válida (ej. telefono)", "error");
            document.getElementById('varInputKey').focus();
            return;
        }
        if (!label) {
            showToast("Introduce una etiqueta visible", "error");
            document.getElementById('varInputLabel').focus();
            return;
        }

        const duplicate = state.variables.some((v, idx) => v.key === cleanKey && idx !== state.editingVarIndex);
        if (duplicate) {
            showToast(`Ya existe una variable con la clave {${cleanKey}}`, "error");
            return;
        }

        if (state.editingVarIndex !== null) {
            const oldKey = state.variables[state.editingVarIndex].key;
            if (oldKey !== cleanKey && state.draftValues[oldKey] !== undefined) {
                state.draftValues[cleanKey] = state.draftValues[oldKey];
            }
            state.variables[state.editingVarIndex] = { key: cleanKey, label, placeholder, type };
            showToast(`Variable {${cleanKey}} actualizada`, "success");
        } else {
            state.variables.push({ key: cleanKey, label, placeholder, type });
            showToast(`Variable {${cleanKey}} añadida`, "success");
        }

        saveWorkspace();
        resetVarForm();
        renderVarsManagerList();
    });

    document.getElementById('btnResetVarsDefault').addEventListener('click', () => {
        state.variables = JSON.parse(JSON.stringify(DEFAULT_FORM_VARS));
        saveWorkspace();
        resetVarForm();
        renderVarsManagerList();
        showToast("Variables originales restauradas", "success");
    });

    // --- EVENTOS MODAL CATEGORÍAS ---
    document.getElementById('btnOpenCatsManager').addEventListener('click', openCatsModal);
    document.getElementById('btnQuickEditCats').addEventListener('click', openCatsModal);
    document.getElementById('btnCloseCatsModal').addEventListener('click', closeCatsModal);
    document.getElementById('btnDoneCatsModal').addEventListener('click', closeCatsModal);
    document.getElementById('btnCancelEditCat').addEventListener('click', resetCatForm);

    document.getElementById('btnSaveCatForm').addEventListener('click', () => {
        const label = document.getElementById('catInputLabel').value.trim();
        const description = document.getElementById('catInputDesc').value.trim();
        const icon = document.getElementById('catInputIcon').value;
        const color = document.getElementById('catInputColor').value;

        if (!label) {
            showToast("Escribe un nombre para la categoría", "error");
            document.getElementById('catInputLabel').focus();
            return;
        }

        if (state.editingCatIndex !== null) {
            const existing = state.categories[state.editingCatIndex];
            state.categories[state.editingCatIndex] = { ...existing, label, description, icon, color };
            showToast(`Categoría «${label}» actualizada`, "success");
        } else {
            const id = 'cat_' + sanitizeKey(label) + '_' + Date.now().toString(36).slice(-4);
            state.categories.push({ id, label, description: description || 'Categoría personalizada', icon, color });
            state.templates[id] = [];
            showToast(`Categoría «${label}» creada`, "success");
        }

        saveWorkspace();
        resetCatForm();
        renderCatsManagerList();
    });

    document.getElementById('btnConfirmReassignDelete').addEventListener('click', () => {
        if (!state.pendingDeleteCatId) return;
        deleteCategoryNow(state.pendingDeleteCatId, document.getElementById('reassignTargetSelect').value);
    });

    document.getElementById('btnConfirmPurgeDelete').addEventListener('click', () => {
        if (!state.pendingDeleteCatId) return;
        deleteCategoryNow(state.pendingDeleteCatId, null);
    });

    document.getElementById('btnCancelCatDelete').addEventListener('click', hideCatDeletePrompt);

    // --- EVENTOS MODAL PLANTILLAS ---
    document.getElementById('btnOpenLibrary').addEventListener('click', openLibraryModal);
    document.getElementById('btnCloseModal').addEventListener('click', closeLibraryModal);
    document.getElementById('btnDoneModal').addEventListener('click', closeLibraryModal);
    document.getElementById('btnCancelEditTemplate').addEventListener('click', resetTemplateForm);

    document.getElementById('modalCategorySelect').addEventListener('change', () => {
        resetTemplateForm();
        renderModalTemplatesList();
    });

    document.getElementById('btnSaveTemplateForm').addEventListener('click', () => {
        const catId = document.getElementById('modalCategorySelect').value;
        const content = document.getElementById('templateEditorTextarea').value.trim();

        if (!content) {
            showToast("Escribe el texto de la plantilla primero", "error");
            document.getElementById('templateEditorTextarea').focus();
            return;
        }

        if (!state.templates[catId]) state.templates[catId] = [];

        if (state.editingTplIndex !== null) {
            state.templates[catId][state.editingTplIndex] = content;
            showToast("Plantilla actualizada", "success");
        } else {
            state.templates[catId].unshift(content);
            showToast("Nueva plantilla guardada", "success");
        }

        saveWorkspace();
        updateModalCategoryOptionLabel(catId);
        resetTemplateForm();
        renderModalTemplatesList();
    });

    // Exportar / Importar JSON
    document.getElementById('btnExportJson').addEventListener('click', () => {
        const payload = {
            app: 'MsgCraft Studio',
            version: 3,
            exportedAt: new Date().toISOString(),
            variables: state.variables,
            categories: state.categories,
            templates: state.templates
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `msgcraft_respaldo_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        showToast("Respaldo JSON descargado", "success");
    });

    document.getElementById('inputImportJson').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                const vars = data.variables || data.formVars;
                if (!Array.isArray(vars) || !Array.isArray(data.categories) || typeof data.templates !== 'object') {
                    throw new Error("Formato no válido");
                }
                state.variables = vars;
                state.categories = data.categories;
                state.templates = data.templates;
                if (!state.categories.some(c => c.id === state.selectedCategory)) {
                    state.selectedCategory = state.categories[0] ? state.categories[0].id : '';
                }
                saveWorkspace();
                renderDynamicForm();
                renderCategoryGrid();
                openLibraryModal();
                showToast("Espacio de trabajo importado con éxito", "success");
            } catch (err) {
                showToast("El archivo JSON no es válido", "error");
            } finally {
                e.target.value = '';
            }
        };
        reader.readAsText(file);
    });

    document.getElementById('btnResetLibrary').addEventListener('click', () => {
        state.variables = JSON.parse(JSON.stringify(DEFAULT_FORM_VARS));
        state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
        state.templates = JSON.parse(JSON.stringify(DEFAULT_TEMPLATES));
        state.selectedCategory = state.categories[0].id;
        saveWorkspace();
        renderDynamicForm();
        renderCategoryGrid();
        openLibraryModal();
        showToast("Todo el espacio de trabajo restaurado de fábrica", "success");
    });

    // Cerrar modales con tecla Escape o clic fuera
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVarsModal();
            closeCatsModal();
            closeLibraryModal();
        }
    });

    ['varsManagerModal', 'catsManagerModal', 'libraryModal'].forEach(modalId => {
        document.getElementById(modalId).addEventListener('click', (e) => {
            if (e.target.id === modalId) {
                if (modalId === 'varsManagerModal') closeVarsModal();
                if (modalId === 'catsManagerModal') closeCatsModal();
                if (modalId === 'libraryModal') closeLibraryModal();
            }
        });
    });

    
    document.getElementById('btnInsertGmail')?.addEventListener('click', () => {
        const textToInsert = document.getElementById('outputTextarea').value;
        if (!textToInsert.trim()) {
            showToast("No hay ningún mensaje generado para insertar", "error");
            return;
        }

        chrome.tabs.query({}, (tabs) => {
            if (!tabs || tabs.length === 0) return;

            const activeTab = tabs.find(t => t.active && t.url && t.url.includes('mail.google.com'));
            const targetTab = activeTab || tabs.find(t => t.url && t.url.includes('mail.google.com'));

            if (!targetTab || !targetTab.id) {
                showToast("Abre Gmail (mail.google.com) en una pestaña para insertar el mensaje", "error");
                return;
            }

            const payload = { action: "insertIntoGmail", text: textToInsert };

            chrome.tabs.sendMessage(targetTab.id, payload, (response) => {
                if (!chrome.runtime.lastError) {
                    if (response && response.success) {
                        showToast("¡Mensaje insertado en Gmail con éxito!", "success");
                    } else {
                        showToast(response?.error || "No se pudo insertar el texto en Gmail", "error");
                    }
                    return;
                }

                // Si content.js no estaba cargado en esa pestaña, intenta inyectarlo y reenviar
                if (chrome.scripting?.executeScript) {
                    chrome.scripting.executeScript(
                        { target: { tabId: targetTab.id }, files: ['content.js'] },
                        () => {
                            if (chrome.runtime.lastError) {
                                showToast("Recarga la pestaña de Gmail y abre un cuadro de respuesta", "error");
                                return;
                            }
                            chrome.tabs.sendMessage(targetTab.id, payload, (retryRes) => {
                                if (chrome.runtime.lastError || !retryRes?.success) {
                                    showToast(retryRes?.error || "Abre un cuadro de respuesta en Gmail e inténtalo de nuevo", "error");
                                } else {
                                    showToast("¡Mensaje insertado en Gmail con éxito!", "success");
                                }
                            });
                        }
                    );
                } else {
                    showToast("Recarga la pestaña de Gmail y abre un cuadro de respuesta", "error");
                }
            });
        });
    });

    const langSelector = document.getElementById('langSelector');
    const langStatusLabel = document.getElementById('langStatusLabel');

    langSelector?.addEventListener('change', async (e) => {
        const targetLang = e.target.value; // 'es' | 'fr' | 'en'
        const outputEl = document.getElementById('outputTextarea');
        const currentText = outputEl.value;

        if (!currentText.trim()) {
            currentMessageLang = targetLang;
            return;
        }

        const previousLang = currentMessageLang;
        langSelector.disabled = true;
        if (langStatusLabel) langStatusLabel.textContent = 'Traduciendo...';

        try {
            const translated = await translateText(currentText, targetLang, previousLang);
            outputEl.value = translated;
            currentMessageLang = targetLang;
            refreshOutputCounters(); // Mantiene actualizados palabras, caracteres y aviso de {variables}
            if (langStatusLabel) langStatusLabel.textContent = '';
            showToast(`Mensaje traducido a ${targetLang.toUpperCase()}`, 'success');
        } catch (err) {
            // Vuelve al idioma anterior si falla la traducción
            langSelector.value = previousLang;
            if (langStatusLabel) langStatusLabel.textContent = '';
            showToast('No se pudo traducir el mensaje ahora mismo', 'error');
        } finally {
            langSelector.disabled = false;
        }
    });

    const settingsMenuBtn = document.getElementById('btnOpenSettingsMenu');
    const settingsDropdown = document.getElementById('settingsDropdownMenu');

    function closeSettingsMenu() {
        if (!settingsDropdown || !settingsMenuBtn) return;
        settingsDropdown.classList.add('hidden');
        settingsMenuBtn.setAttribute('aria-expanded', 'false');
    }

    settingsMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = settingsDropdown.classList.contains('hidden');
        if (isHidden) {
            settingsDropdown.classList.remove('hidden');
            settingsMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            closeSettingsMenu();
        }
    });

    // Cierra el menú al elegir una de las tres opciones y abre el modal correspondiente
    ['btnOpenVarsManager', 'btnOpenCatsManager', 'btnOpenLibrary'].forEach((id) => {
        document.getElementById(id)?.addEventListener('click', () => {
            closeSettingsMenu();
        });
    });

    // Cierra el menú si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (settingsDropdown && !settingsDropdown.classList.contains('hidden')) {
            if (!e.target.closest('.settings-menu-wrapper')) {
                closeSettingsMenu();
            }
        }
    });

});

