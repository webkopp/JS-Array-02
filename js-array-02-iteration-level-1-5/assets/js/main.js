// - Verwende die Variable checkNumber und map().
// - Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
// - Wenn ja, addiere 100 zu dieser Zahl hinzu.
// - Gib das Ergebnis in der Konsole aus.

let checkNumber = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78]
console.log(checkNumber)

let stati = (divi) => {
    let result = divi.map((num) => {
        if (num % 3 === 0) {
            return num + 100
        } else {
            return num
        }
    })
    return result
}
console.log(stati(checkNumber))