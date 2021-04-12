const faq = document.querySelector(".faq");
const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active");
    });
})