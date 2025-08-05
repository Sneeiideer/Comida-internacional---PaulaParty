document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comidaForm");
  const paisSelectEl = document.getElementById("paisSelect");
  const tipoSelectEl = document.getElementById("tipoSelect");
  const respuestaEl = document.getElementById("respuesta");
  const submitButton = form.querySelector('button[type="submit"]');

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqIMrTrBGwyZ...), exec";

  const paises = [
  { nombre: "Afganistán", emoji: "🇦🇫" },
  { nombre: "Albania", emoji: "🇦🇱" },
  { nombre: "Alemania", emoji: "🇩🇪" },
  { nombre: "Andorra", emoji: "🇦🇩" },
  { nombre: "Angola", emoji: "🇦🇴" },
  { nombre: "Antigua y Barbuda", emoji: "🇦🇬" },
  { nombre: "Arabia Saudita", emoji: "🇸🇦" },
  { nombre: "Argelia", emoji: "🇩🇿" },
  { nombre: "Argentina", emoji: "🇦🇷" },
  { nombre: "Armenia", emoji: "🇦🇲" },
  { nombre: "Australia", emoji: "🇦🇺" },
  { nombre: "Austria", emoji: "🇦🇹" },
  { nombre: "Azerbaiyán", emoji: "🇦🇿" },
  { nombre: "Bahamas", emoji: "🇧🇸" },
  { nombre: "Bangladés", emoji: "🇧🇩" },
  { nombre: "Barbados", emoji: "🇧🇧" },
  { nombre: "Baréin", emoji: "🇧🇭" },
  { nombre: "Bélgica", emoji: "🇧🇪" },
  { nombre: "Belice", emoji: "🇧🇿" },
  { nombre: "Benín", emoji: "🇧🇯" },
  { nombre: "Bielorrusia", emoji: "🇧🇾" },
  { nombre: "Birmania", emoji: "🇲🇲" },
  { nombre: "Bolivia", emoji: "🇧🇴" },
  { nombre: "Bosnia y Herzegovina", emoji: "🇧🇦" },
  { nombre: "Botsuana", emoji: "🇧🇼" },
  { nombre: "Brasil", emoji: "🇧🇷" },
  { nombre: "Brunéi", emoji: "🇧🇳" },
  { nombre: "Bulgaria", emoji: "🇧🇬" },
  { nombre: "Burkina Faso", emoji: "🇧🇫" },
  { nombre: "Burundi", emoji: "🇧🇮" },
  { nombre: "Cabo Verde", emoji: "🇨🇻" },
  { nombre: "Camboya", emoji: "🇰🇭" },
  { nombre: "Camerún", emoji: "🇨🇲" },
  { nombre: "Canadá", emoji: "🇨🇦" },
  { nombre: "Catar", emoji: "🇶🇦" },
  { nombre: "Chad", emoji: "🇹🇩" },
  { nombre: "Chile", emoji: "🇨🇱" },
  { nombre: "China", emoji: "🇨🇳" },
  { nombre: "Chipre", emoji: "🇨🇾" },
  { nombre: "Colombia", emoji: "🇨🇴" },
  { nombre: "Comoras", emoji: "🇰🇲" },
  { nombre: "Corea del Norte", emoji: "🇰🇵" },
  { nombre: "Corea del Sur", emoji: "🇰🇷" },
  { nombre: "Costa de Marfil", emoji: "🇨🇮" },
  { nombre: "Costa Rica", emoji: "🇨🇷" },
  { nombre: "Croacia", emoji: "🇭🇷" },
  { nombre: "Cuba", emoji: "🇨🇺" },
  { nombre: "Dinamarca", emoji: "🇩🇰" },
  { nombre: "Dominica", emoji: "🇩🇲" },
  { nombre: "Ecuador", emoji: "🇪🇨" },
  { nombre: "Egipto", emoji: "🇪🇬" },
  { nombre: "El Salvador", emoji: "🇸🇻" },
  { nombre: "Emiratos Árabes Unidos", emoji: "🇦🇪" },
  { nombre: "Eritrea", emoji: "🇪🇷" },
  { nombre: "Eslovaquia", emoji: "🇸🇰" },
  { nombre: "Eslovenia", emoji: "🇸🇮" },
  { nombre: "España", emoji: "🇪🇸" },
  { nombre: "Estados Unidos", emoji: "🇺🇸" },
  { nombre: "Estonia", emoji: "🇪🇪" },
  { nombre: "Esuatini", emoji: "🇸🇿" },
  { nombre: "Etiopía", emoji: "🇪🇹" },
  { nombre: "Filipinas", emoji: "🇵🇭" },
  { nombre: "Finlandia", emoji: "🇫🇮" },
  { nombre: "Fiyi", emoji: "🇫🇯" },
  { nombre: "Francia", emoji: "🇫🇷" },
  { nombre: "Gabón", emoji: "🇬🇦" },
  { nombre: "Gambia", emoji: "🇬🇲" },
  { nombre: "Georgia", emoji: "🇬🇪" },
  { nombre: "Ghana", emoji: "🇬🇭" },
  { nombre: "Granada", emoji: "🇬🇩" },
  { nombre: "Grecia", emoji: "🇬🇷" },
  { nombre: "Guatemala", emoji: "🇬🇹" },
  { nombre: "Guinea", emoji: "🇬🇳" },
  { nombre: "Guinea-Bisáu", emoji: "🇬🇼" },
  { nombre: "Guinea Ecuatorial", emoji: "🇬🇶" },
  { nombre: "Guyana", emoji: "🇬🇾" },
  { nombre: "Haití", emoji: "🇭🇹" },
  { nombre: "Honduras", emoji: "🇭🇳" },
  { nombre: "Hungría", emoji: "🇭🇺" },
  { nombre: "India", emoji: "🇮🇳" },
  { nombre: "Indonesia", emoji: "🇮🇩" },
  { nombre: "Irak", emoji: "🇮🇶" },
  { nombre: "Irán", emoji: "🇮🇷" },
  { nombre: "Irlanda", emoji: "🇮🇪" },
  { nombre: "Islandia", emoji: "🇮🇸" },
  { nombre: "Islas Marshall", emoji: "🇲🇭" },
  { nombre: "Islas Salomón", emoji: "🇸🇧" },
  { nombre: "Israel", emoji: "🇮🇱" },
  { nombre: "Italia", emoji: "🇮🇹" },
  { nombre: "Jamaica", emoji: "🇯🇲" },
  { nombre: "Japón", emoji: "🇯🇵" },
  { nombre: "Jordania", emoji: "🇯🇴" },
  { nombre: "Kazajistán", emoji: "🇰🇿" },
  { nombre: "Kenia", emoji: "🇰🇪" },
  { nombre: "Kirguistán", emoji: "🇰🇬" },
  { nombre: "Kiribati", emoji: "🇰🇮" },
  { nombre: "Kuwait", emoji: "🇰🇼" },
  { nombre: "Laos", emoji: "🇱🇦" },
  { nombre: "Lesoto", emoji: "🇱🇸" },
  { nombre: "Letonia", emoji: "🇱🇻" },
  { nombre: "Líbano", emoji: "🇱🇧" },
  { nombre: "Liberia", emoji: "🇱🇷" },
  { nombre: "Libia", emoji: "🇱🇾" },
  { nombre: "Liechtenstein", emoji: "🇱🇮" },
  { nombre: "Lituania", emoji: "🇱🇹" },
  { nombre: "Luxemburgo", emoji: "🇱🇺" },
  { nombre: "Macedonia del Norte", emoji: "🇲🇰" },
  { nombre: "Madagascar", emoji: "🇲🇬" },
  { nombre: "Malasia", emoji: "🇲🇾" },
  { nombre: "Malaui", emoji: "🇲🇼" },
  { nombre: "Maldivas", emoji: "🇲🇻" },
  { nombre: "Malí", emoji: "🇲🇱" },
  { nombre: "Malta", emoji: "🇲🇹" },
  { nombre: "Marruecos", emoji: "🇲🇦" },
  { nombre: "Mauricio", emoji: "🇲🇺" },
  { nombre: "Mauritania", emoji: "🇲🇷" },
  { nombre: "México", emoji: "🇲🇽" },
  { nombre: "Micronesia", emoji: "🇫🇲" },
  { nombre: "Moldavia", emoji: "🇲🇩" },
  { nombre: "Mónaco", emoji: "🇲🇨" },
  { nombre: "Mongolia", emoji: "🇲🇳" },
  { nombre: "Montenegro", emoji: "🇲🇪" },
  { nombre: "Mozambique", emoji: "🇲🇿" },
  { nombre: "Namibia", emoji: "🇳🇦" },
  { nombre: "Nauru", emoji: "🇳🇷" },
  { nombre: "Nepal", emoji: "🇳🇵" },
  { nombre: "Nicaragua", emoji: "🇳🇮" },
  { nombre: "Níger", emoji: "🇳🇪" },
  { nombre: "Nigeria", emoji: "🇳🇬" },
  { nombre: "Noruega", emoji: "🇳🇴" },
  { nombre: "Nueva Zelanda", emoji: "🇳🇿" },
  { nombre: "Omán", emoji: "🇴🇲" },
  { nombre: "Países Bajos", emoji: "🇳🇱" },
  { nombre: "Pakistán", emoji: "🇵🇰" },
  { nombre: "Palaos", emoji: "🇵🇼" },
  { nombre: "Panamá", emoji: "🇵🇦" },
  { nombre: "Papúa Nueva Guinea", emoji: "🇵🇬" },
  { nombre: "Paraguay", emoji: "🇵🇾" },
  { nombre: "Perú", emoji: "🇵🇪" },
  { nombre: "Polonia", emoji: "🇵🇱" },
  { nombre: "Portugal", emoji: "🇵🇹" },
  { nombre: "Reino Unido", emoji: "🇬🇧" },
  { nombre: "República Centroafricana", emoji: "🇨🇫" },
  { nombre: "República Checa", emoji: "🇨🇿" },
  { nombre: "República del Congo", emoji: "🇨🇬" },
  { nombre: "República Democrática del Congo", emoji: "🇨🇩" },
  { nombre: "República Dominicana", emoji: "🇩🇴" },
  { nombre: "Ruanda", emoji: "🇷🇼" },
  { nombre: "Rumanía", emoji: "🇷🇴" },
  { nombre: "Rusia", emoji: "🇷🇺" },
  { nombre: "Samoa", emoji: "🇼🇸" },
  { nombre: "San Cristóbal y Nieves", emoji: "🇰🇳" },
  { nombre: "San Marino", emoji: "🇸🇲" },
  { nombre: "San Vicente y las Granadinas", emoji: "🇻🇨" },
  { nombre: "Santa Lucía", emoji: "🇱🇨" },
  { nombre: "Santo Tomé y Príncipe", emoji: "🇸🇹" },
  { nombre: "Senegal", emoji: "🇸🇳" },
  { nombre: "Serbia", emoji: "🇷🇸" },
  { nombre: "Seychelles", emoji: "🇸🇨" },
  { nombre: "Sierra Leona", emoji: "🇸🇱" },
  { nombre: "Singapur", emoji: "🇸🇬" },
  { nombre: "Siria", emoji: "🇸🇾" },
  { nombre: "Somalia", emoji: "🇸🇴" },
  { nombre: "Sri Lanka", emoji: "🇱🇰" },
  { nombre: "Sudáfrica", emoji: "🇿🇦" },
  { nombre: "Sudán", emoji: "🇸🇩" },
  { nombre: "Sudán del Sur", emoji: "🇸🇸" },
  { nombre: "Suecia", emoji: "🇸🇪" },
  { nombre: "Suiza", emoji: "🇨🇭" },
  { nombre: "Surinam", emoji: "🇸🇷" },
  { nombre: "Tailandia", emoji: "🇹🇭" },
  { nombre: "Tanzania", emoji: "🇹🇿" },
  { nombre: "Tayikistán", emoji: "🇹🇯" },
  { nombre: "Timor Oriental", emoji: "🇹🇱" },
  { nombre: "Togo", emoji: "🇹🇬" },
  { nombre: "Tonga", emoji: "🇹🇴" },
  { nombre: "Trinidad y Tobago", emoji: "🇹🇹" },
  { nombre: "Túnez", emoji: "🇹🇳" },
  { nombre: "Turkmenistán", emoji: "🇹🇲" },
  { nombre: "Turquía", emoji: "🇹🇷" },
  { nombre: "Tuvalu", emoji: "🇹🇻" },
  { nombre: "Ucrania", emoji: "🇺🇦" },
  { nombre: "Uganda", emoji: "🇺🇬" },
  { nombre: "Uruguay", emoji: "🇺🇾" },
  { nombre: "Uzbekistán", emoji: "🇺🇿" },
  { nombre: "Vanuatu", emoji: "🇻🇺" },
  { nombre: "Vaticano", emoji: "🇻🇦" },
  { nombre: "Venezuela", emoji: "🇻🇪" },
  { nombre: "Vietnam", emoji: "🇻🇳" },
  { nombre: "Yemen", emoji: "🇾🇪" },
  { nombre: "Yibuti", emoji: "🇩🇯" },
  { nombre: "Zambia", emoji: "🇿🇲" },
  { nombre: "Zimbabue", emoji: "🇿🇼" }
];
  function mostrarRespuesta(msg, esError = false) {
    respuestaEl.textContent = msg;
    respuestaEl.style.color = esError ? "#e63946" : "#2a9d8f";
  }

  function cargarPaises() {
    paises.sort((a, b) => a.nombre.localeCompare(b.nombre));
    paisSelectEl.innerHTML = '<option value=""></option>';
    paises.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.nombre;
      opt.textContent = `${p.emoji} ${p.nombre}`;
      paisSelectEl.appendChild(opt);
    });
  }

  const paisSelectTS = new TomSelect(paisSelectEl, { allowEmptyOption: true });
  const tipoSelectTS = new TomSelect(tipoSelectEl, { allowEmptyOption: true });

  async function actualizarContadores() {
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL);
      const data = await res.json();
      tipoSelectTS.clearOptions();
      tipoSelectTS.addOption({ value: 'Entrante', text: `Entrante (${data.entrantes}/${data.maxEntrantes})`, disabled: data.entrantes >= data.maxEntrantes });
      tipoSelectTS.addOption({ value: 'Comida Principal', text: `Plato principal (${data.principales}/${data.maxPrincipales})`, disabled: data.principales >= data.maxPrincipales });
      tipoSelectTS.refreshOptions(false);
    } catch (err) {
      console.warn("Error al obtener contadores:", err);
      mostrarRespuesta("No se pudieron cargar los contadores", true);
    }
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const data = {
      nombre: form.nombre.value.trim(),
      comida: form.comida.value.trim(),
      pais: paisSelectTS.getValue(),
      tipo: tipoSelectTS.getValue()
    };
    if (!data.nombre || !data.comida || !data.pais || !data.tipo) {
      return mostrarRespuesta("Completa todos los campos.", true);
    }

    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    [form.nombre, form.comida, paisSelectEl, tipoSelectEl].forEach(el => el.disabled = true);
    mostrarRespuesta("");

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
      });
      const msg = await res.text();
      let mensaje = "Error inesperado.";
      let esError = true;

      switch (msg) {
        case "OK": mensaje = `¡Gracias, ${data.nombre}!`; esError = false; form.reset(); paisSelectTS.clear(); tipoSelectTS.clear(); actualizarContadores(); break;
        case "PAIS_DUPLICADO": mensaje = "Ese país ya fue elegido."; break;
        case "ENTRANTES_LLENO": mensaje = "Cupo de entrantes lleno."; break;
        case "PRINCIPALES_LLENO": mensaje = "Cupo de platos principales lleno."; break;
        default: mensaje = "Error al enviar."; break;
      }

      mostrarRespuesta(mensaje, esError);
    } catch (err) {
      console.error("Fetch error:", err);
      mostrarRespuesta("Error de conexión o CORS.", true);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar";
      [form.nombre, form.comida, paisSelectEl, tipoSelectEl].forEach(el => el.disabled = false);
    }
  });

  cargarPaises();
  actualizarContadores();
});
