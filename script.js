// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on question
            this.classList.toggle('active');
            
            // Toggle active class on answer
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // CTA Button Tracking
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function(e) {
        // Aqui você pode adicionar tracking do Google Analytics
        console.log('CTA Button Clicked - Sale Opportunity');
        
        // Não precisa prevenir default - o link normal funciona
        // Isso é só para tracking adicional
    });

    // Contador de tempo na página (para engajamento)
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage++;
        // Se o usuário ficou mais de 30 segundos, pode considerar mostrar um popup de urgência
        if (timeOnPage === 30) {
            console.log('Usuário engajado - 30 segundos na página');
        }
    }, 1000);

    // Efeito de digitação no título (opcional)
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Inicia o efeito após 1 segundo
        setTimeout(typeWriter, 1000);
    }
});

// Smooth scroll para âncoras (se adicionar menu posteriormente)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona classe de scroll no header para efeito
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '60px 0';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Video Player Control
const videoWrapper = document.querySelector('.video-wrapper');
const video = document.querySelector('.product-video');
const videoOverlay = document.querySelector('.video-overlay');

if (video && videoOverlay) {
    // Click no overlay para dar play
    videoOverlay.addEventListener('click', function() {
        video.play();
        videoWrapper.classList.add('playing');
        videoOverlay.style.display = 'none';
    });
    
    // Click no vídeo pausado para mostrar overlay de novo
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoOverlay.style.display = 'none';
        } else {
            video.pause();
            videoOverlay.style.display = 'flex';
        }
    });
    
    // Quando o vídeo termina, mostra o overlay de novo
    video.addEventListener('ended', function() {
        videoOverlay.style.display = 'flex';
        videoWrapper.classList.remove('playing');
    });
}