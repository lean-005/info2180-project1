const form = document.querySelector('.newsletter form'); 
const email = document.querySelector('#email');
const message = document.querySelector('.message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let emailAdd = email.value.trim();

    if (emailAdd === '') {
        message.textContent = 'Please enter a valid email address.';
    } else{
        message.textContent = `Thank you! Your email address ${emailAdd} has been added to our mailing list!.`;
    }
});
       