let name = "synchronous"
console.log(name)

let surName = "code"
console.log(surName)


//setTimeOut classifies as macrotask... and so does other starting with "set" 
setTimeout(() => {
    console.log("Asynchronous running")
}, 5000)

setTimeout(() => {
    console.log("Synchronously syncing")
}, 3000);

setTimeout(() => {
    console.log("Synchronously syncing2")
},)


//promise, queMicroTask:-- Microtask
queueMicrotask(() => console.log("Microtask syncing"))

for (let i = 0; i < 5; i++) { 
    console.log(i)
    setTimeout(() => {
        console.log(i)
    }, 4000)
    console.log(i)
}

console.log(name, surName)

// Promise and async/await examples
let myPromise = new Promise((resolve, reject) => {
    let flag = true
    if (flag) {
        resolve("Promise is resolved with green flag")
    } else {
        reject("Promise is rejected with red flag")
    }
})
console.log(myPromise)


async function fetchData() {
    let data = await fetch("https://fakestoreapi.com/products")
    let ans = await data.json()
    console.log(ans)
}
fetchData();


async function fetchChData() {
    try {
        let data = await fetch("https://fakestoreapi.com/products")
        let ans = await data.json()
        console.log(ans)
    } catch (error) {
        console.log(error)
    }
}
