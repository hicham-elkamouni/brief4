// Student Profile Creation Form REGEX

function emailValidation() {
    const email = document.getElementById('std-email');
    const regExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regExpression.test(email.value)) {
        document.querySelector("#email-invalid").style.display = "block";
        document.querySelector("#email-valid").style.display = "none";
        document.querySelector("#std-email").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#email-invalid").style.display = "none";
        document.querySelector("#email-valid").style.display = "block";
        document.querySelector("#std-email").style.border = "solid 3px #3db166";
    }
}


function passwordValidation() {
    const password = document.getElementById('std-password');
    const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    if (!regExpression.test(password.value)) {
        document.querySelector("#password-invalid").style.display = "block";
        document.querySelector("#password-valid").style.display = "none";
        document.querySelector("#std-password").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#password-invalid").style.display = "none";
        document.querySelector("#password-valid").style.display = "block";
        document.querySelector("#std-password").style.border = "solid 3px #3db166";
    }
}

function nameValidation() {
    const name = document.getElementById('std-name');
    const regExpression = /^[a-zA-Z]{3,15}\s{1}[a-zA-Z]{3,15}(\s{1}[a-zA-Z]{3,15})?$/;
    if (!regExpression.test(name.value)) {
        document.querySelector("#name-invalid").style.display = "block";
        document.querySelector("#name-valid").style.display = "none";
        document.querySelector("#std-name").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#name-invalid").style.display = "none";
        document.querySelector("#name-valid").style.display = "block";
        document.querySelector("#std-name").style.border = "solid 3px #3db166";
    }
}

function genderValidation() {
    if (document.querySelector("#std-gender").selected = true) {
        document.querySelector("#std-gender").style.border = "solid 3px #3db166";
    }
}

function ageValidation() {
    const age = document.getElementById('std-age');
    const regExpression = /^(1[0-9]|20)$/;
    if (!regExpression.test(age.value)) {
        document.querySelector("#age-invalid").style.display = "block";
        document.querySelector("#age-valid").style.display = "none";
        document.querySelector("#std-age").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#age-invalid").style.display = "none";
        document.querySelector("#age-valid").style.display = "block";
        document.querySelector("#std-age").style.border = "solid 3px #3db166";
    }
}

function adressValidation() {
    const homeadress = document.getElementById('std-adress');
    const regExpression = /^[a-z0-9\s,'-]{5,100}$/i;
    if (!regExpression.test(homeadress.value)) {
        document.querySelector("#adress-invalid").style.display = "block";
        document.querySelector("#adress-valid").style.display = "none";
        document.querySelector("#std-adress").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#adress-invalid").style.display = "none";
        document.querySelector("#adress-valid").style.display = "block";
        document.querySelector("#std-adress").style.border = "solid 3px #3db166";
    }
}

function phoneValidation() {
    const phone = document.getElementById('std-phone');
    const regExpression = /^[1][0-9]{10}$/;
    if (!regExpression.test(phone.value)) {
        document.querySelector("#phone-invalid").style.display = "block";
        document.querySelector("#phone-valid").style.display = "none";
        document.querySelector("#std-phone").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#phone-invalid").style.display = "none";
        document.querySelector("#phone-valid").style.display = "block";
        document.querySelector("#std-phone").style.border = "solid 3px #3db166";
    }
}

function classValidation() {
    if (document.querySelector("#std-class").selected = true) {
        document.querySelector("#std-class").style.border = "solid 3px #3db166";
    }
}

function mathValidation() {
    const mathNote = document.getElementById('math-mark');
    const regExpression = /^([0-9]|1[0-9]|20)$/;
    if (!regExpression.test(mathNote.value)) {
        document.querySelector("#math-invalid").style.display = "block";
        document.querySelector("#math-valid").style.display = "none";
        document.querySelector("#math-mark").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#math-invalid").style.display = "none";
        document.querySelector("#math-valid").style.display = "block";
        document.querySelector("#math-mark").style.border = "solid 3px #3db166";
    }
}

function englishValidation() {
    const englishNote = document.getElementById('english-mark');
    const regExpression = /^([0-9]|1[0-9]|20)$/;
    if (!regExpression.test(englishNote.value)) {
        document.querySelector("#english-invalid").style.display = "block";
        document.querySelector("#english-valid").style.display = "none";
        document.querySelector("#english-mark").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#english-invalid").style.display = "none";
        document.querySelector("#english-valid").style.display = "block";
        document.querySelector("#english-mark").style.border = "solid 3px #3db166";
    }
}

// Student Profile Modification Form REGEX

function emailValidationEdit() {
    const email = document.getElementById('std-email-edit');
    const regExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regExpression.test(email.value)) {
        document.querySelector("#email-invalid-edit").style.display = "block";
        document.querySelector("#email-valid-edit").style.display = "none";
        document.querySelector("#std-email-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#email-invalid-edit").style.display = "none";
        document.querySelector("#email-valid-edit").style.display = "block";
        document.querySelector("#std-email-edit").style.border = "solid 3px #3db166";
    }
}


