const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const text ='truongthanhhugn2k2@gmail.com'
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function ValidateUSPhoneNumber(phoneNumber) {
    var regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phone = phoneNumber.match(regExp);
    if (phone) {
      return true;
    }
    return false;
  }

const component = textEmail.split('.com');
for(let item in component) {
    if(component[item]) {
        component[item] += '.com';
    }
}
console.log("------- Validate Email -------");
component.forEach(item => {
    if(validateEmail(item)) {
        console.log(item);
    }
})

const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
const ArrayPhone = [];
let index = 0;
let length = textPhone.length;

while(index < length) {
    let string = "";
    while(Number(textPhone[index]) || textPhone[index] === '0') {
        string += textPhone[index];
        index ++;
    }
    index ++;
    ArrayPhone.push(string)
}

console.log("------- Validate PhoneNumber -------");
for(let item of ArrayPhone) {
    if(item && ValidateUSPhoneNumber(item)) {
        console.log(item);
    }
}

