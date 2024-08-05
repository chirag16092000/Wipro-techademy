function checkEmail(email){
    let regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regexp.test(email)
}

let email1 = "bhangalec1609@gmail.com"
let email2 = "%*gmail.com"

if(checkEmail(email1)){
    console.log("Email 1 is Valid : ",email1)
}
else{
    console.log("Email 1 is Invalid : ",email1)
}

if(checkEmail(email2)){
    console.log("Email 2 is Valid : ",email2)
}
else{
    console.log("Email 2 is Invalid : ",email2)
}