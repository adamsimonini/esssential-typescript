"use strict";
var _a;
// optional parameters
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
        document.getElementById('countdown').innerHTML += " " + current;
        current -= interval;
    }
}
countdown(20);
// template strings
var worker = {
    id: '007',
    name: 'James Bond',
    status: 'alive'
};
// let & const
var container = document.getElementById('container');
for (var x = 0; x <= 5; x++) {
    var counter = x;
    counter = 1;
}
// for... of loop, which spits out array in order without using an index
var array = [
    "protos",
    "terran",
    "zerg"
];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log('Race: ' + value);
}
// arrow function or lambda function
var base = 2;
var gg = function (base) { base += 2; };
console.log(base);
var base2 = 2;
var hh = function () {
    {
        base2 += 2;
    }
    ;
};
console.log(base2);
// destructuring
console.log("%c Destructuring:", "color: readonly; font-size: 20px");
var a = 5;
var b = 6;
console.log(a);
console.log(b);
_a = [b, a], a = _a[0], b = _a[1];
console.log(a);
console.log(b);
//values re-assigned without using temp variables
var template = document.getElementById('template');
template.innerHTML = "\n<div todo='" + worker.id + "' class=\"list-group-item}\">\n    <p class=\"name\">ID: " + worker.id + "</p>\n    <p class=\"name\">Name: " + worker.name + "</p>\n    <p class=\"name\">Status: " + worker.status + "</p>\n</div>\n";
var apple = 'hello';
function test(derp, herp) {
    console.log(derp);
    return herp;
}
test(44, 'brfgt');
// SPREAD OPERATOR
var body = document.getElementById('body');
var meats = ['poultry', 'fish', 'pork'];
var groceryList = ['vegetables', 'sauces'].concat(meats, ['milk']);
// instead of meats being an array, the contents of "meats" is added, such that three new string elements are injected into "groceryList"
console.log(groceryList);
var desserts = ['ice cream', 'yogurt', 'apple pie'];
groceryList.push.apply(groceryList, desserts);
body.innerHTML += groceryList;
// COMPUTED PROPERTIES - create a dynamically created variable able to work with dymanically created names
var prefix = "10_";
var versions = [8, 9, 10];
var applicableVersions = function () {
    return 1;
};
// SPECIFYING TYPES
function calculate(x, y) {
    var total = x.length + y.length;
    return total;
}
var harris = [1, 2, 3];
var berry = ['a', 'b', 'c'];
var barbie = 'abc';
console.log(harris);
console.log(berry);
console.log(barbie);
// the OR operator can be employed during type-setting, to allow for further flexibility (e.g. string | any[])
var twoFaced = 1;
var bool = harris instanceof String;
console.log(bool);
function overLoaded(x, y) {
    return x.length + y.length;
}
// so todo is an object using the interface Todo
var todo = { task: 'Feed Adam', completed: true };
console.log(todo);
var Adam = {
    version: 0,
    state: 1
};
Adam.version = 12;
console.log(Adam);
Adam.loseMarbles = true;
console.log(Adam);
// ENUMS - define a set of meaning and constant values
var PersonState;
(function (PersonState) {
    PersonState[PersonState["Gaming"] = 1] = "Gaming";
    PersonState[PersonState["Working"] = 2] = "Working";
    PersonState[PersonState["Exercising"] = 3] = "Exercising";
})(PersonState || (PersonState = {}));
function rest(Adam) {
    if (Adam.state = PersonState.Gaming) {
        throw 'Adam is already resting!';
    }
}
