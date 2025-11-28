import style from "./css/index.scss";
let settings = [];
settings = JSON.parse(localStorage.getItem("settings"));

function refreshDataFromLocalStorage() {
    let sellectedX = document.getElementById("x-matrix");
    if (settings === null) {
        return false;
    }
    let setXValue = settings.columns;
    if (setXValue) {
        sellectedX.value = setXValue;
    } else sellectedX.value = 5;
    let sellectedY = document.getElementById("y-matrix");
    let setYValue = settings.rows;
    if (setYValue) {
        sellectedY.value = setYValue;
    } else sellectedY.value = 5;
    let sellectedOper = document.getElementById("select-operation");
    let setOperValue = settings.operation;
    if (setOperValue) {
        sellectedOper.value = setOperValue;
    } else sellectedOper.value = "addition";
    let sellectedDiff = document.getElementById("difficult-level");
    let setDiffValue = settings.difficulty;
    if (setDiffValue) {
        sellectedDiff.value = setDiffValue;
    } else sellectedDiff.value = "standard";
}


let drawedColStd = [];
let colArr = [];
function drawColStd() {
    let operation = document.getElementById("select-operation");
    let difficult = document.getElementById("difficult-level");
    if (operation.value == "addition" && difficult.value == "standard") {
        for (let i = 1; i < 26; i++) {
            colArr.push(i);
        }
    }
    if (operation.value == "multiplication" && difficult.value == "standard") {
        for (let i = 1; i < 11; i++) {
            colArr.push(i);
        }
    }
    if (operation.value == "subtraction" && difficult.value == "standard") {
        for (let i = 1; i < 26; i++) {
            colArr.push(i);
        }
    }
    if (operation.value == "division" && difficult.value == "standard") {
        for (let i = 1; i < 101; i++) {
            colArr.push(i);
        }
    }
    let xMatrix = document.getElementById("x-matrix").value;
    for (let i = 0; i < xMatrix; i++) {
        let drawedIndex = Math.floor(Math.random() * colArr.length);
        drawedColStd.push(colArr[drawedIndex]);
        colArr.splice(drawedIndex, 1);
    }
}

let drawedRowStd = [];
let rowArr = [];
function drawRowStd() {
    let operation = document.getElementById("select-operation");
    let difficult = document.getElementById("difficult-level");
    let xMatrix = document.getElementById("x-matrix").value;
    if (operation.value == "addition" && difficult.value == "standard") {
        for (let i = 1; i < 51; i++) {
            rowArr.push(i);
        }
    }
    if (operation.value == "multiplication" && difficult.value == "standard") {
        for (let i = 1; i < 11; i++) {
            rowArr.push(i);
        }
    }
    if (operation.value == "subtraction" && difficult.value == "standard") {
        for (let i = 1; i < 51; i++) {
            rowArr.push(i);
        }
    }
    if (operation.value == "division" && difficult.value == "standard") {
        for (let i = 1; i < 11; i++) {
            rowArr.push(i);
        }
    }
    let yMatrix = document.getElementById("y-matrix").value;
    for (let i = 0; i < yMatrix; i++) {
        for (let j = 0; j < xMatrix; j++) {
            let drawedIndex = Math.floor(Math.random() * rowArr.length);

            // console.log(drawedColStd[i]," || ",rowArr[drawedIndex]);
            // console.log(drawedRowStd);
            drawedRowStd.push(rowArr[drawedIndex]);
            // console.log(drawedRowStd);
            rowArr.splice(drawedIndex, 1);
            // console.log(rowArr);
        }
    }
}

