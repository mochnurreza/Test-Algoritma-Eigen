const kalimat = "Saya sangat senang mengerjakan soal algoritma";

const longestWord = (kalimat) => {
    let arr = kalimat.split(' ');
    let longest = 0;
    let word = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
            word = arr[i];
        }
    }
    return word;
}
console.log(longestWord(kalimat));