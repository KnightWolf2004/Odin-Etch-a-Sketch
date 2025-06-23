const workspace = document.querySelector(".workspace");


for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("canvas");
    for (let j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.classList.add("column");
        col.classList.add("canvas");
        row.appendChild(col);
    }
    workspace.appendChild(row);
}