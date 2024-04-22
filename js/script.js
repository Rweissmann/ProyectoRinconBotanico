document.addEventListener('DOMContentLoaded', function() {
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
        return true; // Añadir un retorno de valor true si el formulario pasa la validación
    }

    const main = document.querySelector('main');
});

$(document).ready(function() {
    $('#privacyCheckbox').change(function() {
        $('#submitButton').prop('disabled', !this.checked);
    });

    $('#contactForm').submit(function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito!');
        $('#contactForm')[0].reset();
        $('#submitButton').prop('disabled', true);
    });
});

$('#prv_ck').change(function() {
    console.log('ok changed');
    $("#disabledInput").attr('disabled', !this.checked);
});

function dropDownSearch()
{
    elementClickSearh = '.nav2-search-icon';
    elementSlideSearh = '#search_widget';
    activeClassSearh = 'active';
}

$(document).ready(function() {
    dropDownSearch();
});
