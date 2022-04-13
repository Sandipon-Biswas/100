var b1 = document.querySelector("#b1");
var img1 = document.querySelector("#img1");


var b2 = document.querySelector("#b2");
var img2 = document.querySelector("#img2");


var b3 = document.querySelector("#b3");
var img3 = document.querySelector("#img3");


var b4 = document.querySelector("#b4");
var img4 = document.querySelector("#img4");

for (let x = 0; x < 5; x++) {
    
    setTimeout(() => {
        img1.classList.remove("black")
        b1.classList.remove("opr")
    }, 1000);
    setTimeout(() => {
        img1.classList.add("black")
        b1.classList.add("opr")
    }, 10000);
    
    
    
    setTimeout(() => {
        img2.classList.remove("black")
        b2.classList.remove("opr")
    }, 10000);
    setTimeout(() => {
        img2.classList.add("black")
        b2.classList.add("opr")
    }, 20000);
    
    
    setTimeout(() => {
        img3.classList.remove("black")
        b3.classList.remove("opr")
    }, 20000);
    setTimeout(() => {
        img3.classList.add("black")
        b3.classList.add("opr")
    }, 30000);
    
    
    
    setTimeout(() => {
        img4.classList.remove("black")
        b4.classList.remove("opr")
    }, 30000);
    setTimeout(() => {
        img4.classList.add("black")
        b4.classList.add("opr")
    }, 40000);
    
    
}

