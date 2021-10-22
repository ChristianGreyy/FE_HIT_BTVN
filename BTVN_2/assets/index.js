var check = true;
document.querySelector('.login-container__formLogin__input-icon').onclick =(e) => {
    document.querySelector('.login-container__formLogin__input-icon').classList.toggle('login-container__formLogin__input-icon--active', check);
    if(check) {
        document.querySelector('.form-control--password').type = 'text';
    } else {
        document.querySelector('.form-control--password').type = 'password';

    }
    check = !check;
}

document.querySelector('.login-container__formLogin__button').onclick = (e) => {
    document.querySelector('.login-container__formLogin__form').submit();
}