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

function getAnimalsFat(arr) {
    return arr.filter((animal) => animal.weight > 50);
}

console.log(getAnimalsFat(animals));