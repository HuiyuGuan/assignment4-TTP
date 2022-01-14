let leftButton = document.getElementById("text")
let rightButton = document.getElementById("text")

function leftfunction(){
    leftButton.innerHTML ="I'm right"

}
function rightfunction(){

    rightButton.innerHTML ="No, I'm right!"
}

function alarm(){
    alert("Hey, I told you not to hover over me!")
}


function check(password){
    let Password = document.getElementById("password")
    let welcome = document.getElementById("welcome")
    
    if(Password.value === "12345678"){
        welcome.innerHTML = "login successfully!"
    }else{
        alert("wrong password!")
    }
}
