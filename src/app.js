// Good Foody
const goodFoods = [...document.querySelectorAll('.good')];
console.log(goodFoods);
var foody;
(function (foody) {
    foody["good"] = "goodFoody";
    foody["bad"] = "badFoody";
})(foody || (foody = {}));
function goodSound() {
    let sound = document.getElementById(foody.good);
    return sound.play();
}
for (let goodFood of goodFoods) {
    goodFood.addEventListener('click', goodSound, false);
}
// Bad Foody
const badFoods = [...document.querySelectorAll('.bad')];
console.log(badFoods);
function badSound() {
    let sound = document.getElementById(foody.bad);
    return sound.play();
}
for (let badFood of badFoods) {
    badFood.addEventListener('click', badSound, false);
}
