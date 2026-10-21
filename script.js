/**
 * Estudio Contable Ortiz-Rivera - Script Principal (script.js)
 * Interactividad accesible, menú móvil y validación de formularios
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Menú Responsive Móvil
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('show');
            
            // Cambiar ícono entre barra y equis
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('show')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                navMenu.classList.remove('show');
                mobileToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 2. Resaltar Página Activa en la Navegación (Fallback)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // 3. Validación de Formulario de Contacto (si existe)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const telefono = document.getElementById('telefono');
            const mensaje = document.getElementById('mensaje');
            const formFeedback = document.getElementById('form-feedback');

            if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
                if (formFeedback) {
                    formFeedback.style.display = 'block';
                    formFeedback.className = 'form-feedback error';
                    formFeedback.textContent = 'Por favor, completa todos los campos obligatorios.';
                }
                return;
            }

            // Simulación de envío exitoso
            if (formFeedback) {
                formFeedback.style.display = 'block';
                formFeedback.className = 'form-feedback success';
                formFeedback.textContent = '¡Gracias por tu mensaje! Nos comunicaremos a la brevedad.';
            }

            // Opcional: Redirigir a WhatsApp con el mensaje cargado
            const textoWs = `Hola, mi nombre es ${nombre.value.trim()}. ${mensaje.value.trim()} (Contacto: ${telefono ? telefono.value.trim() : email.value.trim()})`;
            const urlWs = `https://wa.me/5493816900316?text=${encodeURIComponent(textoWs)}`;
            
            setTimeout(() => {
                window.open(urlWs, '_blank');
                contactForm.reset();
            }, 1000);
        });
    }
});