function passwordValidationEdit() {
    const password = document.getElementById('std-password-edit');
    const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    if (!regExpression.test(password.value)) {
        document.querySelector("#password-invalid-edit").style.display = "block";
        document.querySelector("#password-valid-edit").style.display = "none";
        document.querySelector("#std-password-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#password-invalid-edit").style.display = "none";
        document.querySelector("#password-valid-edit").style.display = "block";
        document.querySelector("#std-password-edit").style.border = "solid 3px #3db166";
    }
}

function nameValidationEdit() {
    const name = document.getElementById('std-name-edit');
    const regExpression = /^[a-zA-Z]{3,15}\s{1}[a-zA-Z]{3,15}(\s{1}[a-zA-Z]{3,15})?$/;
    if (!regExpression.test(name.value)) {
        document.querySelector("#name-invalid-edit").style.display = "block";
        document.querySelector("#name-valid-edit").style.display = "none";
        document.querySelector("#std-name-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#name-invalid-edit").style.display = "none";
        document.querySelector("#name-valid-edit").style.display = "block";
        document.querySelector("#std-name-edit").style.border = "solid 3px #3db166";
    }
}

function genderValidationEdit() {
    if (document.querySelector("#std-gender-edit").selected = true) {
        document.querySelector("#std-gender-edit").style.border = "solid 3px #3db166";
    }
}

function ageValidationEdit() {
    const age = document.getElementById('std-age-edit');
    const regExpression = /^(1[0-9]|20)$/;
    if (!regExpression.test(age.value)) {
        document.querySelector("#age-invalid-edit").style.display = "block";
        document.querySelector("#age-valid-edit").style.display = "none";
        document.querySelector("#std-age-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#age-invalid-edit").style.display = "none";
        document.querySelector("#age-valid-edit").style.display = "block";
        document.querySelector("#std-age-edit").style.border = "solid 3px #3db166";
    }
}

function adressValidationEdit() {
    const homeadress = document.getElementById('std-adress-edit');
    const regExpression = /^[a-z0-9\s,'-]{5,100}$/i;
    if (!regExpression.test(homeadress.value)) {
        document.querySelector("#adress-invalid-edit").style.display = "block";
        document.querySelector("#adress-valid-edit").style.display = "none";
        document.querySelector("#std-adress-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#adress-invalid-edit").style.display = "none";
        document.querySelector("#adress-valid-edit").style.display = "block";
        document.querySelector("#std-adress-edit").style.border = "solid 3px #3db166";
    }
}

function phoneValidationEdit() {
    const phone = document.getElementById('std-phone-edit');
    const regExpression = /^[1][0-9]{10}$/;
    if (!regExpression.test(phone.value)) {
        document.querySelector("#phone-invalid-edit").style.display = "block";
        document.querySelector("#phone-valid-edit").style.display = "none";
        document.querySelector("#std-phone-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#phone-invalid-edit").style.display = "none";
        document.querySelector("#phone-valid-edit").style.display = "block";
        document.querySelector("#std-phone-edit").style.border = "solid 3px #3db166";
    }
}

function classValidationEdit() {
    if (document.querySelector("#std-class-edit").selected = true) {
        document.querySelector("#std-class-edit").style.border = "solid 3px #3db166";
    }
}

function mathValidationEdit() {
    const mathNote = document.getElementById('math-mark-edit');
    const regExpression = /^([0-9]|1[0-9]|20)$/;
    if (!regExpression.test(mathNote.value)) {
        document.querySelector("#math-invalid-edit").style.display = "block";
        document.querySelector("#math-valid-edit").style.display = "none";
        document.querySelector("#math-mark-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#math-invalid-edit").style.display = "none";
        document.querySelector("#math-valid-edit").style.display = "block";
        document.querySelector("#math-mark-edit").style.border = "solid 3px #3db166";
    }
}

function englishValidationEdit() {
    const englishNote = document.getElementById('english-mark-edit');
    const regExpression = /^([0-9]|1[0-9]|20)$/;
    if (!regExpression.test(englishNote.value)) {
        document.querySelector("#english-invalid-edit").style.display = "block";
        document.querySelector("#english-valid-edit").style.display = "none";
        document.querySelector("#english-mark-edit").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#english-invalid-edit").style.display = "none";
        document.querySelector("#english-valid-edit").style.display = "block";
        document.querySelector("#english-mark-edit").style.border = "solid 3px #3db166";
    }
}

// Contact Form REGEX

function nameContactValidation() {
    const name = document.getElementById('contact-name');
    const regExpression = /^[a-zA-Z]{3,15}\s{1}[a-zA-Z]{3,15}(\s{1}[a-zA-Z]{3,15})?$/;
    if (!regExpression.test(name.value)) {
        document.querySelector("#name-invalid").style.display = "block";
        document.querySelector("#name-valid").style.display = "none";
        document.querySelector("#contact-name").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#name-invalid").style.display = "none";
        document.querySelector("#name-valid").style.display = "block";
        document.querySelector("#contact-name").style.border = "solid 3px #3db166";
    }
}

function emailConatctValidation() {
    const email = document.getElementById('contact-email');
    const regExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regExpression.test(email.value)) {
        document.querySelector("#email-invalid").style.display = "block";
        document.querySelector("#email-valid").style.display = "none";
        document.querySelector("#contact-email").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#email-invalid").style.display = "none";
        document.querySelector("#email-valid").style.display = "block";
        document.querySelector("#contact-email").style.border = "solid 3px #3db166";
    }
}

