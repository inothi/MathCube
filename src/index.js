import style from "./css/index.scss";

let summaryArray = JSON.parse(localStorage.getItem("summaryArray"));

let drawedColStd = [];
(function drawColStd() {
    let operation = document.getElementById("select-operation");
    let difficult = document.getElementById("difficult-level");
    let colArr = [];
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
    let xMatrix = document.getElementById("x-matrix").value;
    for (let i = 0; i < xMatrix; i++) {
        let drawedIndex = Math.floor(Math.random() * colArr.length);
        drawedColStd.push(colArr[drawedIndex]);
        colArr.splice(drawedIndex, 1);
    }
}());

function drawColStd() {
    let operation = document.getElementById("select-operation");
    let difficult = document.getElementById("difficult-level");
    let colArr = [];
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
    let xMatrix = document.getElementById("x-matrix").value;
    for (let i = 0; i < xMatrix; i++) {
        let drawedIndex = Math.floor(Math.random() * colArr.length);
        drawedColStd.push(colArr[drawedIndex]);
        colArr.splice(drawedIndex, 1);
    }
}

let drawedRowStd = [];
(function drawColStd() {
    let colArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let yMatrix = document.getElementById("y-matrix").value;
    for (let i = 0; i < yMatrix; i++) {
        let drawedIndex = Math.floor(Math.random() * colArr.length);
        drawedRowStd.push(colArr[drawedIndex]);
        colArr.splice(drawedIndex, 1);
    }
}());

function drawRowStd() {
    let colArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let yMatrix = document.getElementById("y-matrix").value;
    for (let i = 0; i < yMatrix; i++) {
        let drawedIndex = Math.floor(Math.random() * colArr.length);
        drawedRowStd.push(colArr[drawedIndex]);
        colArr.splice(drawedIndex, 1);
    }
}

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
            <th class="matrix-cols-${i}" id="matrix-col-${i}">${drawedColStd[i]}</th>
        `
    }
    for (let i = 0; i < yMatrix; i++) {
        matrixRows.innerHTML += `
            <th class="matrix-rows-${i}" id="matrix-data-${i}">${drawedRowStd[i]}</th>
        `
    }
    for (let i = 0; i < xMatrix; i++) {
        let matrixData = document.getElementById(`matrix-data-${i}`).parentElement;
        for (let j = 0; j < yMatrix; j++) {
            matrixData.innerHTML += `
                <td class="matrix-data" id="matrix-data-${i}-${j}">
                    <input type="number" class="matrix-input" name="value-${i}-${j}" id="value-${i}-${j}" required />
                </td>
            `
        };
    }
    coloredSelectedInput();
}());

function createMatrix() {
    drawedColStd = [];
    drawedRowStd = [];
    drawColStd();
    drawRowStd();
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
}

function warningDisplay() {
    let warningBorder = document.getElementById("additional-informations");
    let subtractionWarning = document.getElementById("subtraction-warning");
    let divisionWarning = document.getElementById("division-warning");
    let currentOperation = document.getElementById("select-operation");
    console.log(currentOperation.value);
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
colsValueChanged.addEventListener("change", () => {
    clearMatrix();
    createMatrix();
    coloredSelectedInput();
})

let rowsValueChanged = document.getElementById("y-matrix");
rowsValueChanged.addEventListener("change", () => {
    clearMatrix();
    createMatrix();
    coloredSelectedInput();
})

let operationValueChanged = document.getElementById("select-operation");
operationValueChanged.addEventListener("change", () => {
    clearMatrix();
    createMatrix();
    coloredSelectedInput();
    warningDisplay();
})

let difficultLevelChanged = document.getElementById("difficult-level");
difficultLevelChanged.addEventListener("change", () => {
    clearMatrix();
    createMatrix();
    coloredSelectedInput();
})

function validate() {
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    console.log(xMatrix);
    console.log(yMatrix);
    let operation = document.getElementById("select-operation").value;
    console.log(operation);
    for (let i = 0; i < yMatrix; i++) {
        for (let j = 0; j < xMatrix; j++) {
            let summary = document.getElementById(`value-${i}-${j}`);
            console.log(summary.value);
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
    validate();
})

function coloredSelectedInput() {
    let xMatrix = document.getElementById("x-matrix").value;
    let yMatrix = document.getElementById("y-matrix").value;
    let matrix = document.querySelectorAll("input");
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].addEventListener("focus", (value) => {
            xMatrix = value.target.id.substring(6, 7);
            yMatrix = value.target.id.substring(8, 9);
            console.log("x: ",xMatrix," | y: ",yMatrix);
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
            console.log("x: ",xMatrix," | y: ",yMatrix);
            let x = document.getElementById(`matrix-data-${xMatrix}`);
            x.classList.remove("matrix-coordinates", "focus-numbers");
            let y = document.getElementById(`matrix-col-${yMatrix}`);
            y.classList.remove("matrix-coordinates", "focus-numbers");        
        })
    }
}


//---------------temporary-working-space---------------//