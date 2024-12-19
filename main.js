// const userPossword = +prompt("parolingizni kriting")
// const userLogin = prompt("loginingizni kriting")

// const oquvchi = {
//     name: "Murod",
//     password:1294,
//     login: "bot"
// }

// if(userPossword == oquvchi.password && userLodin == oquvchi.login){
//     alert("Space hush kelibsiz")
// }
// else if(userPossword == 0 && userLogin == ""){
//     alert("Iltimos malumot")
// }else{
//     alert("Xatolik. Ulanish uchun login va parolni kiriting")
// }


// const bot = "Ismoil"
// console.log();

// const text = "oquvchi"

// console.log(text.includes(""));

const num1 = ["Doniyor" , "Ismoil" , "Said" , "Mahmud" , "Boisxon"]
const num = prompt("Ism qoshing");
const anwer = prompt("Iltimos tanlang: \n 1) push \n 2) pop \n 3) shift \n 4) unshift")

if(anwer == 1){
    alert(`Javob: ${num1.push(num)}`)
    console.log(num1);
    
}else if(anwer == 2){
    alert(`Javob: ${num1.pop()}`)
    console.log(num1);
    
}else if(anwer == 3){
    alert(`Javob: ${num1.shift(num)}`)
    console.log(num1);
    
}else if(anwer == 4){
    alert(`Javob: ${num1.unshift()}`)
    console.log(num1);
    
}else if(num1 == 0){
    alert("Iltimos kiriting")
}else if(num1 == 0){
    alert("Iltimos kiriting")
}
else{
    alert("Qiymat kiriting")
}