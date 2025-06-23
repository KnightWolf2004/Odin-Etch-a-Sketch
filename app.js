const workspace = document.querySelector(".workspace");
const button = document.querySelector(".submit");
const input = document.querySelector("input");
const clear = document.querySelector(".clear");

function makenewcanvas(size = 16) {
    workspace.replaceChildren();
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        // row.classList.add("canvas");
        for (let j = 0; j < size; j++) {
            const col = document.createElement("div");
            col.classList.add("column");
            // col.classList.add("canvas");
            col.id = [String(i) + ' ' + String(j)];
            row.appendChild(col);
        }
        workspace.appendChild(row);
    }
}

workspace.addEventListener("mouseover", (event) => {
    let target = event.target.id;
    // console.log(target);
    if (target.length > 0) {
        const block = document.getElementById(target);
        // console.log(block.style.cssText.length);
        if (block.style.cssText.length === 0) {
            block.setAttribute("style", `background: rgba(${Math.random() * (256 - 0) + 0},${Math.random() * (256 - 0) + 0},${Math.random() * (256 - 0) + 0}); opacity:0.1`);
            block.classList.add("visited");
        } else {
            // console.log(block.style.opacity);
            const opacityval = Number(block.style.opacity);
            if (opacityval < 1) {
                block.style.opacity = opacityval + 0.1;
            }
        }
    }
});


input.addEventListener("input", () => {
    let msg = document.querySelector(".invalid-input");
    msg.textContent = "Enter a number between 4 and 100";

    let square = document.querySelector(".square");
    square.textContent = `x ${input.value}`;
});

button.addEventListener("click", () => {
    if (Number(input.value) >= 4 && Number(input.value) <= 100) {
        let msg = document.querySelector(".invalid-input");
        msg.textContent = "";
        makenewcanvas(Number(input.value));
    } else {
        let msg = document.querySelector(".invalid-input");
        msg.textContent = "Please enter a valid number between 4 and 100";
    }
});

clear.addEventListener("click", () => {
    const children = document.querySelectorAll(".visited");
    // console.log(children);
    children.forEach(ele => {
        ele.classList.remove("visited");
        // console.log(ele.style.cssText);
        ele.style.cssText = "";
    })
})


makenewcanvas();