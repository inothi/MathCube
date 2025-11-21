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
            <th class="matrix-rows" id="matrix-data-${i + 1}">${i + 1}</th>
        `
    }
    for (let i = 0; i < xMatrix; i++) {
        let matrixData = document.getElementById(`matrix-data-${i + 1}`).parentElement;
        for (let j = 0; j < yMatrix; j++) {
            matrixData.innerHTML += `
                <td class="matrix-data" id="matrix-data-${i + 1}-${j + 1}"></td>
            `
        };
    }
}())

let i = 3;
let testy = document.getElementById(`matrix-data-${i}`);
console.log(testy);

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
                <th class="matrix-oper">−</th>
            `
        };
        if (matrixOperation == "multiplication") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">×</th>
            `
        };
        if (matrixOperation == "division") {
                matrixCols.innerHTML += `
                <th class="matrix-oper">÷</th>
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
            <th class="matrix-rows" id="matrix-data-${i + 1}">${i + 1}</th>
        `
    }
    for (let i = 0; i < yMatrix; i++) {
        let matrixData = document.getElementById(`matrix-data-${i + 1}`).parentElement;
        for (let j = 0; j < xMatrix; j++) {
            matrixData.innerHTML += `
                <td class="matrix-data" id="matrix-data-${i + 1}-${j + 1}"></td>
            `
        };
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

let operationValueChanged = document.getElementById("select-operation");
operationValueChanged.addEventListener("click", () => {
    clearMatrix();
    createMatrix();
})

let difficultLevelChanged = document.getElementById("difficult-level");
difficultLevelChanged.addEventListener("click", () => {
    clearMatrix();
    createMatrix();
})