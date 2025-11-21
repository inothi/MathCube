import style from "./css/index.scss";

(function createMatrix() {
    let matrixCols = document.getElementById("matrix-thead");
    let matrixRows = document.getElementById("matrix-tbody");
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    let matrixOperation = document.getElementById("select-operation").value;
    for (let i = 0; i < 1; i++) {
        if (matrixOperation == "addition") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">+</th>
            `
        };
        if (matrixOperation == "subtraction") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">-</th>
            `
        };
        if (matrixOperation == "multiplication") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">x</th>
            `
        };
        if (matrixOperation == "division") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">/</th>
            `
        };
    }
    for (let i = 0; i < xMatrix; i++) {
        matrixCols.innerHTML += `
            <th class="matrix-cols">${i + 1}</th>
        `
    }
    for (let i = 0; i < yMatrix; i++) {
        matrixRows.innerHTML += `
            <th class="matrix-rows">${i + 1}</th>
        `
    }
}())

function createMatrix() {
    let matrixCols = document.getElementById("matrix-thead");
    let matrixRows = document.getElementById("matrix-tbody");
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    let matrixOperation = document.getElementById("select-operation").value;
    for (let i = 0; i < 1; i++) {
        if (matrixOperation == "addition") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">+</th>
            `
        };
        if (matrixOperation == "subtraction") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">-</th>
            `
        };
        if (matrixOperation == "multiplication") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">x</th>
            `
        };
        if (matrixOperation == "division") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">/</th>
            `
        };
    }
    for (let i = 0; i < xMatrix; i++) {
        matrixCols.innerHTML += `
            <th class="matrix-cols">${i + 1}</th>
        `
    }
    for (let i = 0; i < yMatrix; i++) {
        matrixRows.innerHTML += `
            <th class="matrix-rows">${i + 1}</th>
        `
    }
}

function clearMatrix() {
    let matrixCols = document.getElementById("matrix-thead");
    let matrixRows = document.getElementById("matrix-tbody");
    matrixCols.innerHTML = "";
    matrixRows.innerHTML = "";
}

let colsValueChanged = document.getElementById("x-matrix");
colsValueChanged.addEventListener("click", () => {
    clearMatrix();
    createMatrix();
})

let rowsValueChanged = document.getElementById("y-matrix");
rowsValueChanged.addEventListener("click", () => {
    clearMatrix();
    createMatrix();
})