
// String Methods-----------------------

//1. How to find character position in a string

const str1 = "Hyderabad";
//console.log('r position ===> ', str1.charAt(4))
// console.log('concat ===>', str1.concat( " ", "Biryani"))
// console.log('starsWith ===>', str1.startsWith("H"))
// console.log("endsWith ===>", str1.endsWith('a'))
// console.log("includes ===>", str1.includes("Hyd"))
// console.log("indexOf ===>", str1.indexOf('b'))
// console.log("lastIndexOf ===>", str1.lastIndexOf("d"))
// console.log("Match ===>", str1.match(/[A-Z]/g))
//console.log("padStarts ===>", str1.padStart(10,'?'))
//console.log("padEnd ===>", str1.padEnd(10,'?'))
//console.log("repeat ===>", str1.repeat(3))
//console.log("replace ===>", str1.replace('abad',"guda"))
//console.log("search ===>", str1.search('d'))
// console.log("slice ===>", str1.slice(1,5)) 
// console.log("split ===>", str1.split(''))
//console.log("substring ===>", str1.substring(1,8)) same as slice()
// console.log("toLowerCase ===>", str1.toLowerCase())
// console.log("toUpperCase ===>", str1.toUpperCase())
//console.log("trim ===>", str1.trim()) removes empty spaces
// console.log("trimStart ===>", str1.trimStart())
//console.log("trimEnd ===>", str1.trimEnd())


// Array Methods

// 1. addition of 2 numbers.-------------

// Method 1
let A = 10;
let B = 20;
// console.log("A + B =>", A + B )

//Method 2

let addition = (a,b) => {
//   return <console className="log">                       </console>(a + b)
}
addition(9,9)

// 2. multiplication Table 7.--------------------

// Method 1
    for (let i = 0; i<=10; i++) {
        const output = i*7
        //console.log(output)
    }
// Method 2

let array = [1,2,3,4,5,6,7,8,9,10];
array.forEach((item) => {
    let result= item * 7
    //console.log(result)
})

// Method 3 
array.map((val) => {
    val *= 7
    //console.log(val)
})

// 3. how to find length of an array.-----------------------

let arr2 = [2,5,8,4,8,3,5,1,9];
//console.log(arr2.length)

// Method 2

for (let i=0; i<=arr2.length; i++){
    //console.log(i)
}

// 4. how to remove element from an array.-----------------------

let arr3 = [2,5,8,4,8,3,5,1,9];
let ele = arr3.splice(2,5)
let ele1 = arr3.slice(3,5)
// console.log('ele splice =>', ele)
// console.log('ele slice =>',ele1)
// console.log('original array => ', arr3)

// 5. how to add one element to an array.--------------------
let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.push(10)
arr4.unshift(0)
//console.log(arr4)


// 6. how to find big element in an array.----------------------

let arr5 = [6,9,3,2,4,1,1,8,5,0];
let bigElem = Math.max(...arr5)
//console.log(bigElem)

//Method 2
let elem = arr5[0];
const findLargest = () => {
    for(let i=1; i<=arr5.length; i++){
        if (arr5[i] > elem) {
            elem = arr5[i];
        }
    }
    //  console.log(elem)
}
findLargest()


// 7. how to find small element in an array.---------------------------

let arr6 = [6,9,3,2,4,1,1,8,5,0];
let smallElem = Math.min(...arr6)
//console.log(smallElem)


// 8. how to sort ascending order desending order of an array.---------------------

let arr9 = [21,63,1,14,46,19,28,74,58,31,60,24]
let arr10 = [22,6,78,19,55,23,17,11,29,3,20]
arr9.sort();
//console.log(arr9)

// Method 2 
const ascendingOrder = arr9.sort((a,b)=> a-b)
const decendingOrder = arr10.sort((a,b)=> b-a)

// console.log(ascendingOrder)
// console.log(decendingOrder)


// 9. how to filter even numbers/ odd numbers from an array.----------------------------

let arr8 = [1,0,2,2,5,8,5,7,9,4,6];
let evenNum = arr8.filter((val) => val % 2 === 0)
let oddNum = arr8.filter((num) => num % 2 !== 0)
console.log(oddNum)
//console.log(evenNum) 

// 10. how to add new element at the starting of the array.---------------------------------

let arr7 = [6,9,3,2,4,1,1,8,5,0];
let newElem = arr7.unshift(3)
//console.log(arr7)

