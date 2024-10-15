//z1
let event = {
    title: "koncert zespolu x",
    date: "2024-06-15",
    location: "Warszawa"
};

console.log(event);

//z2
let participant ={};
participant.name = "Jan";
participant.email = "ut_3987@zsp3zamosc.pl";

console.log(participant.name);
console.log(participant.email);

//z3

let events =[
    {
        name: "koncert zespolu Y",
        date: "2024-07-20",
        location: "Krakow"
    },
    {
        name: "festiwal filmowy",
        date: "2024-08-05",
        location: "Gdansk"
    },
    {
        name: "wystawa sztuki",
        date: "2024-09-10",
        location: "Wroclaw"
    }

];

//z4
let event4 = {
    title: "seminarium o javascript",
    date: "2024-10-15",
    location: "Lodz"
};
events.push(event4);
console.log(events)

//z5
let newEvents = events.slice(2,4);

console.log(newEvents);

//z6
events.shift()
console.log("dlugosc tablicy po usunieciu pierwszego elementu: " + events.length)
events.forEach(date => console.log("data wydarzen: " + date.date));
