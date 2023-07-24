const OTPcode = document.querySelector('.card-text');
const btn = document.querySelector('.btn');
const OTParray = ["A", "B","C", "D", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9 ];


btn.addEventListener('click', generadorOTP);


function generadorOTP(){
    let text = "";
    for (let i = 0; i < 7; i++){
        text += OTParray[getOtpCode()];
    }

    OTPcode.textContent = text;
}


function getOtpCode(){
    return Math.floor(Math.random() * OTParray.length);
}

