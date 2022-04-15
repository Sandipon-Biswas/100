var b1 = document.querySelector("#b1");
var img1 = document.querySelector("#img1");


var b2 = document.querySelector("#b2");
var img2 = document.querySelector("#img2");


var b3 = document.querySelector("#b3");
var img3 = document.querySelector("#img3");


var b4 = document.querySelector("#b4");
var img4 = document.querySelector("#img4");


var box1 =document.querySelector(".box1");
var box2 =document.querySelector(".box2");
var box3 =document.querySelector(".box3");
var box4 =document.querySelector(".box4");




    
    setTimeout(() => {
        img1.classList.remove("black");
        b1.classList.remove("opr");
        box1.classList.add("box");
    }, 800);
    setTimeout(() => {
        img1.classList.add("black");
        b1.classList.add("opr");
        box1.classList.remove("box");
    }, 5000);
    
    
    
    setTimeout(() => {
        img2.classList.remove("black")
        b2.classList.remove("opr")
        box2.classList.add("box");
    }, 5000);
    setTimeout(() => {
        img2.classList.add("black")
        b2.classList.add("opr")
        box2.classList.remove("box");
    }, 9000);
    
    
    setTimeout(() => {
        img3.classList.remove("black")
        b3.classList.remove("opr")
        box3.classList.add("box");
    }, 9000);
    setTimeout(() => {
        img3.classList.add("black")
        b3.classList.add("opr")
        box3.classList.remove("box");
    }, 13000);
    
    
    
    setTimeout(() => {
        img4.classList.remove("black")
        b4.classList.remove("opr")
        box4.classList.add("box");
    }, 13000);
    setTimeout(() => {
        img4.classList.add("black")
        b4.classList.add("opr")
        box4.classList.remove("box");
    }, 17000);
    
    


