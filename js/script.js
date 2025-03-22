function checkFields() {
    let firstUserName = document.querySelector(`#firstName`).value;
        if(/[-_+=.,/'";:~|]/.test(firstUserName)) {
            alert(`Такого в имени не может быть!`);
            return;
        }
        if(firstUserName.length < 3) {
            alert(`Имя не может быть настолько коротким!`);
            return;
        }
    let lastUserName = document.querySelector(`#lastName`).value;
        if(/[-_+=.,/'";:~|]/.test(lastUserName)) {
            alert(`Такого в фамилии быть не может!`);
            return;
        }
        if(lastUserName.length < 2) {
            alert(`Фамилия не может быть одной буквой!`);
            return;
        }
    let mailAddress = document.querySelector(`#emailAddress`).value;
        if(!mailAddress.includes(`@`)) {
            alert(`Нет символа @`);
            return;
        }
        if(!mailAddress.includes(`.`)) {
            alert(`Нет символа .`);
            return;
        }

    alert(`Мы получили ваще сообщение`);
}