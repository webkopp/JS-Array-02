// - Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// - Diese Funktion soll jeden String, der ihr übergeben wird umdrehen können (nutze einen Parameter).
// - Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
// - Rufe die Funktion mit deinem Namen als Parameter auf.
// - Überprüfe das Ergebnis in der Konsole.
// - Versuche diese Begriffe umzukehren: Sergio, Hannah, Regallager, Reliefpfeiler und Rentner.
// - Versuche diese Sätze umzukehren: "Ella mag alle Bohnen" und "han nesaH has ennaH".
              
console.log("%c sort 2-1", "color:red");

const reverseString = (words) => {
    let reverseWords =words.split('').reverse().join('');
    console.log(reverseWords);
}

reverseString("Philip")
reverseString("Sergio")
reverseString("Hannah")
reverseString("Regallager")
reverseString("Reliefpfeiler")
reverseString("Rentner")

reverseString("Ella mag alle Bohnen")
reverseString("han nesaH has ennaH")
