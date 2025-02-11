const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, index) => `<span style="transition-delay: ${index * 150}ms">${letter}</span>`)
        .join("");
})