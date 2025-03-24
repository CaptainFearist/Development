function checkFields() {
    let firstUserName = document.querySelector(`#firstName`).value;
    let firstNameError = document.querySelector(`#firstNameError`);
    firstNameError.style.display = `none`;
        if(/[-_+=.,/'";:~|]/.test(firstUserName)) {
            firstNameError.textContent = `Такого в имени не может быть!`;
            firstNameError.style.display = `block`;
            setTimeout(function(){
                firstNameError.style.display = `none`;
            }, 3000);
            return;
        }
        if(firstUserName.length < 3) {
            firstNameError.textContent = `Имя не может быть настолько коротким!`;
            firstNameError.style.display = `block`;
            setTimeout(function(){
                firstNameError.style.display = `none`;
            }, 3000);
            return;
        }
    let lastUserName = document.querySelector(`#lastName`).value;
    let lastNameError = document.querySelector(`#lastNameError`);
    lastNameError.style.display = `none`;
        if(/[-_+=.,/'";:~|]/.test(lastUserName)) {
            lastNameError.textContent = `Такого в фамилии быть не может!`;
            lastNameError.style.display = `block`;
            setTimeout(function(){
                lastNameError.style.display = `none`;
            }, 3000);
            return;
        }
        if(lastUserName.length < 2) {
            lastNameError.textContent = `Фамилия не может быть одной буквой!`;
            lastNameError.style.display = `block`;
            setTimeout(function(){
                lastNameError.style.display = `none`;
            }, 3000);
            return;
        }
    let mailAddress = document.querySelector(`#emailAddress`).value;
    let mailError = document.querySelector(`#mailError`);
    mailError.style.display = `none`;
        if(!mailAddress.includes(`@`)) {
            mailError.textContent = `Нет символа @`;
            mailError.style.display = `block`;
            setTimeout(function(){
                mailError.style.display = `none`;
            }, 3000);
            return;
        }
        if(!mailAddress.includes(`.`)) {
            mailError.textContent = `Нет символа .`;
            mailError.style.display = `block`;
            setTimeout(function(){
                mailError.style.display = `none`;
            }, 3000);
            return;
        }

    alert(`Мы получили ваще сообщение`);
}

function checkEmail() {
    let email = document.querySelector('#emailField').value;
    let emailError = document.querySelector(`#emailError`);
    emailError.style.display = `none`;
    if(!email.includes('@')) {
        emailError.textContent = `Нет символа @`;
        emailError.style.display = `block`;
        setTimeout(function(){
            emailError.style.display = `none`;
        }, 3000);
        return;
    }
    if (!email.includes('.')) {
        emailError.textContent = `Нет символа .`;
        emailError.style.display = `block`;
        setTimeout(function(){
            emailError.style.display = `none`;
        }, 3000);
        return;
    }

    alert('Успешно!');
}