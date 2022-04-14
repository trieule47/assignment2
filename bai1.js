a = [1, 2, 3, 4];

function doubleEvenNumber(numbers) {
    return numbers.map((number) => (number % 2 == 0) ? number * 2 : number)
}

console.log(doubleEvenNumber(a));