function clickbell() {
    var notification = document.getElementById("notification");
    if (notification.style.display === "flex") {
        notification.style.display = "none";
    } else {
        notification.style.display = "flex";
    }
}