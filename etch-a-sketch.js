const container = document.getElementById("container");
const gridSizeInput = document.getElementById("grid-size");

document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

function createGrid(size) {
    container.innerHTML = ""; 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell);
    }
}

function changeGridSize() {
    let newSize = parseInt(gridSizeInput.value);
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a size between 1 and 100");
    }
}
