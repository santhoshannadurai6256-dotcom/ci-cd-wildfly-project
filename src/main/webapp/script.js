document.addEventListener("DOMContentLoaded", function() {

    const status = document.querySelector(".success");
    let dots = 0;

    setInterval(() => {
        dots = (dots + 1) % 4;
        status.textContent = "✅ Application is running" + ".".repeat(dots);
    }, 600);

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.boxShadow = "0 0 15px #00ffcc";
        });

        btn.addEventListener("mouseout", () => {
            btn.style.boxShadow = "none";
        });
    });

});
