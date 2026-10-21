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
    const normalizar = (ruta) => {
        const limpia = (ruta || '').split(/[?#]/)[0].replace(/\.html$/, '').replace(/\/index$/, '/').replace(/\/+$/, '');
        return limpia === '' ? '/' : limpia;
    };
    const currentPath = normalizar(window.location.pathname);
    document.querySelectorAll('.nav-link').forEach(link => {
        if (normalizar(link.getAttribute('href')) === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // 3. Formulario de Contacto: arma el mensaje y lo abre en WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const valor = (id) => {
                const campo = document.getElementById(id);
                return campo ? campo.value.trim() : '';
            };
            const nombre = valor('nombre');
            const email = valor('email');
            const telefono = valor('telefono');
            const mensaje = valor('mensaje');
            const formFeedback = document.getElementById('form-feedback');

            const mostrar = (tipo, texto) => {
                if (!formFeedback) return;
                formFeedback.style.display = 'block';
                formFeedback.className = 'form-feedback ' + tipo;
                formFeedback.textContent = texto;
            };

            if (!nombre || !mensaje) {
                mostrar('error', 'Por favor, completa tu nombre y tu consulta.');
                return;
            }

            const lineas = [`Hola, mi nombre es ${nombre}.`, mensaje];
            const contacto = [telefono && `Tel: ${telefono}`, email && `Email: ${email}`].filter(Boolean).join(' - ');
            if (contacto) lineas.push(`(${contacto})`);
            const urlWs = `https://wa.me/5493816900316?text=${encodeURIComponent(lineas.join('\n'))}`;

            // Se abre en el mismo gesto del clic para que el navegador no lo bloquee
            const ventana = window.open(urlWs, '_blank');
            if (!ventana) {
                window.location.href = urlWs;
            }
            mostrar('success', 'Abrimos WhatsApp con tu consulta lista. Solo falta tocar "Enviar" en WhatsApp para que nos llegue.');
        });
    }
});
