const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getDate() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="" />`;
    title.innerHTML = "Lorem ipsum dolor sit amet.";
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, laudantium.`;
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="">`;
    name.innerHTML = "John Doe";
    date.innerHTML = "Oct 18, 2020";

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));
}

setTimeout(getDate, 2500);