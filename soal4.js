const Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const hasilMatriks = (array) => {
    let diagonal1 = 0;
    // ambil array index terakhir dari array
    let diagonal2 = array[0][array[0].length - 1];
    // looping array
    for (let i = 0; i < array.length; i++) {
        // looping array index
        diagonal1 += array[i][i];
        diagonal2 += array[i][array[i].length - 1 - i];
        }
    return diagonal1 - diagonal2;
}
console.log('Maka Hasilnya Adalah ',hasilMatriks(Matrix));