document.addEventListener("DOMContentLoaded", function () {

    const modalElement = document.getElementById("greetingModal");
    const greetingTitle = document.getElementById("greetingTitle");

    if (!modalElement || !greetingTitle) return;

    if (!sessionStorage.getItem("popupShown")) {

        const hour = new Date().getHours();
        let greeting = "";

        if (hour >= 5 && hour <= 11) {
            greeting = "Selamat Pagi ☀️";
        } else if (hour >= 12 && hour <= 14) {
            greeting = "Selamat Siang 🌤️";
        } else if (hour >= 15 && hour <= 17) {
            greeting = "Selamat Sore 🌆";
        } else {
            greeting = "Selamat Malam 🌙";
        }

        greetingTitle.textContent = greeting;
        new bootstrap.Modal(modalElement).show();
        sessionStorage.setItem("popupShown", "true");
    }
    

});

