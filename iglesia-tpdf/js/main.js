document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad de la Galería (Lightbox)
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (galleryImages.length > 0 && lightbox && lightboxImg && closeBtn) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        closeBtn.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // 2. Animación de las secciones al hacer scroll
    const animatedSections = document.querySelectorAll('.animated-section');

    function checkVisibility() {
        animatedSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // 3. Botón "Volver al inicio"
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Salmo del Día
    function mostrarSalmoDiario() {
        const salmos = [
            "Salmo 1: Dichoso el hombre que no sigue el consejo de los malvados...",
            "Salmo 23: El Señor es mi pastor; nada me falta...",
            "Salmo 100: ¡Aclamen con alegría al Señor, habitantes de toda la tierra!...",
            "Salmo 118: Alaben al Señor, porque él es bueno; su gran amor perdura para siempre...",
            "Salmo 8: Oh Señor, nuestro Señor, ¡cuán glorioso es tu nombre en toda la tierra!...",
            "Salmo 46: Dios es nuestro amparo y nuestra fuerza, nuestra ayuda segura en momentos de angustia...",
            "Salmo 91: El que habita al abrigo del Altísimo se acoge a la sombra del Todopoderoso...",
            "Salmo 139: Señor, tú me has examinado y me conoces...",
            "Salmo 121: Levanto mis ojos a las montañas; ¿de dónde vendrá mi ayuda?...",
            "Salmo 37: Confía en el Señor y haz el bien; habita en la tierra y aliméntate de la verdad...",
            "Salmo 19: Los cielos cuentan la gloria de Dios, el firmamento proclama la obra de sus manos...",
            "Salmo 27: El Señor es mi luz y mi salvación; ¿a quién temeré?...",
            "Salmo 51: Ten compasión de mí, oh Dios, conforme a tu gran amor; conforme a tu inmensa bondad, borra mis transgresiones...",
            "Salmo 63: Oh Dios, tú eres mi Dios; yo te busco intensamente. Mi alma tiene sed de ti...",
            "Salmo 103: Alaba, alma mía, al Señor; alabe todo mi ser su santo nombre...",
            "Salmo 119: Dichosos los que van por caminos de perfección, los que andan conforme a la ley del Señor...",
            "Salmo 136: Alaben al Señor, porque él es bueno; su gran amor perdura para siempre...",
            "Salmo 145: Te exaltaré, mi Dios y Rey; bendeciré tu nombre por siempre y para siempre...",
            "Salmo 24: Del Señor es la tierra y todo lo que hay en ella; el mundo y todos los que en él habitan...",
            "Salmo 40: Puse en el Señor toda mi esperanza; él se inclinó a mí y escuchó mi clamor...",
            "Salmo 73: En verdad, Dios es bueno con Israel, con los que tienen un corazón puro...",
            "Salmo 84: ¡Cuán amables son tus moradas, Señor Todopoderoso!...",
            "Salmo 116: Amo al Señor porque él escucha la voz de mi ruego...",
            "Salmo 126: Cuando el Señor hizo volver a los cautivos de Sion, nos parecía que soñábamos...",
            "Salmo 147: Alaba al Señor, oh Jerusalén; alaba a tu Dios, oh Sion...",
            "Salmo 150: ¡Alaben a Dios en su santuario; alábenlo en su poderoso firmamento!...",
            "Salmo 34: Bendeciré al Señor en todo tiempo; su alabanza estará siempre en mi boca...",
            "Salmo 57: Ten compasión de mí, oh Dios, ten compasión, porque en ti confío...",
            "Salmo 107: Alaben al Señor por su gran amor, por sus maravillas para con los hombres...",
            "Salmo 122: Me alegré con los que me decían: A la casa del Señor iremos...",
            "Salmo 146: Alaben al Señor. Alaba, alma mía, al Señor..."
        ];

        const diaDelMes = new Date().getDate();
        const salmoDelDia = salmos[diaDelMes - 1];
        document.getElementById('salmo-content').textContent = salmoDelDia;
        
        // Animación de aparición
        setTimeout(() => { 
            const salmoContainer = document.querySelector('.salmo-diario');
            if (salmoContainer) {
                salmoContainer.style.opacity = '1'; 
            }
        }, 100);
    }

    if (document.getElementById('salmo-content')) {
        mostrarSalmoDiario();
    }
});