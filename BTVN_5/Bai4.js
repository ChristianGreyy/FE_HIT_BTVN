const validateEmail = (textEmail) => {
     return textEmail
        .toLowerCase()
        .match(
            /(m[\w]+@[\w]+\.com)|(t[\w]+@[\w]+\.com)/g
        )
}

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
console.log(validateEmail(textEmail));


const validatePhone = (phoneNumber) => {
    return phoneNumber
        .match(/[0-9]{10}/g);
}

const textPhone = "dfkdsklfjlksdjfklsd097915092111111dfjhdsjfhds0979120734";

console.log(validatePhone(textPhone));