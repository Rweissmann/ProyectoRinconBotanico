window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            this.submit();
        }
    });

    function validateForm() {
        const inputs = ['nombre', 'email', 'direccion', 'telefono', 'area', 'mensaje', 'login-form-captcha'];
        for (const inputId of inputs) {
            const value = document.getElementById(inputId).value.trim();
            if (value === '') {
                alert('Por favor, complete todos los campos obligatorios.');
                return false;
            }
        }
        if (!validateCaptcha()) {
            return false;
        }
        return true;
    }

    function validateCaptcha() {
        const userInput = document.getElementById('login-form-captcha').value.trim();
        const correctCaptcha = "1234"; // Cambiar al valor correcto del CAPTCHA
        if (userInput !== correctCaptcha) {
            alert('Por favor, ingresa el CAPTCHA correctamente.');
            return false;
        }
        return true;
    }
});

window.onload = init;
console.warn = function() {}; // what warnings?


