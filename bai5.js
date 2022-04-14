const numbers = [1, 2, 3, 4];

function doubleEvenNumber(numbers) {
    return numbers.map((number) => number % 2 == 0 ? number * 2 : number);
}

function sum(numbers) {
    const a = doubleEvenNumber(numbers);
    return a.reduce((s, e) => s + e);
}

console.log(sum(numbers))