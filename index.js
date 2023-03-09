// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 
//destructivelyAppendCat(name)
function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph");
}

//destructivelyPrependCat(name)
function destructivelyPrependCat(Bob) {
    return cats.unshift("Bob");
}
// destructivelyRemoveLastCat()
function  destructivelyRemoveLastCat(Garfield) {
    return cats.pop("Garfield");
}
// destructivelyRemoveFirstCat()
function  destructivelyRemoveFirstCat(Milo) {
    return cats.shift("Milo");
}
//appendCat(name)
function appendCat(Broom){
     return [...cats,"Broom"];
}
//prependCat(name)
function prependCat(Arnold) {
    return ["Arnold", ...cats]
}
// removeLastCat()
function  removeLastCat() {
    return cats.slice(0, -1);
}
//removeFirstCat()
function removeFirstCat() {
    return cats.slice(1);
}

    
