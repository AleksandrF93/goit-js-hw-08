import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input')
}


const STORAGE_KEY = 'feedback-form-state';
refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormInput() {
    
     localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: refs.input.value, message: refs.textarea.value }));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) { 
        refs.input.value = JSON.parse(savedMessage).email;
        refs.textarea.value = JSON.parse(savedMessage).message;
    }
}


