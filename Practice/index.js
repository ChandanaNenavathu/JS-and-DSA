// 1. find max element in an array
let elem1 = [3,8,5,10,67,4,86,51,7,0,32]
let ans = Math.max(...elem1)
//  console.log(ans)

let elem2 = elem1[0]
for (let i=1; i<=elem1.length ; i++){
    if (elem2 < elem1[i]) {
        elem2 = elem1[i];
    }
}
// console.log("Max Element is: ", elem2);


// 2. find 2nd biggest element in an array

const elem3 = [2,8,4,10,73,39,83,64,30,25,13]

const bgEle = elem3.sort((a,b) => b-a)
// console.log(bgEle[1])

// 3. Sum of all elements in an array
const elem4 = [5,9,13,74,29,45,20,11,55,41]
let sum = elem4.reduce((arr,arr1) => {
    return arr + arr1
})
//  console.log(sum)

// 4. Remove duplicate values from an array

const elem5 = [11,55,23,62,73,11,23,46,34,28,16,30]
const ans1 = elem5.filter((ele,index,arr) => {
    if(arr[ele] = index) {
        return arr
    }
})
//  console.log(ans1)

let duplicate = new Set([...elem5])
// console.log(duplicate)

// 5. find the missing value in an array
const elem6 = [60, 61, 62, 64, 65, 66, 67, 68];

for (let i = elem6[0]; i <= elem6[elem6.length - 1]; i++) {
    if (!elem6.includes(i)) {
       // console.log(`Missing Value : ${i}`);
    }
}


// 6. find similar values in two arrays

const elem7 = [1,5,8,3,22,4,12,36,0]
const elem8 = [1,27,81,3,15,5,22,48,12,36,0]

const simval = ((elem7,elem8) => {
    let dupVal = []
    for(let i=0; i<elem7.length; i++){
        for(let j=0; j<elem8.length; j++){
           if(elem7[i]==(elem8[j])){
             dupVal.push(elem7[i])
             break;
           }
        }
    }
    // console.log(dupVal)
})
simval(elem7,elem8)

// 7. find occurance of an element in an array

// const occEle = [2,8,5,1,7,2,8,1,2,4,5,6,0,2,]
// const elem9 = occEle.filter((ind,ele,)=> {
//     if(arr.indexOf(ele)){
//        return ind == ele
//     }
//     // console.log(elem9)
   
// })

// 8.  Reverse a number without converting it into array 
const Rev = 12345;
const revNum = Rev.toString().split('').reverse()
let arr5 = revNum.reduce((acc,cur) => {
    return acc + cur
})
console.log(arr5)

// 9.  Generate random number b/w 1 to 8
const random = Math.random()
// console.log(random)


// // 10. find two strings are anagrams
// const A = "MoM";
// const B = "DaD";
// const output1 = A.split('').reverse().join().toString('').localeCompare();
// // console.log(output1);

// 11. how to reverse positive value to negative/negative to positive
const posVal = 44;
const val = -posVal;
// console.log(val)

const negVal = -23;
const val1 = -negVal;
// console.log(val1)

// 12. Convert array into object


// 13. decimal number to binary
// 14. find the given array is empty or not
// 15. Destructure in JS 