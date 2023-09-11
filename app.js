const pins = document.querySelectorAll('input');
const button = document.querySelector('button')

const genOTP = () => {
    let OTP = '';
    for (i = 0; i < 4; i++) {
        OTP += Math.floor(Math.random() * 10);
    }
    return OTP;

}
console.log(genOTP())


let userOTP = "";
for (let i = 0; i < pins.length; i++) {
    pins[i].addEventListener("keyup", (e) => {

        let userInput = pins[i].value = pins[i].value.replace(/[^0-9]/g, "");
        if (userInput) {
            pins[i].nextElementSibling.focus()
        }

        if (e.key == "Backspace") {
            pins[i].previousElementSibling.focus()

        }
        userOTP += userInput;

    }

    )

}

button.addEventListener('click', () => {

    const confirmed = genOTP()
    console.log(userOTP)
    if (userOTP === confirmed)
        console.log("Success")

})