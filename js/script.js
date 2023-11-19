const scriptURL = '[G_SCRIPT_URL]'
const form = document.forms['submit-to-google-sheet']
const buttonLoading = document.querySelector('.btn-loading');
const buttonSubmit = document.querySelector('.btn-submit');
const alert = document.querySelector('.alert');

form.addEventListener('submit', e => {
e.preventDefault()

// if submit clicked
// show loading, hide submit
buttonLoading.classList.toggle('d-none');
buttonSubmit.classList.toggle('d-none');

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // show submit, hide loading, show alert and reset form
        buttonLoading.classList.toggle('d-none');
        buttonSubmit.classList.toggle('d-none');
        alert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})