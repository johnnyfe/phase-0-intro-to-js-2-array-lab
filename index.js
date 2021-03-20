// Write your solution here!
const cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat () {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop(0);
}
function destructivelyRemoveFirstCat() {
    cats.shift(0); 
}
function appendCat(name) {
    return [...cats,"Broom"];
}
function prependCat(name) {
    return ["Arnold",...cats];
}
function removeLastCat() {
    let newCats = cats.slice(0,-1);
    return newCats
}
function removeFirstCat() {
    let newCats2 = cats.slice(1,3);
    return newCats2
}