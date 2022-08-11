// let regexPattern = {
//     airtel: /^(\+234|0701|0708|0802|0808|0901|0902|0812|0904|0907|0701)\d{7,10}$/gm,
//     mtn: /^(\+234|0916|0912|0906|0903|0816|0814|0813|0810|0806|0803|0706|0703|07026|07025)\d{7,10}$/g,
//     ["9Monile"]: /^(\+234|0908|0909|0818|0817|0809)\d{7,10}$/g,
//     Globacom: /^(\+234|0705|0806|0811|0815|0905|0915)\d{7,10}$/g
// }

let regexPattern = {
    airtel: /^(0701|0708|0802|0808|0901|0902|0812|0904|0907|0912)\d{7}$/,
    mtn: /^(0916|0912|0906|0903|0816|0814|0813|0810|0806|0803|0706|0703)\d{7}$/,
    Globacom: /^(0705|0817|0809|0805|0807|0905|0811|0815)\d{7}$/, 
    ["9Mobile"]: /^(0908|0909|0818|0817|0809|0818|)\d{7}$/
}

let input = document.getElementById("phonenumber")
let div = document.getElementById("div")


function validateNumber() {
    input.addEventListener("keyup", (e) => {
        let inputValue = e.target.value
        if(inputValue.match(regexPattern.airtel)) {
           return div.innerHTML = `<img src="airtel.png" alt="logo">`
        } else if (inputValue.match(regexPattern.mtn)) {
           return div.innerHTML = `<img src="mtn.png" alt="logo">`
        } else if (inputValue.match(regexPattern["9Mobile"])) {
           return div.innerHTML = `<img src="9mobile.png" alt="logo">`
        } else if (inputValue.match(regexPattern.Globacom)) {
           return div.innerHTML = `<img src="glo.png" alt="logo">`
        } else {
          return  div.innerHTML = "";
                
        }

    })
}
validateNumber();




