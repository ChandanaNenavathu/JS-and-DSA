// 1. How to create an object

let obj1 = {
    name: "John",
    age : 25,
    location : "Hyderabad",
    profession : "Software Engineer",
    "address" : "tower"
}
// console.log( obj1.name)
// console.log( obj1.age)
// console.log( obj1.location)
// console.log( obj1.profession)

// 2. How to print an object 
// console.log(obj1)

// 3. How to delete a value from an object

delete obj1.name
// console.log(obj1)

// 4. How to add property to an obj
obj1.FirstName = "Johny"
// console.log(obj1)

// 5. How to add string key

obj1["LastName"] = "cena"
// console.log(obj1)

// 6. how to access string key

// console.log(obj1["address"])

// 7. How to destructure an obj

let obj2 = {
    name: "John",
    age : 25,
    location : "Hyderabad",
    profession : "Software Engineer",
    "address" : "tower"
}
const  { name : a , age : b, location : c, profession : d, address : e } = obj2
// console.log(c)

// 8. how to create an array of objs

let cars = [
    {
        model:"BMW",
        color: "Black",
        price: 500000,
        fuel:"Diesel"
    },
    {
        model:"Maruthi",
        color: "White",
        price: 300000,
        fuel:"Petrol"
    },
    {
        model:"Qualis",
        color: "Blue",
        price: 600000,
        fuel:"Petrol"
    }
]
// console.log(cars)

// 9. How to loop through an obj

for (let key of cars) {
    // console.log(key.model);
    // console.log(key.price);
}
// 10. multiply only numbers

let obj3 = {
    a : 20,
    b : 36,
    c : "Hello",
    d : 55,
    e : "World"
}

const multiply = (obj) => {
    for ( key in obj) {
        if ( typeof obj[key] == "number") {
            obj[key] = obj[key]*2
        }
    }
}
multiply(obj3);
// console.log(obj3)

