const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    if(btn.innerHTML === `<span class="fa fa-times"></span>`) {
        btn.innerHTML = `<span class="fa fa-search"></span>`;
    } else {
        btn.innerHTML = `<span class="fa fa-times"></span>`;
    }
    input.focus();
})