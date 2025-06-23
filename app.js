const workspace = document.querySelector(".workspace");


for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("canvas");
    for (let j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.classList.add("column");
        col.classList.add("canvas");
        col.id = [String(i) + ' ' + String(j)];
        row.appendChild(col);
    }
    workspace.appendChild(row);
}

workspace.addEventListener("mouseover", (event) => {
    let target = event.target.id;
    // console.log(target);
    if (target.length > 0) {
        const block = document.getElementById(target);
        // console.log(block.style.cssText.length);
        if (block.style.cssText.length === 0) {
            block.setAttribute("style", `background: rgba(${Math.random() * (256 - 0) + 0},${Math.random() * (256 - 0) + 0},${Math.random() * (256 - 0) + 0}); opacity:0.1`);
        } else {
            // console.log(block.style.opacity);
            const opacityval = Number(block.style.opacity);
            if (opacityval < 1) {
                block.style.opacity = opacityval + 0.1;
            }
        }
    }
});