// 11. how to sort an string elements in an array.-----------------------------

let arr11 = ['ant','cat','tap','pen','egg','saw','key','hat'];
arr11.sort()
//console.log(arr11)

// Method 2

arr11.sort((a,b) => a.localeCompare(b))
//console.log(arr11)

// 12. Adding of any two values in an array to get result of 12------------

const arr12 = [2,5,8,9,0,4,1,3]
const values = (arr,target) => {
    // console.log('arr =>', arr)
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if((arr[i]+arr[j])=== target) {
             //console.log('The sum is', `${arr[i]},${arr[j]}`)
            }
        }
    }
}
values([...arr12],12)

// 13. adding of all numbers in an array

const arr13 = [2,5,8,9,0,4,1,3]
const total = arr13.reduce((acc,cur) => {
    return acc + cur
})
// console.log(total)

//14. Removing integer numbers from an array

const arr14 = [6,8,'9',76,'65',45,'32',12,'56']
const RemoveInt = arr14.filter((val) => !Number.isInteger(val))

// console.log(RemoveInt)

//15. Removing Strings from an array

const arr15 = [6,8,'9',76,'65',45,'32',12,'56']
const removeStr = arr15.filter((item) => Number.isInteger(item))
// console.log(removeStr)

//16. An array contains only Integers or not

const arr16 = [6,8,'9',76,'65',45,'32',12,'56']
const isNum = (arr) => {
    //console.log(arr)
    for(let i =0; i<arr16.length; i++){
        //console.log(i)
        if(Number.isInteger(arr[i])){
           //console.log(arr[i],'true')
        }else{
            //console.log(arr[i],'false')
        }
    }
}
isNum(arr16)

//17. How to find out largest even number in an array

const arr17 = [2,9,8,16,78,82,96,105,36,76,204,20]
const evenNum1 = arr17.filter((item) => item % 2 === 0)
//Method 1
const maxNum = Math.max(...evenNum1)
    //console.log(maxNum)

// Method 2

    let largest = evenNum1[0];
        evenNum1.forEach(function(element) {
            if (element > largest) {
                largest = element;
            }
          });
       //console.log(largest);

//18. How to find out smallest even number in an array

const arr19 = [2,9,8,16,78,82,96,105,36,76,204,20]

const smallEven = arr19.filter((item) => item % 2 === 0)

// Method 1

const minNum = Math.min(...smallEven)
//console.log(minNum)

// Method 2

let smallest = smallEven[0];
smallEven.forEach(function(element){
    if(element < smallest){
        smallest = element;
    }
})
//console.log(smallest)

// 19. How to remove duplicate values from an array

const arr18 = [23,11,90,23,61,34,56,11,34,99,55,61,49,34,83,55]
// Method 1
    const removeArr = arr18.filter((ele,index,array) => {
        //console.log(index )
       return array.indexOf(ele) == index        
    })
//console.log(removeArr)

// Method 2

const uniqueArr = new Set([...arr18])
//console.log(uniqueArr);

//20. How to find largest duplicate value in an array

const arr20 = [23,11,90,23,61,34,56,11,34,99,55,61,49,34,83,55]

const val = arr20.filter((item,index,array) => {
     
    return array.indexOf(item) !== index
} )
const largestDup = Math.max(...val)
//console.log(largestDup)

// 21. How to convert an array to an object
const arr21 = [20,17,11,90,31,25,80]
let obj = {}
const func = (chandu) => {
    for(let i=0;i<chandu.length;++i){
        obj[i] = chandu[i]
    }
    return obj
}
func(arr21)
//console.log(obj)

//22. function calling with parameters with ex

const adding1 = (a,b) => {
    //console.log( `${a  + b}` )
}
adding1('Hello', ' World')

//23. How to find number of duplicate values in an array

const arr23 = [2,8,16,25,53,8,17,25,2,3,16,8,2,17]
const dupNum = {};
arr23.forEach((item) => {
    dupNum[item] = (dupNum[item] || 0) + 1
    //console.log(dupNum[item])
})
//console.log(dupNum)

// 24. How to remove specific item from an array

const arr24 = [6,9,83,94,104,203,18,56]
const spcItem = arr24.indexOf(104)
// Method 1
const remEle = arr24.splice(4,1)
//console.log(arr24)
// Method 2
const Item = arr24.indexOf(104)
//if(Item !== -1){
    arr24.splice(Item,1)
//}
//console.log(arr24)

