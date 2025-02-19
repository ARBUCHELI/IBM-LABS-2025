//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

//Creating a second promise method. The promise will get resolved when timer times out after 3 seconds.
let mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second promise resolved")
    },3000)})

//Call the promise and wait for it to be resolved and then print a message.
/*myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
    mySecondPromise.then((sucessMessage) => {
        console.log("From Second Callback " + successMessage)
    })
})*/

//Call the promises sequentiallyl
myPromise.then((sucessMessage) => {
    console.log("From Callback " + sucessMessage);
})

mySecondPromise.then((successMessage) => {
    console.log("From Second Callback " + successMessage);
})