// Lista de palabras aleatorias en español
const palabrasAleatorias = [
    "sol", "luna", "estrella", "cielo", "nube", "mar", "montaña", "rio", "bosque", "flor", 
    "arbol", "fruta", "animal", "viento", "fuego", "agua", "tierra", "roca", "arena", "ola", 
    "piedra", "camino", "sendero", "ciudad", "pueblo", "casa", "edificio", "calle", "puente", 
    "parque", "jardin", "plaza", "escuela", "universidad", "museo", "teatro", "cine", "biblioteca", 
    "restaurante", "hotel", "mercado", "tienda", "supermercado", "hospital", "farmacia", "oficina", 
    "fabrica", "iglesia", "templo", "palacio", "castillo", "torre", "puerto", "aeropuerto", "tren", 
    "metro", "taxi", "auto", "bicicleta", "motocicleta", "camion", "barco", "avion", "tren", 
    "pintura", "escultura", "musica", "danza", "fotografia", "cine", "literatura", "teatro", 
    "matematicas", "fisica", "quimica", "biologia", "geografia", "historia", "arte", "filosofia", 
    "psicologia", "sociologia", "economia", "politica", "derecho", "ingenieria", "medicina", 
    "arquitectura", "informatica", "robotica", "programacion", "diseño", "moda", "publicidad"
];


let palabra = "";
let oculta = [];
let intentosRestantes = 6;
const hueco = document.getElementById("palabra");
const botones = document.getElementsByClassName('letra');
const btnInicio = document.getElementById("reset");

// Seleccionar una palabra aleatoria de la lista
function obtenerPalabra() {
    palabra = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)].toUpperCase();
    console.log(palabra);
    iniciarJuego();
}

// Función para dibujar los guiones de la palabra
function dibujarGuiones(num) {
    oculta = Array(num).fill("_");
    hueco.innerHTML = oculta.join(" ");
}

// Generar abecedario
function generarAbecedario(a, z) {
    document.getElementById("abcdario").innerHTML = "";
    let i = a.charCodeAt(0), j = z.charCodeAt(0);
    for (; i <= j; i++) {
        let letra = String.fromCharCode(i).toUpperCase();
        document.getElementById("abcdario").innerHTML += `<button value='${letra}' onclick='hacerIntento("${letra}")' class='letra' id='${letra}'>${letra}</button>`;
        if (i === 110) {
            document.getElementById("abcdario").innerHTML += `<button value='Ñ' onclick='hacerIntento("Ñ")' class='letra' id='Ñ'>Ñ</button>`;
        }
    }
}

// Comprobar intento
function hacerIntento(letra) {
    if (intentosRestantes === 0) return; // Evitar más intentos si ya se perdió el juego.

    document.getElementById(letra).disabled = true;
    if (palabra.includes(letra)) {
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) oculta[i] = letra;
        }
        hueco.innerHTML = oculta.join(" ");
        document.getElementById("acierto").innerHTML = "¡Correcto!";
        document.getElementById("acierto").classList.add("verde");
    } else {
        intentosRestantes--;
        document.getElementById("intentos").innerHTML = intentosRestantes;
        document.getElementById("acierto").innerHTML = "¡Fallaste!";
        document.getElementById("acierto").classList.add("rojo");
        actualizarImagen(intentosRestantes);
    }
    verificarFinal();
    setTimeout(() => document.getElementById("acierto").className = "", 800);
}

// Actualizar la imagen del ahorcado según los intentos
function actualizarImagen(intentosRestantes) {
    // Todas las imágenes empiezan ocultas
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`image${i}`).classList.add("fade-out");
    }
    // Mostrar la imagen correspondiente
    document.getElementById(`image${7 - intentosRestantes}`).classList.remove("fade-out");
    document.getElementById(`image${7 - intentosRestantes}`).classList.add("fade-in");
}

// Obtener pista
function mostrarPista() {
    document.getElementById("hueco-pista").innerHTML = "No disponible";
}

// Verificar si el juego terminó
function verificarFinal() {
    if (!oculta.includes("_")) {
        document.getElementById("msg-final").innerHTML = "¡Felicidades! Ganaste.";
        document.getElementById("msg-final").classList.add("zoom-in");
        document.getElementById("palabra").classList.add("encuadre");
        deshabilitarBotones();
        document.getElementById("reset").innerHTML = "Reiniciar";
        btnInicio.onclick = reiniciarJuego;
    } else if (intentosRestantes === 0) {
        document.getElementById("msg-final").innerHTML = "Has perdido.";
        document.getElementById("msg-final").classList.add("zoom-in");
        document.getElementById("palabra").classList.add("encuadre");
        deshabilitarBotones();
        document.getElementById("reset").innerHTML = "Reiniciar";
        btnInicio.onclick = reiniciarJuego;
    }
}

// Deshabilitar botones
function deshabilitarBotones() {
    for (let boton of botones) {
        boton.disabled = true;
    }
}

// Reiniciar juego
function reiniciarJuego() {
    // Restablece todas las variables y el estado del juego
    intentosRestantes = 6;
    document.getElementById("intentos").innerHTML = intentosRestantes;
    document.getElementById("msg-final").innerHTML = "";
    document.getElementById("palabra").classList.remove("encuadre");
    for (let boton of botones) {
        boton.disabled = false;
    }
    obtenerPalabra();
}

// Restablecer juego
function iniciarJuego() {
    dibujarGuiones(palabra.length);
    generarAbecedario("a", "z");
    intentosRestantes = 6;
    document.getElementById("intentos").innerHTML = intentosRestantes;
}

// Iniciar el juego al cargar la página
window.onload = obtenerPalabra;
