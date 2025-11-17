const main = document.querySelector("#main");
const button = document.querySelector("button")


for (let i = 0; i < 256; i++) {
    main.appendChild(document.createElement("div"));
}

document.addEventListener(("mouseover"), (e)=>{
    if (e.target.parentNode === main) {
        e.target.style.backgroundColor = "#000000ff";
    }
})

document.addEventListener("click", (e)=>{
    if (e.target === button) {
        const child = main.children;
        for (let i = 0; i < 256; i++) {
            child[i].style.backgroundColor = "#ff0000";
        }
    }
})