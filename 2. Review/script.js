let rate = document.getElementById("rate");
let main = document.getElementById("container");


function clickBtn() {
    if (rate.style.display === "none") {
        main.style.display = "none";
        rate.style.display = "flex";
    } else {
        main.style.display ="flex";
        rate.style.display = "none";   
    }
}

function clickBack() {
    if (rate.style.display === "flex") {
        main.style.display = "flex";
        rate.style.display = "none";
    } else {
        main.style.display ="none"
        rate.style.display = "flex";   
    }

}

let stars = document.querySelectorAll("#star1, #star2, #star3, #star4, #star5");

stars.forEach(function(star, index) {
    star.addEventListener("click", function() {
        clickRate(index);
    });
});

function clickRate(clickedStarIndex) {
    for (let i = 0; i <= clickedStarIndex; i++) {
        stars[i].style.color = "yellow";
    }
}



