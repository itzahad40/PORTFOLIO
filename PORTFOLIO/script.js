
document.addEventListener("DOMContentLoaded", function () {
    const portfolio = document.querySelector(".portfolio-content");
    if (portfolio) {
        portfolio.style.opacity = 0;
        portfolio.style.transition = "opacity 1s ease";
        setTimeout(() => {
            portfolio.style.opacity = 1;
        }, 200);
    }

    console.log(
        "%cPortfolio loaded successfully.",
        "color: #2e86de; font-size: 16px; font-weight: bold;"
    );
});