function createMatrix() {
    drawedColStd = [];
    drawedRowStd = [];
    colArr = [];
    rowArr = [];
    drawRowStd();
    drawColStd();
    let matrixCols = document.getElementById("matrix-thead");
    let matrixRows = document.getElementById("matrix-tbody");
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    let matrixOperation = document.getElementById("select-operation").value;
    let matrixDifficulty = document.getElementById("difficult-level").value;
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
            <th class="matrix-cols-${i}" id="matrix-col-${i}">${drawedColStd[i]}</th>
        `
    }
    for (let i = 0; i < yMatrix; i++) {
        matrixRows.innerHTML += `
            <th class="matrix-rows-${i}" id="matrix-data-${i}">${drawedRowStd[i]}</th>
        `
    }
    for (let i = 0; i < yMatrix; i++) {
        let matrixData = document.getElementById(`matrix-data-${i}`).parentElement;
        for (let j = 0; j < xMatrix; j++) {
            matrixData.innerHTML += `
                <td class="matrix-data" id="matrix-data-${i}-${j}">
                    <input type="number" class="matrix-input" name="value-${i}-${j}" id="value-${i}-${j}" required />
                </td>
            `
        };
    }
    coloredSelectedInput();
}

function warningDisplay() {
    let warningBorder = document.getElementById("additional-informations");
    let subtractionWarning = document.getElementById("subtraction-warning");
    let divisionWarning = document.getElementById("division-warning");
    let currentOperation = document.getElementById("select-operation");
    if (currentOperation.value == "subtraction") {
        warningBorder.style.display = "block";
        subtractionWarning.style.display = "inline";
        divisionWarning.style.display = "none";
    }
    if (currentOperation.value == "division") {
        warningBorder.style.display = "block";
        subtractionWarning.style.display = "none";
        divisionWarning.style.display = "inline";
    }
    if (currentOperation.value == "addition" || currentOperation.value == "multiplication") {
        warningBorder.style.display = "none";
    }
}

function clearMatrix() {
    let matrixCols = document.getElementById("matrix-thead");
    let matrixRows = document.getElementById("matrix-tbody");
    matrixCols.innerHTML = "";
    matrixRows.innerHTML = "";
}

let colsValueChanged = document.getElementById("x-matrix");
let rowsValueChanged = document.getElementById("y-matrix");
let operationValueChanged = document.getElementById("select-operation");
let difficultLevelChanged = document.getElementById("difficult-level");

colsValueChanged.addEventListener("change", () => {
    settings = {
        "columns": colsValueChanged.value,
        "rows": rowsValueChanged.value,
        "operation": operationValueChanged.value,
        "difficulty": difficultLevelChanged.value
    }
    localStorage.setItem("settings", JSON.stringify(settings));
    clearMatrix();
    createMatrix();
})

rowsValueChanged.addEventListener("change", () => {
    settings = {
        "columns": colsValueChanged.value,
        "rows": rowsValueChanged.value,
        "operation": operationValueChanged.value,
        "difficulty": difficultLevelChanged.value
    }
    localStorage.setItem("settings", JSON.stringify(settings));
    clearMatrix();
    createMatrix();
})

operationValueChanged.addEventListener("change", () => {
    settings = {
        "columns": colsValueChanged.value,
        "rows": rowsValueChanged.value,
        "operation": operationValueChanged.value,
        "difficulty": difficultLevelChanged.value
    }
    localStorage.setItem("settings", JSON.stringify(settings));
    clearMatrix();
    createMatrix();
    warningDisplay();
})

difficultLevelChanged.addEventListener("change", () => {
    settings = {
        "columns": colsValueChanged.value,
        "rows": rowsValueChanged.value,
        "operation": operationValueChanged.value,
        "difficulty": difficultLevelChanged.value
    }
    localStorage.setItem("settings", JSON.stringify(settings));
    clearMatrix();
    createMatrix();
})

function validate() {
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    let operation = document.getElementById("select-operation").value;
    for (let i = 0; i < yMatrix; i++) {
        for (let j = 0; j < xMatrix; j++) {
            let summary = document.getElementById(`value-${i}-${j}`);
            if (operation == "addition") {
                if (summary.value != "" && summary.value == drawedRowStd[i] + drawedColStd[j]) {
                    summary.classList.add("validation-correct");
                    summary.classList.remove("validation-incorrect");

                }
                else {
                    summary.classList.add("validation-incorrect");
                }
            }
            if (operation == "multiplication") {
                if (summary.value != "" && summary.value == drawedRowStd[i] * drawedColStd[j]) {
                    summary.classList.add("validation-correct");
                    summary.classList.remove("validation-incorrect");
                }
                else {
                    summary.classList.add("validation-incorrect");
                }
            }
            if (operation == "subtraction") {
                if (summary.value != "" && summary.value == drawedColStd[j] - drawedRowStd[i]) {
                    summary.classList.add("validation-correct");
                    summary.classList.remove("validation-incorrect");
                }
                else {
                    summary.classList.add("validation-incorrect");
                }
            }
            if (operation == "division") {
                if (summary.value != "" && summary.value == drawedColStd[j] / drawedRowStd[i]) {
                    summary.classList.add("validation-correct");
                    summary.classList.remove("validation-incorrect");
                }
                else {
                    summary.classList.add("validation-incorrect");
                }
            }
        }
    }
}

let validateBtnChk = document.getElementById("check-result");
validateBtnChk.addEventListener("click", () => {
    if (checkIsAllFilled() === true) {
        validate();
    }
})

function coloredSelectedInput() {
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    let matrix = document.querySelectorAll("input");
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].addEventListener("focus", (value) => {
            xMatrix = value.target.id.substring(6, 7);
            yMatrix = value.target.id.substring(8, 9);
            let x = document.getElementById(`matrix-data-${xMatrix}`);
            x.classList.add("matrix-coordinates", "focus-numbers");
            let y = document.getElementById(`matrix-col-${yMatrix}`);
            y.classList.add("matrix-coordinates", "focus-numbers");
        });
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].addEventListener("focusout", (value) => {
            xMatrix = value.target.id.substring(6, 7);
            yMatrix = value.target.id.substring(8, 9);
            let x = document.getElementById(`matrix-data-${xMatrix}`);
            x.classList.remove("matrix-coordinates", "focus-numbers");
            let y = document.getElementById(`matrix-col-${yMatrix}`);
            y.classList.remove("matrix-coordinates", "focus-numbers");        
        })
    }
}

function checkIsAllFilled() {
let checkIsAllFilled = document.querySelectorAll("input");
let isAllFilled = [];
let overlay = document.getElementById("overlay");
let inputsWarning = document.getElementById("inputs-warning");
let fillAllInputs = document.getElementById("fill-all-inputs");
    for (let i = 0; i < checkIsAllFilled.length; i++) {
        if (checkIsAllFilled[i].value != "") {
            isAllFilled.push(i);
        }
    }
    if (isAllFilled.length != checkIsAllFilled.length) {
        overlay.classList.add("overlay");
        inputsWarning.classList.add("inputs-warning");
        fillAllInputs.style.display = "inline";
        setTimeout(function() {
            overlay.classList.remove("overlay");
            inputsWarning.classList.remove("inputs-warning");
            fillAllInputs.style.display = "none";
        }, 1500);
    }
    else return true;
}


//----------auto-start----------//
document.addEventListener('DOMContentLoaded', () => {
    refreshDataFromLocalStorage();
    createMatrix();
})

//---------------temporary-working-space---------------//
