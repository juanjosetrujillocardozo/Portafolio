document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contacto__formulario');
    const nombreInput = form.querySelector('input[placeholder="Nombre"]');
    const emailInput = form.querySelector('input[placeholder="Correo Electrónico"]');
    const asuntoInput = form.querySelector('input[placeholder="Asunto"]');
    const mensajeInput = form.querySelector('textarea[placeholder="Mensaje"]');
    const submitButton = form.querySelector('.contacto__boton');

    // Función de validación
    function validarFormulario() {
        let valid = true;

        // Validación del campo Nombre
        if (nombreInput.value.trim() === '' || nombreInput.value.trim().length > 50) {
            valid = false;
            nombreInput.style.borderColor = 'red';
        } else {
            nombreInput.style.borderColor = '';
        }

        // Validación del campo Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            valid = false;
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = '';
        }

        // Validación del campo Asunto
        if (asuntoInput.value.trim() === '' || asuntoInput.value.trim().length > 50) {
            valid = false;
            asuntoInput.style.borderColor = 'red';
        } else {
            asuntoInput.style.borderColor = '';
        }

        // Validación del campo Mensaje
        if (mensajeInput.value.trim() === '' || mensajeInput.value.trim().length > 300) {
            valid = false;
            mensajeInput.style.borderColor = 'red';
        } else {
            mensajeInput.style.borderColor = '';
        }

        // Habilitar o deshabilitar el botón de enviar
        submitButton.disabled = !valid;
    }

    // Escuchar los eventos de entrada en cada campo
    form.addEventListener('input', validarFormulario);

    // Validación inicial
    validarFormulario();
});
