var arr = [1, -1, 2, 3];

let sum = 0;

var x = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

var names = [
    {
        fname: "talha",
        lname: 'bhutta',
    },
    {
        fname: "invo",
        lname: 'zone',
    },
    {
        fname: "ahmad",
        lname: 'zubair',
    }
]
var result = names.map((x) => {
    return x.fname + x.lname;
});

var resultSTR = result.join(" ");

console.log(resultSTR)


//reverse
var arr3 = ["talha", "asghar", "bhutta"];
var resArr3 = arr3.reverse();
console.log(resArr3);

//sort method

const products = [
    {
        name: "laptop",
        price: 1000,
    },
    {
        name: "desktop",
        price: 1500,
    },
    {
        name: "mobile",
        price: 500,
    },
]

var resultProducts = products.sort((a, b) => {
    return a.price - b.price
})
const myArray = Object.values(resultProducts);
console.log(myArray)