// 25. reverse of given numbers

const arr25 = [3,8,21,40,51,31,86,97,11]
// Method 1
//const rev = arr25.reverse()
//console.log(rev)

// Method 2

let arrNum = []
const revNum = (arr)=> {
    for(let i=arr.length-1; i>=0; i-- ){
        arrNum.push(arr[i])
    }
    return arrNum
}
revNum(arr25)
//console.log(arrNum)

//26. add two array values

const arr26 = [3,8,5,1,9];
const arr27 = [6,2,7,1,4];
let arrVal = [];
const Values = (arr1,arr2) => {
    //console.log(arr)
    //console.log(sum)
    for (let i=0; i < arr1.length; i++) {
        let sum1 = (arr1[i]+arr2[i])
        arrVal.push(sum1)
    }
 }
    Values(arr26,arr27)
    //console.log(arrVal)
    
// 27. add above arr26 and arr27 first arr26 value with arr26 last value

const Num = []
const Sum = (Arr1,Arr2) => {
    for(let i =0;i<Arr1.length;i++){
        const num1 = Arr1[i]+ (Arr2[Arr2.length-1-i]);
        Num.push(num1)
    }
}
Sum(arr26, arr27)
//console.log(Num)


// 28. fizz, buzz and fizzbuzz of a given array elements
const arr28 = [2,3,6,7,9,10,15,16,18,20,25]
// rule 1. if number is divisible by 3 = fizz
// rule 1. if number is divisible by 5 = buzz
// rule 1. if number is divisible by 3,5 = fizzbuzz

for (let i = 0; i < arr28.length; i++) {
    //const element = arr28[i];
    if(arr28 [i] % 3 == 0 && arr28 [i] % 5 == 0){
        //console.log('fizzbuzz')
    }else if(arr28 [i] % 5 == 0){
        //console.log('buzz')
    }else if(arr28 [i] % 3 == 0){
        //console.log("fizz")
    }else{
        //console.log(arr28[i])
    }
}

// 29. split single array into multiple subArrays

const arr29 = [1,7,4,9,2,5,0,3,17,5,9,2]
let limit = 3
let Arr = []
const funct = (arr,num) => {
    for (let i = 0; i < arr.length; i+=num) {
         Arr.push(arr.slice(i, i + num))
    }
    return Arr
}
const Arr1 = funct(arr29,limit)
//console.log(Arr1)

//30. add multiple subArrays into single Array

const arr30 = [[1,3,9], [5,8,4,3], [0,6]]

const singleArray1 = arr30.flat(2)
// console.log(singleArray1);

//Method 2 
const singleArray2 = arr30.flatMap(subArray => subArray)
// console.log(singleArray2);

//Method 3

const singleArray3 = [].concat(...arr30);
// console.log(singleArray3)

//31. add nested Arrays into single Array

const arr31 = [[1,3,9], [5,8,4,3], [0,6],[[2,5],[7,2]]]

const singleArray4 = arr31.flat(2)
// console.log(singleArray4);

// 32. find given strings anagram or not
const Str1 = 'heart'
const Str2 = 'earth'
const firstStr = Str1.split('').sort((a,b) => a.localeCompare(b)).join().replace(/,/g, '')
const secondStr = Str2.split('').sort((a,b) => a.localeCompare(b)).join().replace(/,/g, '')
if(firstStr === secondStr) {
    // console.log('Given Strings are Anagram')
}else{
    //console.log('Given Strings are not Anagram')
}

// 33. find given Number is Palindrome or not

const number = 505;
const reverseNumber = number.toString().split('').reverse().join().replace(/,/g, '')
const num1 = parseInt(reverseNumber)
if(number === num1) {
    //console.log('given Number is Palindrome')
}else{
    //console.log('given Number is not Palindrome')
}
//console.log(reverseNumber)

// OBJECTS

const cars = {
    Hyderabad:{ 
        company: "BMW",
        color:"Black",
        price: 3000000,
    },
    Banglore:{ 
        company: "Tata",
        color:"White",
        price: 1500000,
    },
    Pune:{ 
        company: "Toyota",
        color:"Green",
        price: 2000000,
    },
    Chennai:{ 
        company: "Skoda",
        color:"Grey",
        price: 900000,
    },
}
// 1. How to get particular color of hyderabad car in object?

const color = cars.Hyderabad.color
//console.log(color)

// 2. How to get all colors 

const color1 = cars.keys
// console.log(color1)