document.getElementById('rows1').addEventListener('input', generarInputsMatriz1);
document.getElementById('cols1').addEventListener('input', generarInputsMatriz1);
document.getElementById('rows2').addEventListener('input', generarInputsMatriz2);
document.getElementById('cols2').addEventListener('input', generarInputsMatriz2);
document.getElementById("Multiplicacion").addEventListener("click", function () {
    const matriz1 = obtenerMatriz(1);
    const matriz2 = obtenerMatriz(2);
    const resultado = multiplicarMatrices(matriz1, matriz2);
    mostrarResultado(resultado);
});

function generarInputsMatriz1() {
    const rows1 = parseInt(document.getElementById('rows1').value);
    const cols1 = parseInt(document.getElementById('cols1').value);
    const matrixInput1 = document.getElementById('matrix1-input');

    matrixInput1.innerHTML = ''; 

    for (let i = 0; i < rows1; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(`row1-${i + 1}`);

        for (let j = 0; j < cols1; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add(`col1-${j + 1}`);
            input.autocomplete = 'off';
            rowDiv.appendChild(input);
        }

        matrixInput1.appendChild(rowDiv);
    }
}

function generarInputsMatriz2() {
    const rows2 = parseInt(document.getElementById('rows2').value);
    const cols2 = parseInt(document.getElementById('cols2').value);
    const matrixInput2 = document.getElementById('matrix2-input');

    matrixInput2.innerHTML = ''; 

    for (let i = 0; i < rows2; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(`row2-${i + 1}`);

        for (let j = 0; j < cols2; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add(`col2-${j + 1}`);
            input.autocomplete = 'off';
            rowDiv.appendChild(input);
        }

        matrixInput2.appendChild(rowDiv);
    }
}

function obtenerMatriz(num) {
    const rows = parseInt(document.getElementById(`rows${num}`).value);
    const cols = parseInt(document.getElementById(`cols${num}`).value);
    const matriz = [];

    for (let i = 0; i < rows; i++) {
        matriz.push([]);
        for (let j = 0; j < cols; j++) {
            const inputValue = parseFloat(document.querySelector(`.row${num}-${i + 1} .col${num}-${j + 1}`).value);
            matriz[i].push(inputValue);
        }
    }

    return matriz;
}

function multiplicarMatrices(matriz1, matriz2) {
    const cols1 = matriz1[0].length;
    const rows2 = matriz2.length;
    const cols2 = matriz2[0].length;
    const resultado = [];

    if (cols1 !== rows2) {
        alert("No se pueden multiplicar estas matrices.");
        return null;
    }

    for (let i = 0; i < matriz1.length; i++) {
        resultado.push([]);
        for (let j = 0; j < cols2; j++) {
            let sum = 0;
            for (let k = 0; k < cols1; k++) {
                sum += matriz1[i][k] * matriz2[k][j];
            }
            resultado[i].push(sum);
        }
    }

    return resultado;
}

function mostrarResultado(resultado) {
    const resultadosDiv = document.querySelector('.resultados');
    resultadosDiv.innerHTML = '';

    if (resultado === null) {
        return;
    }

    const resultadoHeader = document.createElement('h3');
    resultadoHeader.textContent = 'Resultado de la Multiplicación:';
    resultadosDiv.appendChild(resultadoHeader);

    const resultadoTable = document.createElement('table');
    for (let i = 0; i < resultado.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < resultado[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = resultado[i][j];
            row.appendChild(cell);
        }
        resultadoTable.appendChild(row);
    }
    resultadosDiv.appendChild(resultadoTable);
}
