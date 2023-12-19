// - Lernziel: Verwendung der JavaScript-Methode map().
// - Schreibe eine Function, die mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// - Verwende die [mathematische Formel](https://www.metric-conversions.org/de/temperatur/fahrenheit-in-celsius.htm) celsius = (℉ - 32) / 1.8 zur Umrechnung.
// - Verwende das Array aus dem Code-Snippet.
// - Überprüfe das Ergebnis in der Konsole.

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120]
console.log(fahrenheit)

const celsius = fahrenheit.map(grad => ((grad - 32) / 1.8))
console.log(celsius)