// console.log("hello")
// for(let i=0; i<10000000; i++){
// //gfgf
// }
// console.log("fellows")


// console.log("hello");

// setTimeout(function()
// {
//     console.log("Asynchronus");
// }, 10000)

// console.log("fellows");

// function compute(action, x, y){
//     if(action==="add"){
//         return x+y
//     }
//     else if(action==="divide")
//         {
//         return x/y
//         }
// }

// console.log(compute("add", 10, 3))
// console.log(compute("divide", 10, 5))


//callBack
// function sub(x, y){
    
//         return x-y
//     }
// function multiply(x, y){
    
//             return x*y
//         }

// function compute(callBack, x, y){
// return callBack(x,y)
// }
// console.log(compute(sub, 10, 3))
// console.log(compute(multiply, 10, 5))

//promises
// const DEMO_URL = "https://course-api.com/react-store-products"

// const request = fetch(DEMO_URL)
// .then((response)=>{
//     console.log(response)
//     return response.json()
// })
// .then((data) => console.log(data))
// .catch((error)=> console.log("Error occurred", error))

// const DEMO_URL = "https://course-api.com/react-store-products"
// function fetchData(url, callback){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => callback(data))
//     .catch(error => console.log("Error occured", error))

// }

// function handleData(data){
//     console.log("Received data", data)
// }
// fetchData(DEMO_URL, handleData)

//printing products and prices only
// const DEMO_URL = "https://course-api.com/react-store-products";

// function fetchData(url, callback) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => callback(data))
//         .catch(error => console.log("Error occurred", error));
// }

// function handleData(data) {
//     for (let i = 0; i < data.length; i++) {
//         const product = data[i];
//         console.log("Product Name: " + product.name + ", Price: $" + (product.price / 100));
//     }
// }
// fetchData(DEMO_URL, handleData);

//creating our own promises
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Successful")
//         reject("Rejected")
//     }, 2000)
// })

// promise.then((response)=>{
//     console.log("response", response)
// }).catch((error)=>{
//     console.log("error", error)
// })

// console.log('hello')

//async_await
// const DEMO_URL = "https://course-api.com/react-store-products"
// const fetchAPI = async function(){
//     const res = await fetch(DEMO_URL)
//     const data = await res.json()
//     console.log(data)
// }
// fetchAPI()
// console.log("Hello")

const DEMO_URL = "https://course-api.com/react-store-products"
const fetchAPI = async function(){
    try{
        const res= await fetch(DEMO_URL)
        const data = await res.json()
        console.log(data)
    }
        catch(error){
            console.log("Error", error)
        }
        }
fetchAPI()
console.log("Hello")
    