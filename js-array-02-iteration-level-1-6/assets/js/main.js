// - Lernziel: Anwenden von JavaScript map() oder forEach(), um Dateiendungen zu verändern
// - Erstelle ein neues Array auf Basis des gegebenen Arrays (siehe Code-Snippet).
// - Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// - Falls keine Dateiendung vorhanden ist, soll der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// - Die Werte sollen in Kleinbuchstaben gespeichert werden.
// - Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.

// # ☝🏼 Hinweis
// - Als Hilfestellung kannst du hier nochmal zu [map,](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de) [if/else](https://www.w3schools.com/js/js_if_else.asp) und  [splice](https://www.w3schools.com/jsref/jsref_splice.asp) nachlesen.

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

console.log(album)

let sortAndSplice = (words) =>{
    return words.map((word) => {
        const dotIndex = word.indexOf(".")
        return dotIndex !== -1
        ? word.slice(0, dotIndex)
        : "invalid"
    })
    
}

console.log(sortAndSplice(album))