function phoneContactValidation() {
    const phone = document.getElementById('contact-phone');
    const regExpression = /^[1][0-9]{10}$/;
    if (!regExpression.test(phone.value)) {
        document.querySelector("#phone-invalid").style.display = "block";
        document.querySelector("#phone-valid").style.display = "none";
        document.querySelector("#contact-phone").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#phone-invalid").style.display = "none";
        document.querySelector("#phone-valid").style.display = "block";
        document.querySelector("#contact-phone").style.border = "solid 3px #3db166";
    }
}

function subjectContactValidation() {
    const subject = document.getElementById('contact-subject');
    const regExpression = /^[a-zA-Z0-9\s,:'".?!()&*#-]{1,100}$/;
    if (!regExpression.test(subject.value)) {
        document.querySelector("#subject-invalid").style.display = "block";
        document.querySelector("#subject-valid").style.display = "none";
        document.querySelector("#contact-subject").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#subject-invalid").style.display = "none";
        document.querySelector("#subject-valid").style.display = "block";
        document.querySelector("#contact-subject").style.border = "solid 3px #3db166";
    }
}

function msgContactValidation() {
    const msg = document.getElementById('contact-msg');
    const regExpression = /[\s\S]*/;
    if (!regExpression.test(msg.value)) {
        document.querySelector("#msg-invalid").style.display = "block";
        document.querySelector("#msg-valid").style.display = "none";
        document.querySelector("#contact-msg").style.border = "solid 3px #cf2716";
    } else {
        document.querySelector("#msg-invalid").style.display = "none";
        document.querySelector("#msg-valid").style.display = "block";
        document.querySelector("#contact-msg").style.border = "solid 3px #3db166";
    }
}

// Login Form REGEX

function emailLoginValidation() {
    const email = document.getElementById('login-email');
    const regExpression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regExpression.test(email.value)) {
        document.querySelector("#email-invalid").style.display = "block";
        document.querySelector("#email-valid").style.display = "none";
        document.querySelector("#login-email").style.border = "solid 3px #cf2716";
        document.querySelector("#email-error").style.display = "block";
    } else {
        document.querySelector("#email-invalid").style.display = "none";
        document.querySelector("#email-valid").style.display = "block";
        document.querySelector("#login-email").style.border = "solid 3px #3db166";
        document.querySelector("#email-error").style.display = "none";
    }
}

function passwordLoginValidation() {
    const password = document.getElementById('login-password');
    const regExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    if (!regExpression.test(password.value)) {
        document.querySelector("#password-invalid").style.display = "block";
        document.querySelector("#password-valid").style.display = "none";
        document.querySelector("#login-password").style.border = "solid 3px #cf2716";
        document.querySelector("#password-error").style.display = "block";
    } else {
        document.querySelector("#password-invalid").style.display = "none";
        document.querySelector("#password-valid").style.display = "block";
        document.querySelector("#login-password").style.border = "solid 3px #3db166";
        document.querySelector("#password-error").style.display = "none";
    }
}