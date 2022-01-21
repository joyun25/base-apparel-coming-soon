const submit = document.querySelector('.submit');
const input = document.querySelector('input');
const errorImg = document.querySelector('.error_img');
const errorText = document.querySelector('.error_text');

submit.addEventListener('click', e => {
    e.preventDefault();
    if (input.value === ''){
        input.classList.add('error_input');
        errorImg.classList.remove('error-hide');
        errorText.classList.remove('error-hide');
        alert ('The field is empty. Please enter your email.');
    }else if (!input.value.includes('@')) {
        input.classList.add('error_input');
        errorImg.classList.remove('error-hide');
        errorText.classList.remove('error-hide');
        alert ('The email address is not formatted correctly.');
    }else{
        if ( !errorImg.classList.contains('error-hide')) {
            input.classList.remove('error_input');
            errorImg.classList.add('error-hide');
            errorText.classList.add('error-hide');
        }
        alert ('Successfully submit, we have received your email.')
        input.value = '';
    }
})