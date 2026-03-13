// Script para controle de animações e interações básicas
document.addEventListener('DOMContentLoaded', () => {
    
    // Tratamento básico para carregamento mais suave do vídeo de background (fallback)
    const video = document.getElementById('bg-video');
    if (video) {
        // Reduz a velocidade de playback do vídeo do carro soltando fogo para ficar mais cinematográfico
        video.playbackRate = 0.8; 
    }

    // Smooth Scroll para os links da âncora
    const linksScroll = document.querySelectorAll('a[href^="#"]');
    for (const link of linksScroll) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset para compensar a navbar fixa
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    }
});
