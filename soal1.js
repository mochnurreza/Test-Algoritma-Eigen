const kata = "NEGIE1";
const last = kata.substring(kata.length - 1);
const susun =kata.substring(0,5).split("").reverse().join("");
const result = susun + last;
console.log(result);
