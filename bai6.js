const numbers = [1, 2, 3, 4];

function doubleOddNumberAndDivEvenNumber(numbers) {
    return numbers.map((number) => number % 2 == 0 ? number / 2 : number * 2);
}

function sum(numbers) {
    const a = doubleOddNumberAndDivEvenNumber(numbers);
    return a.reduce((s, e) => s + e);
}

console.log(sum(numbers))