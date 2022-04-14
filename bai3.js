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
    return arr.filter((animals) => animals.name.includes('t'));
}

console.log(getAnimalHaveLetterTInName(animals));