// - Lernziel: String-Methode split() verstehen und anwenden.
// - Nun geht es um eine String-Methode, die ein Array zurückgibt. Deswegen wird [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/String/split?retiredLocale=de) immer erst bei Arrays behandelt. Mit split() kannst du aus einem String ein Array erstellen lassen. Dabei kannst du in den ()-Klammern von split() festhalten, wie der String gestückelt werden soll.
// - Nutze folgenden String als Beispiel:   const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
// - Finde mit der Ergebnisvorschau heraus, wo der String gesplitet worden ist. Wichtig ist, dass du dir die einzelnen Vorgänge in extra Variablen zwischenspeicherst, weil du sonst nicht mit der Rückgabe von split() weiterarbeiten kannst.

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

console.log(text)
console.log(text.length)

const words = text.split('')
console.log(words[''])

const chars = text.split('')
console.log(chars[''])

const textCopy = text.split()
console.log(textCopy)