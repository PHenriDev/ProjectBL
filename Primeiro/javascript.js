document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS Animation
    AOS.init({
        duration: 1000,
        once: true
    });

    // Botão Voltar ao Topo
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Obrigado por se inscrever! Em breve você receberá nossas novidades no email: ${email}`);
        this.reset();
    });

    // Adiciona efeito hover nos links de serviços
    const serviceLinks = document.querySelectorAll('.footer-links a');
    serviceLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('i').style.color = '#ffd700';
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('i').style.color = 'white';
        });
    });
});
//Fim do Codigo//


// Função para animar os números
function animateNumbers(targetElements, finalNumbers, duration) {
    targetElements.forEach((element, index) => {
        let startNumber = 0;
        const endNumber = finalNumbers[index];
        const increment = endNumber / (duration / 16); // 16ms é o tempo aproximado de um frame

        const timer = setInterval(() => {
            startNumber += increment;
            if (startNumber >= endNumber) {
                clearInterval(timer);
                startNumber = endNumber; // Garante que o número final seja exato
            }
            element.textContent = `+${Math.floor(startNumber)}`; // Atualiza o número no HTML
        }, 16); // 16ms para uma animação suave
    });
}

// Seleciona os elementos <h3> dentro da seção .numbers
const numberElements = document.querySelectorAll('.numbers h3');

// Define os números finais para cada contador
const finalNumbers = [100, 80, 10];

// Inicia a animação
animateNumbers(numberElements, finalNumbers, 2000); // Duração de 2 segundos (2000ms)
//Fim do codigo//


//Animação do mapa//

        // Função para inicializar o mapa
        function initMap() {
            // Coordenadas da Brasluz Engenharia
            const location = { lat: -8.1090295, lng: -34.9174349 };

            // Cria o mapa
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15, // Nível de zoom
                center: location, // Centraliza o mapa na localização
                mapTypeId: "roadmap", // Tipo de mapa (roadmap, satellite, hybrid, terrain)
            });

            // Adiciona um marcador personalizado
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: "Brasluz Engenharia", // Título do marcador
                animation: google.maps.Animation.DROP, // Animação ao carregar o marcador
            });

            // Adiciona uma janela de informação ao clicar no marcador
            const infowindow = new google.maps.InfoWindow({
                content: `
                    <strong>Brasluz Engenharia</strong><br>
                    Rua. Jean Emile Favre, 776 - 1 Andar - Sala 5<br>
                    Ipsep, Recife - PE, 51190-450
                `,
            });

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });

            // Adiciona um botão para centralizar o mapa
            const centerButton = document.createElement("button");
            centerButton.textContent = "Centralizar Mapa";
            centerButton.style.position = "absolute";
            centerButton.style.top = "10px";
            centerButton.style.left = "10px";
            centerButton.style.padding = "10px";
            centerButton.style.backgroundColor = "#007bff";
            centerButton.style.color = "#fff";
            centerButton.style.border = "none";
            centerButton.style.borderRadius = "5px";
            centerButton.style.cursor = "pointer";
            centerButton.style.zIndex = "1000";

            centerButton.addEventListener("click", () => {
                map.setCenter(location);
                map.setZoom(15);
            });

            // Adiciona o botão ao mapa
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerButton);
        }

        // Carrega a API do Google Maps
        function loadGoogleMapsAPI() {
            const script = document.createElement("script");
            script.src =
            script.defer = true;
            document.head.appendChild(script);
        }

        // Inicializa o mapa quando a página carregar
        window.onload = loadGoogleMapsAPI;
//Fim//