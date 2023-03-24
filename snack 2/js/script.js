// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settare a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeamsArray = [
    {
        name: "Juventus",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Milan",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Inter",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Fenerbahçe",
        points: 0,
        foulsSuffered: 0
    },
];

let rndNumbers = []

for (let i = 0; i < footballTeamsArray.length; i++) {
    footballTeamsArray[i].points = Math.floor(Math.random() * (50 - 1) + 1);
    footballTeamsArray[i].foulsSuffered = Math.floor(Math.random() * (30 - 1) + 1);

    let {name, foulsSuffered} = footballTeamsArray[i];
    let newObj = {name, foulsSuffered};
    rndNumbers.push(newObj);
}
console.log(rndNumbers)