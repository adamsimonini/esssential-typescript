"use strict"

// optional parameters

function countdown(initial: number, final = 0, interval = 1){
    var current = initial;
    while (current > final) {
        document.getElementById('countdown').innerHTML += " " + current;
        current -=interval;
    }
}
countdown(20);

// template strings

var worker = {
    id: '007',
    name: 'James Bond',
    status: 'alive'
}

// let & const

var container = document.getElementById('container');

for (var x = 0; x <= 5; x++) {
    let counter = x;
    counter = 1;
}

// for... of loop, which spits out array in order without using an index
var array = [
    "protos", 
    "terran", 
    "zerg"
];

for (var value of array) {
    console.log('Race: ' + value)
}

// arrow function or lambda function
var base: number = 2;
var gg: any = (base: number) => {base += 2};
console.log(base);

var base2: number = 2;
var hh: any = function(){
    {base2 += 2};
}
console.log(base2);

// destructuring
console.log("%c Destructuring:", "color: readonly; font-size: 20px")
var a = 5;
var b = 6;
console.log(a);
console.log(b);

[a,b] = [b,a];
console.log(a);
console.log(b);
//values re-assigned without using temp variables


var template: HTMLElement | null = document.getElementById('template');
template.innerHTML = `
<div todo='${worker.id}' class="list-group-item}">
    <p class="name">ID: ${worker.id}</p>
    <p class="name">Name: ${worker.name}</p>
    <p class="name">Status: ${worker.status}</p>
</div>
`

var apple: string = 'hello';

function test(derp: number, herp: string){
    console.log(derp);
    return herp;
}

test(44, 'brfgt');

// SPREAD OPERATOR
var body: any = document.getElementById('body');

var meats = ['poultry', 'fish', 'pork'];
var groceryList = ['vegetables', 'sauces', ...meats, 'milk']
// instead of meats being an array, the contents of "meats" is added, such that three new string elements are injected into "groceryList"
console.log(groceryList);
var desserts = ['ice cream', 'yogurt', 'apple pie'];
groceryList.push(...desserts);
body.innerHTML += groceryList;

// COMPUTED PROPERTIES - create a dynamically created variable able to work with dymanically created names
var prefix = "10_";
var versions = [8,9,10];

var applicableVersions = () => {
    return 1;
}

// SPECIFYING TYPES
function calculate(x: any[], y: string): number {
    var total: number = x.length + y.length;
    return total;
}

let harris: number[] = [1,2,3];
let berry: string[] = ['a', 'b', 'c'];
let barbie: string = 'abc';
console.log(harris);
console.log(berry);
console.log(barbie);

// the OR operator can be employed during type-setting, to allow for further flexibility (e.g. string | any[])
var twoFaced: (string | number) = 1;

var bool = harris instanceof String;
console.log(bool);

// OVERLOADING FUNCTIONS - must be implemented directly above the actual function definition
function overLoaded(x: string, y:string): number
function overLoaded(x: any[], y:any[]): number
function overLoaded(x: string | any[], y:string | any[]){
    return x.length + y.length;
}
// so now although I have x & y being both string or array, I have limited the perumtations to only those that feature the same type (i.e., string string & array array)

// INTERFACES - only used at compile time and have no effect on runtime, so it just helps catch erros at build time; they describe exactly what can/should be expected of an object using them

interface Todo {
    task: string;
    completed?/*? designates this property as optional*/: boolean;
}

// so todo is an object using the interface Todo
var todo: Todo = {task: 'Feed Adam', completed: true};
console.log(todo);

// CASTING SYNTEX <Interface>, tells Typescript explicity what the type of the variable is
// EXTENDING INTERFACES without editing original

interface Person {
    version: number;
    state: number;
}

var Adam: Person = {
    version: 0,
    state: 1,
}

Adam.version = 12;
console.log(Adam);

// extending the interface by redeclairing it with new properties
interface Person {
    loseMarbles?: boolean;
}

Adam.loseMarbles = true;
console.log(Adam);

// ENUMS - define a set of meaningful and constant values
enum PersonState {
    "Gaming" = 1,
    "Working" = 2,
    "Exercising" = 3,
}

function rest(Adam: Person) {
    if(Adam.state = PersonState.Gaming){
        throw 'All good! Adam is already resting :)';
    }
}
