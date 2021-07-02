const button_sendRequest = document.getElementById('button-sendRequest');
const send_form = document.getElementById('send-form');
const close_form = document.getElementById('close-form');
const button_signUp = document.getElementById('button-signUp');

button_sendRequest.onclick = function () {
    send_form.style.display = "block"

}

close_form.onclick = function () {
    send_form.style.display = "none"

}

button_signUp.onclick = function () {
    const name_gest = document.getElementById('name_gest');
    const phone_gest = document.getElementById('phone_gest');

    if (name_gest.value) {
        console.log(name_gest.value)
        name_gest.style.border="1px solid #FFFFFF "
    } else {
        name_gest.style.border="2px solid red "
    }

    if (phone_gest.value) {
        console.log(phone_gest.value)
        phone_gest.style.border="1px solid #FFFFFF "
    } else {
        phone_gest.style.border="2px solid red "
    }

    if(name_gest.value && phone_gest.value) {
        send_form.style.display = "none"
    }
}