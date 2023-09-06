let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

function clickRight() {
    if (box2.style.display === "none") {
        box2.style.display = "block";
        box1.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";

    } else {
        box2.style.display = "none";
        box1.style.display = "block";
        box3.style.display = "none";
        box4.style.display = "none";
    }
}

function clickRight1() {
    if (box3.style.display === "none") {
        box3.style.display = "block";
        box2.style.display = "none";
        box1.style.display = "none";
    } else {
        box3.style.display = "none";
        box2.style.display = "block";
        box1.style.display= "none";
    }
}

function clickRight2() {
    if (box4.style.display === "none") {
        box4.style.display = "block"
        box3.style.display = "none";
        box2.style.display = "none";
        box1.style.display = "none";
    } else {
        box3.style.display = "block";
        box2.style.display = "none";
        box1.style.display = "none";
        box4.style.display = "none"
    }
}

function clickRight3() {
    if (box1.style.display === "none") {
        box4.style.display = "none"
        box3.style.display = "none";
        box2.style.display = "none";
        box1.style.display = "block";
    } else {
        box3.style.display = "none";
        box2.style.display = "none";
        box1.style.display = "none";
        box4.style.display = "block"
    }
}

