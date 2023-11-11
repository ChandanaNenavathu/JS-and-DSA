// wht is the output for the folloing JS code

// 1.

function showData() {
  // console.log('variable is ', name)
  // console.log('variable is ', age)
  var name = 'Noren Red';
  let age = 999;
}

// showData()

//2.
for (var i=0; i<4; i++) {
  setTimeout(() => {
    // console.log('variable of i', i)
  }, 1000);
}

for (let i=0; i<4; i++) {
  setTimeout(() => {
    // console.log('let of i',i)
  }, 1000);
}

// 3.
// console.log(+true);
// console.log(!"javascript");

// 4.
let a = {
  greeting: 'hi'
}

let z = a;

z.greeting = 'bye';
// console.log(a.greeting)

// 5.
let a1 = 108
let b1 = new Number(108)
let c1 = '108'

// console.log(a1 == b1)
// console.log(a1 === b1)
// console.log(b1 === c1)
// console.log(a1 === c1)

// 6.

const name1 = '6'
// console.log(+name1 + 5)

// 7.
const value = 99

// // Method 1: Using the concatenation operator '+'
// const method1 = value + ''
// console.log("method1:", method1); // Output: method1: 99

// // Method 2: Using JSON.stringify
// const method2 = JSON.stringify(value)
// console.log("method2:", method2); // Output: method2: "99"

// // Method 3: Using the toString() method
// const method3 = value.toString()
// console.log("method3:", method3); // Output: method3: "99"

// // Method 4: Using the String() constructor
// const method4 = String(value)
// console.log("method4:", method4); // Output: method4: "99"

// // Method 5: Using template literals
// const method5 = `${value}`
// console.log("method5:", method5); // Output: method5: "99"

// 8.
let salary = 10;

// console.log(salary++)
// console.log(++salary)
// console.log(salary)

// 9.
function sum (a, b) {
  return a + b
}

// console.log(sum(10, '10'))

// 10.
function getType(...args) {
  // console.log(typeof args)
}
getType(108)

// 11.
function getAge() {
  // 'use strict';
  salary1 = 8121;
  // console.log(salary1)
}
getAge();

// 12.
var num44 = 45
var num44 = 49
// console.log(num44)

// 13.
for(let i = 1; i<5; i++) {
  if(i === 2) continue;
  // console.log(i)
}

const objEmp = {
  name : 'nice',
  group : 'king',
  location : 'hackchat'
}

// console.log(objEmp?.age55)

// 14.
const numbers2 = [1,2,3]
numbers2[10] = 11;
// console.log('numbers2: ', numbers2)

// 15.
const data = [..."Apple"];
// console.log(data)

// 16.

function sum() {
  // console.log('sum')
  return 2 + 2;
}

function sq() {
  // console.log('sq')
  return 4*4
}

let both = (sum(), sq());
// console.log(both)

// 17.
const printFunc = (a, b, c) => {
  console.log('sum is', a + b + c)
}

// printFunc(2,6);

// 18.
let x = {
  value: 1
};

if(x == 1 || x == 2 || x == 3) {
  // console.log('if this is hits you then comment')
}

// 19.
// console.log(4 + '4')
// console.log(4 + +'4')

// 20.
// console.log((99).toString.length + 1)
// console.log('hello'.length)

// 21.
// console.log(num22())

function num22 () {
  // console.log('hello')
}

// 22.
// console.log([] === [])
// console.log([] == [])
// console.log({} === {})
// console.log({} == {})

// 23.
const person = {
  lang: 'js',
  show: function() {
    // console.log(`I am ${this.lang}`)
  }
}

let fn = person.show
fn()

// 24.
var num222 = 2017
function nested() {
  function nested1() {
    console.log("nested1", ++num222)
    function nested2() {
      console.log("nested2", num222++)
      function nested3() {
        var num222 = 100
        console.log("nested3", num222)
      }
      nested3()
    }
    nested2()
  }
  nested1()
}

// nested()

// 25.
function init2(x,y,z) {}
function init3(a,b,c=0) {}

// console.log(init2.length)
// console.log(init3.length)

// 26.
const obj33 = {}
obj33[obj33['A'] = 'B'] = 'C'
// console.log(obj33)

// 27.
let name2222 = 'JS'
name2222[0] = 'R'
name2222[1] = 'X'

// console.log(name2222)

// 28.
var age22 = 99
// console.log(window.age22)

// 29.
const [x1, ...y1] = [1,2,3,4]
// console.log(x1, y1)

// 30.
// let x2 = [typeof x2, typeof y2]
// console.log(x2)

// 31
var x3 = 10
var y3 = 'A'

[x3, y3] = [y3, x3]

console.log({x3,y3})