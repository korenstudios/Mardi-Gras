const usern = document.querySelector('.usern');
const userl = document.querySelector('.userl');
const usere = document.querySelector('.usere');
const usermsg = document.querySelector('.usermsg');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');
const error4 = document.querySelector('.error4');
const success1 = document.querySelector('.success1');
const success2 = document.querySelector('.success2');
const success3 = document.querySelector('.success3');
const success4 = document.querySelector('.success4');

document.querySelector("input[type='button'").addEventListener('click', () => {
    if (usern.value == "") {
        error1.innerHTML =
        `<small class="bi bi-exclamation-circle-fill"></small><small class="invalid-msg">Enter Name Please</small>`;
    }
    else {
        success1.innerHTML = `<small class="bi bi-check-circle-fill"></small>`;
    }
    if (userl.value == "") {
        error2.innerHTML =
        `<small class="bi bi-exclamation-circle-fill"></small><small class="invalid-msg">Enter Last Name Please</small>`;
    }
    else {
        success2.innerHTML =
        `<small class="bi bi-check-circle-fill msg-icon"></small>`;
    }
    if (usere.value == "" || usere.value.indexOf("@") == -1 || usere.value.indexOf(".") == -1) {
        error3.innerHTML = 
        `<small class="bi bi-exclamation-circle-fill"></small><small class="invalid-msg">Enter Email Please</small>`;
    }
    else {
        success3.innerHTML = 
        `<small class="bi bi-check-circle-fill msg-icon"></small>`;
    }
    if (usermsg.value == "") {
        error4.innerHTML = 
        `<small class="bi bi-exclamation-circle-fill"></small><small class="invalid-msg">Enter Message Please</small>`;
    }
    else {
        success4.innerHTML = 
        `<small class="bi bi-check-circle-fill msg-icon"></small>`;
    }
});