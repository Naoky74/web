document.getElementById("btnEjecutar").addEventListener("click", function () {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);

    let matrizOriginal = [];
    for (let i = 0; i < filas; i++) {
        matrizOriginal.push([]);
        for (let j = 0; j < columnas; j++) {
            const inputValue = parseFloat(document.querySelector(`.row-${i + 1} .col-${j + 1}`).value);
            matrizOriginal[i].push(inputValue);
        }
    }

    realizarOperaciones(matrizOriginal);
});

function generarInputsMatriz() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
    const matrixInput = document.getElementById('matrix-input');

    matrixInput.innerHTML = '';

    for (let i = 0; i < filas; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add(`row-${i + 1}`);

        for (let j = 0; j < columnas; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add(`col-${j + 1}`);
            input.autocomplete = 'off';
            rowDiv.appendChild(input);
        }

        matrixInput.appendChild(rowDiv);
    }
}

document.getElementById('filas').addEventListener('input', generarInputsMatriz);
document.getElementById('columnas').addEventListener('input', generarInputsMatriz);

generarInputsMatriz();

function realizarOperaciones(matrizOriginal) {
    let resultados = '';

    // Suma de las filas
    for (let i = 0; i < matrizOriginal.length; i++) {
        let sumaFila = matrizOriginal[i].reduce((acc, val) => acc + val, 0);
        resultados += `La suma de la fila ${i + 1} es: ${sumaFila}\n`;
    }

    // Suma de lass columnas
    for (let j = 0; j < matrizOriginal[0].length; j++) {
        let sumaColumna = matrizOriginal.reduce((acc, val) => acc + val[j], 0);
        resultados += `La suma de la columna ${j + 1} es: ${sumaColumna}\n`;
    }

    // Suma de las diagonales
    let sumaDiagonal1 = 0;
    let minDimension = Math.min(matrizOriginal.length, matrizOriginal[0].length);
    for (let i = 0; i < minDimension; i++) {
        sumaDiagonal1 += matrizOriginal[i][i];
    }
    resultados += `La suma de la diagonal principal es: ${sumaDiagonal1}\n`;

   
    let sumaDiagonal2 = 0;
    for (let i = 0; i < minDimension; i++) {
        sumaDiagonal2 += matrizOriginal[i][matrizOriginal[0].length - i - 1];
    }
    resultados += `La suma de la diagonal secundaria es: ${sumaDiagonal2}\n`;

    // Matriz transpuesta
    let matrizTranspuesta = [];
    for (let j = 0; j < matrizOriginal[0].length; j++) {
        matrizTranspuesta.push([]);
        for (let i = 0; i < matrizOriginal.length; i++) {
            matrizTranspuesta[j].push(matrizOriginal[i][j]);
        }
    }
    resultados += `La matriz traspuesta es: \n${JSON.stringify(matrizTranspuesta)}\n`;

    // Matriz Justicia Divina
    let matrizJusticiaDivina = [];
    for (let i = matrizOriginal.length - 1; i >= 0; i--) {
        matrizJusticiaDivina.push([]);
        for (let j = matrizOriginal[0].length - 1; j >= 0; j--) {
            matrizJusticiaDivina[matrizOriginal.length - i - 1].push(matrizOriginal[i][j]);
        }
    }
    resultados += `La matriz Justicia Divina es: \n${JSON.stringify(matrizJusticiaDivina)}\n`;

    alert(resultados);
}
