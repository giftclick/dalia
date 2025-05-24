window.addEventListener('load', function () {
  // Mantén el loader visible durante un tiempo fijo
  setTimeout(function () {
    // Oculta el loader
    document.getElementById('loader').style.display = 'none';
    // Muestra el contenido principal
    document.getElementById('content').style.display = 'block';
  }, 3000); // 3000 milisegundos = 3 segundos
});

// SVG de estrellita plateada como fondo
const starSVG = encodeURIComponent(`
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12"
                    fill="url(#silverGradient)" stroke="#e0e0e0" stroke-width="1.2"/>
                <defs>
                    <linearGradient id="silverGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#f8f8f8"/>
                        <stop offset="0.5" stop-color="#bfc1c6"/>
                        <stop offset="1" stop-color="#e0e0e0"/>
                    </linearGradient>
                </defs>
            </svg>
        `);

// Agrega estilos para las estrellitas
const style = document.createElement('style');
style.textContent = `
            .firefly {
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                width: 15px;
                height: 15px;
                background-image: url("data:image/svg+xml,${starSVG}");
                background-size: contain;
                background-repeat: no-repeat;
                will-change: transform, opacity;
                filter: drop-shadow(0 0 6px #fff8) drop-shadow(0 0 2px #bfc1c6);
                transition: opacity 0.2s;
            }
            .background-firefly {
                filter: drop-shadow(0 0 2px #fff8);
            }
            .foreground-firefly {
                filter: drop-shadow(0 0 8px #fff) drop-shadow(0 0 2px #bfc1c6);
            }
        `;
document.head.appendChild(style);

function updateCountdown() {
  const targetDate = new Date("aug 30, 2025 19:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").innerHTML = "¡Ya comenzó la celebración!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} días ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown(); // Ejecuta al cargar
setInterval(updateCountdown, 1000); // Actualiza cada segundo