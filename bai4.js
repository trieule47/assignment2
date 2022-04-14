const animals = [
    {
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "medium",
        weight: 10
    },
    {
        name: "elephant",
        size: "big",
        weight: 5000
    }
]

function getAnimalHaveLetterTInName(arr) {
    return arr.filter((animal) => animal.name.includes('t'));
}

function convertInfoToString(arr) {
    const string = `name: ${arr.name} - size: ${arr.size} - weight: ${arr.weight}kg`;
    return string;
}

function getInfoString(arr) {
    const a = getAnimalHaveLetterTInName(arr);
    return a.map(animal => convertInfoToString(animal));
}

console.log(getInfoString(animals))