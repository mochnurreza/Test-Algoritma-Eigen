const input = ['xc', 'dz', 'bbb', 'dz']  
const query = ['bbb', 'ac', 'dz']

const hasil = (input, query) => {
    let hasil = [];
    for (let i = 0; i < query.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (query[i] === input[j]) {
                count++;
            }
        }
        hasil.push(count);
    }
    return hasil;
}
console.log(hasil(input, query));





