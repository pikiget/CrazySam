// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En el momento", time: 15 },
  { text: "El susurro de los pájaros", time: 18 },
  { text: "Antes que el sol llorara en soledad", time: 27 },
  { text: "Caía desde el cielo", time: 32 },
  { text: "Como gotas de agua", time: 33 },
  { text: "Dónde estoy ahora? no sé por qué", time: 41 },
  { text: "Hay mariposas lindas en mis manos", time: 47 },
  { text: "Demasiada luz para el atardecer", time: 54 },
  { text: "En el ambiente de las flores con amor", time: 59 },
  { text: "Ese recuerdo", time: 67 },
  { text: "Fue tan fuerte que me hizo volar la cabeza", time: 72 },
  { text: "El silencio me dejó ver lo que fue todo", time: 78 },
  { text: "Sólo quiero vivir en las nubes", time: 83 },
  { text: "Dónde estoy ahora? no sé por qué", time: 91 },
  { text: "Hay mariposas lindas en mis manos", time: 97 },
  { text: "Demasiada luz para el atardecer", time: 104 },
  { text: "En el ambiente de las flores con amor", time: 108 },
  { text: "En el momento", time: 144 },
  { text: "El susurro de los pájaros", time: 148 },
  { text: "Antes que el sol llorara en soledad", time: 153 },
  { text: "Caía desde el cielo", time: 158 },
  { text: "Como gotas de agua", time: 164 },
  { text: "Dónde estoy ahora? no sé por qué", time: 169 },
  { text: "Hay mariposas lindas en mis manos", time: 176 },
  { text: "Demasiada luz para el atardecer", time: 183 },
  { text: "En el ambiente de las flores con amor", time: 188 },
  { text: "", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);