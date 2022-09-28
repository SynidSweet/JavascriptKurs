
var level = 1;
var avsluta = false;

while (avsluta === false)
{
    console.log("Du går ner i grottan på nivå " + level);
    var kommando = prompt("Vad vill du göra?");
    
    switch (kommando) {
        case "slåss":
            console.log("Du slåss mot ett skelett och vinner!");
            level++;
            break;
        case "fly":
            console.log("Du lämnar grottan. Fegis!");
            avsluta = true;
            break;
        default:
            console.log("Du kan bara slåss eller fly.");
            break;
    }

    if (level === 10) {
        console.log("Du har klarat spelet! Grattis!");
        avsluta = true;
    }
}

console.log("Spelet avslutas");







