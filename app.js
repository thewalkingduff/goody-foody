"use strict";
// Good Foody
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var goodFoods = __spreadArray([], document.querySelectorAll('.good'), true);
console.log(goodFoods);
var foody;
(function (foody) {
    foody["good"] = "goodFoody";
    foody["bad"] = "badFoody";
})(foody || (foody = {}));
function goodSound() {
    var sound = document.getElementById(foody.good);
    return sound.play();
}
for (var _i = 0, goodFoods_1 = goodFoods; _i < goodFoods_1.length; _i++) {
    var goodFood = goodFoods_1[_i];
    goodFood.addEventListener('click', goodSound, false);
}
// Bad Foody
var badFoods = __spreadArray([], document.querySelectorAll('.bad'), true);
console.log(badFoods);
function badSound() {
    var sound = document.getElementById(foody.bad);
    return sound.play();
}
for (var _a = 0, badFoods_1 = badFoods; _a < badFoods_1.length; _a++) {
    var badFood = badFoods_1[_a];
    badFood.addEventListener('click', badSound, false);
}
