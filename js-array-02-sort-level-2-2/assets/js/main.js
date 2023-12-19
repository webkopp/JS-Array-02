// - In dieser Übung lernst du, wie man die Nummern 0-∞ aufsteigend sortiert.
// - Sortiere die Nummern aufsteigend.
// - Der Code steht im Code-Snippet.
// - Verwende den Befehl sort() und Google, um die Aufgabe korrekt auszuführen.
// - Überprüfe das Ergebnis in der Konsole.
              
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000]

numArray2.sort(function(a,b) {
    return a - b
})
console.log("sort: ", numArray2)