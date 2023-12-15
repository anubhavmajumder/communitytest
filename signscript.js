document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");

    // Show overlay
    overlay.classList.remove("hidden");

    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Prevent scrolling on the overlay itself
    overlay.addEventListener("wheel", function (e) {
        e.preventDefault();
    });
});

function staySignedOut() {
    // Your logic for "Stay Signed Out" goes here
    closeOverlay();
}

function signIn() {
    // Your sign-in logic goes here
    window.location="login/index.html"
    closeOverlay();
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");

    // Enable scrolling
    document.body.style.overflow = "visible";
}
