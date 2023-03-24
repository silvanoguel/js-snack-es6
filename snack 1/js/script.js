// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Creo un array di oggetti
const bicycleArray = [
    {
        name: "Bianchi",
        weight: 10,
    },
    {
        name: "Scott",
        weight: 11,
    },
    {
        name: "Triban",
        weight: 8,
    },
    {
        name: "Merida",
        weight: 11,
    },
];

console.log(bicycleArray)


let element = bicycleArray[0].weight;
let obj = {};

for (let i = 0; i < bicycleArray.length; i++) {

    if(element > bicycleArray[i].weight) {
        element = bicycleArray[i].weight;
        obj = bicycleArray[i];
    }
}

console.log(obj);




