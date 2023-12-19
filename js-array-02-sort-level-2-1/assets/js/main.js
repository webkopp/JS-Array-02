// - Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// - Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter).
// - Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
// - Rufe die Funktion mit deinem Namen als Parameter auf.
// - Überprüfe das Ergebnis in der Konsole.
// - Versuche diese Begriffe umzukehren: Sergio, Hannah, Regallager, Reliefpfeiler und Rentner.
// - Versuche diese Sätze umzukehren: "Ella mag alle Bohnen" und "han nesaH has ennaH".
              
let letters = ["Sergio",
    "Hannah",
    "Regallager",
    "Reliefpfeiler",
    "Rentner"]

letters.reverseString()
console.log("reverseString: ",letters)

let nancy = () => {
    letters.reverseString()
    return console.log(letters)
}
nancy()


let words = ["Ella mag alle Bohnen" + "han nesaH has ennaH"]

// function reverseString(str) {
//     return str;
// }
// reverseString("hello");

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
