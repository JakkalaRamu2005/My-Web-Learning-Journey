
let arr=[

    {id:1, name: "Ramu"},
    {id:2, class:"IB-1"}
]

console.log(arr);

let stringifyArr = JSON.stringify(arr);
console.log("item", stringifyArr);


localStorage.setItem("item", stringifyArr);

let parseVal = localStorage.getItem("item");
console.log(JSON.parse(parseVal));
// localStorage.setItem("item", arr);

// let itemEl = localStorage.getItem("item");

