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
function findvolume(){
    let radius = document.getElementById("radius").value
    let volume = (4/3) * Math.PI * Math.pow(radius, 3)
    let radiustext = document.getElementById("radiustext")
    radiustext.innerHTML = "The volume of the sphere is : " + volume.toFixed(3)
}