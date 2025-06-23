const workspace = document.querySelector(".workspace");
const button = document.querySelector(".submit");
const input = document.querySelector("input");
const clear = document.querySelector(".clear");

//Make a new canvas on opening the site the first time and when user inputs a value
function makenewcanvas(size = 16) {
    workspace.replaceChildren();
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const col = document.createElement("div");
            col.classList.add("column");
            row.appendChild(col);
        }
        workspace.appendChild(row);
    }
}

//Logic for coloring the div squares when mouse enters them
//if it is a new square-> give it a random color and opacity of 0.1 and add class 'visited'
//if it is previously visited-> increase opacity by 0.1
workspace.addEventListener("mouseover", (event) => {
    const block = event.target;
    if (block.classList.contains("column")) {
        if (!block.classList.contains("visited")) {
            block.style.background = `rgba(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
            block.style.opacity = 0.1;
            block.classList.add("visited");
        } else {
            let opacityVal = parseFloat(block.style.opacity);
            if (opacityVal < 1) {
                block.style.opacity = opacityVal + 0.1;
            }
        }
    }
});

//Will update the content of class 'sqaure' in real-time according to user input
input.addEventListener("input", () => {
    let msg = document.querySelector(".invalid-input");
    msg.textContent = "Enter a number between 4 and 100";

    let square = document.querySelector(".square");
    square.textContent = `x ${input.value}`;
});

//will check if value input by user is correct, then call the makenewcanvas function
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

//will clear the canvas
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