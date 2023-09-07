
let isRunning = false;
let intervalId;
let minutes = 0;
let seconds = 0;

function accept() {
    const displayTimer = document.getElementById("timer");
    const displayCalling = document.getElementById("calling");
    const displayAccept = document.getElementById("accept");

    displayCalling.style.display = "none";
    displayTimer.style.display = "block";
    displayAccept.style.display ="none";

    if (!isRunning) {
        intervalId = setInterval(updateStopwatch, 1000); // Setiap 1 detik
        isRunning = true;
    }
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("minutes").textContent = padNumber(minutes);
    document.getElementById("seconds").textContent = padNumber(seconds);
}

function padNumber(number) {
    return number.toString().padStart(2, "0");
}


function decline() {
    const phoneElement = document.getElementById("phone");
    phoneElement.style.display = "none";
}


const hand = document.getElementById("hand");

function rotateHand(degrees) {
    hand.style.transform = `rotate(${degrees}deg)`;
}

// Contoh penggunaan untuk menggerakkan tangan ke sudut tertentu
rotateHand(250 - 163); // Menggerakkan tangan ke sudut 90 derajat

// Anda dapat memanggil rotateHand(degrees) dengan nilai degrees yang berbeda untuk mengubah posisi tangan.
