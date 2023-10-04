//jS Course. this gives index.html page content to display on page
/*
window.onload = () => { //this prints all contents on html page if js is attached in head instead of end of body
    const rootElement = document.getElementById('root')
    rootElement.innerHTML = "Hello from my first SPA!"//content to display on webpage
}
*/
/*
window.onload = () => { //this prints all contents on html page if js is attached in head instead of end of body
    const rootElement = document.getElementById('root')
    const button = document.createElement('button')
    button.innerHTML = 'Click me for current date'
    button.addEventListener('click', () => {
        button.innerHTML = new Date().toString()
    })
    rootElement.appendChild(button)
}
*/


window.onload = () => { //this prints all contents on html page if js is attached in head instead of end of body
    const rootElement = document.getElementById('root')
    const ints =[1, 2, 3]
    ints.forEach(i => {
        let li = document.createElement('li')
        li.innerHTML = i
        rootElement.appendChild(li)
    })
}





/** js start
console.log('Martha'[0]) //prints index alphabet. this only prints inside console of inspect of webpage
console.log('123'.length)  //length of string
*/

//the above can also be written below

let str = 'Martha'
console.log(str[0])
console.log(str.length)
console.log(str[str.length - 1])//always returns last letter
console.log(typeof str)  //prints datatype
console.log(100 /(4*5))
console.log(15%2) //modulo
console.log(5<10) // gives boolean
console.log(Math.sqrt(-50)) 

let name = "Martha"
let fullName = 'Martha O D' //we cant use space in var, so we use caps
let isRaining = true
let temp = 20

temp = temp+2
console.log(temp) 

//when we use const instead of let, the variable cannot be redef
const planet = 'Earth'
//planet = 'Venus' without comment gives error on console
console.log(planet) // will give error

// F = C*1.8 +32
let celsuis = 10
let fahrenheit = celsuis * 1.8 +32
console.log(fahrenheit)
console.log(`our new temperature is ${fahrenheit}`)//using backticks  trick
console.log('new temp is ' + fahrenheit)


let bool = '1' == 1 // checks values, !=
console.log(bool)
let boo = '2' === 2 // checks values and types, !==
console.log(boo) //gives false cos diff types
let bah = '5' !== 5
console.log(bah)


/*/ conditionals
let subscribed = true  // change value to false for else to execute

if (subscribed === true) {
    console.log('Show the video')
}
else {
    console.log('log into account')
}*/

//else if 
let subscribed = false
let loggedin = true

if (subscribed === true) {
    console.log('Show the video')
}
else if (loggedin === true) {
    console.log('upgrade account')
}
else {
    console.log('log into account')
}



//logical operators &&, ||
let cash =70
let price =50
let shopOpen = true  //switch to false to check
let val = ""

if (cash >= price && shopOpen /* === true*/){
    console.log("We will have a great shopping experience")
}//check with ||, will only execute if true, so === true isnt necessary
//also note that !shopOpen is = false


//TO check if value is truthy or falsy, putt !! before value
if ('') {
    console.log('truthy value')
}
else {
    console.log('falsy value')
}
if (val) {
    console.log(!!val)
}
else {
    console.log(!!val)
}


//Tenary operators,   works like if , else
let  money= 50
let cost = 40
let isStoreOpen = true

let cond = money>=cost && isStoreOpen ? 'print receipt' : "dont print receipt"
console.log(cond)

//while loop
let count = 1
while ( count<= 10) {
    console.log(count)
    count += 1//count++
}

//for loop
for (let i=1; i <=5; i++) {
    console.log(i)   
}
//...interview question
for (let j=1; j<=20; j++) {
    if (j%3 === 0) {
        console.log(`${j} -> divisible by 3`)
    }
    else if  (j%5 === 0) {
        console.log(`${j} -> divisible by 5`)
    }
    else if (j%3 === 0 && j%5 === 0) {
        console.log(`${j} -> divisible by 3 and 5`)
    }
    else {
        console.log(j)
    }    
}

//...interview question
let foo = 'Frontend Simplified' // const  foo =
for (let k in foo)          // for (let k = 0; k <= foo.length; k++)
    console.log(foo[k])   // console.log(foo[k])


    //function

function celToFah(celsius) {
    return celsius * 1.8 + 32
}
console.log(`0 celsuis is ${celToFah(0)}`)
console.log(celToFah(10))


//method 2 of def a function using arrow function
const CelToFah = (celsius) => {
    return celsius * 1.8 + 32
}
console.log(CelToFah(15))

//Arrays
let arr = [20, 30, 40, 70]
console.log(arr[0])
console.log(arr[arr.length -1])

arr.push(200)
console.log(arr)

arr.filter((element) => {  // callback fn iterates over the array based on the no of elements in array, filter method returns new array
    console.log(element)
})

let newArr = arr.filter((element) => { 
    console.log(element)// lista elements in the array one by one
    if (element < 55){ // we can del the next line and replace if with return
    return true //returns an array
    }
})
console.log(newArr)

let newarr = arr.filter(element => element < 55 )  // more optimized
console.log(newarr)

let arr1 =['A+', 'A', "fail"]
let arr2= ['fail', 'fail', 'B']
let arr3 = ['fail']

let narr1 = arr1 .filter(element => element !== 'fail')
console.log(narr1)
for (let z = 0; z < arr1.length; ++z) {//alt console.log(element) see line 171
    console.log(arr1[z])
}
let goodgrades = []
for (let k = 0; k <arr1.length; ++k) {
    if (k !== 'fail') {
        goodgrades.push(arr1[k])
    }
}console.log(goodgrades)

//map method.. uses call back fn too

let arr4 = [5, 7, 9, 12]
let narr4 = arr4.map((element) => {
    console.log(element)
    return 'dog'
})
console.log(narr4)

//optimized
let nwarr4 = arr4.map(element=> 'dog' )
console.log(nwarr4)


let dollar = [1, 5, 13, 7]
let cents = dollar.map(element => element * 100)
console.log(cents)

let cent = []
for (let y in dollar){ //for (let y = 0; y<dollar.length; ++y){
    cent.push(dollar[y]*100)
}
console.log(cent)

//objects

let users=[//more than 1 user
    {
        username: 'martha',
        email:'mjartha@gmail.com',
        pwd: 'martha123',
        lessonsCompleted: [0, 1,2],
        sex:'female'
    },
    {
        username: 'emma',
        email:'emma@gmail.com',
        pwd: 'em123',
        lessonsCompleted: [0, 1],
        sex: 'male'
    }
]
/*console.log(user.username[0]) //for only one user, gives only first letter*/
console.log(users[0].username)


function login(email, pwd) {
    console.log(email, pwd)
}
login(users[0].email, users[0].pwd)//or  enter literal values)

function logIn(email,pwd){
    for (let i = 0; i < users.length; ++i){
        /*console.log(user[i]), call with logIn()*/
        if (users[i].email === email){
            console.log(users[i])
            if (users[i].pwd === pwd){
                console.log('password correct! - log user in')
            }
            else{
                console.log('password incorrect! - TRY AGAIN')
            }
            return //breaks fn once it finds user
        }
        console.log('user does not exist')

    }
    
}
logIn('mjartha@gmail.com', 'martha123')
logIn('emma@gmail.com', 'yuhk')
logIn('kai2@gmail.com', 'heck')

function register(name, email,pwd,lessonsCompleted,sex){
    let user = {username: name ,email: email, pwd: pwd, 
    lessonsCompleted: lessonsCompleted, sex: sex}
    console.log({name, email,pwd,lessonsCompleted,sex})
    users.push(user)
}
register('seh', 'seh@gmail.com', 'se123','[0, 1,2,3,4]','female')

console.log(users)


//DOM
console.log(document) //access the html doc
//document.querySelector('body').style.display='none'(type in console)
console.log(document.querySelector('title'))//place defer with script tag to load js script  after html or put script tag after body 
//to access an element with id, add a #, with class add a .
console.log(document.querySelector('#root'))
console.log(document.getElementById('root'))
console.log(document.querySelector('.first'))
document.querySelector('.first').innerHTML='Intro to JS' //+= appends 
document.querySelector('.first').style.color = 'blue'

function changetitletored() {
    document.querySelector('button').style.color ='red'
    document.querySelector('.first').style.color ='red'
    //toggle recieves var from css
    document.querySelector('body').classList.toggle('dark-theme')
    console.log('clicked')
}


//Async JS

const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
]

function getPosts() {
    setTimeout(() => {
       let output = ''
       //see line 21
       /*for (let b in posts) (
        output += `<li>${posts[b].title}</li>`
       )
       document.querySelector('.asyncjs').innerHTML = output*/
       //alternatively, can write
       posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`
       })
       document.body.innerHTML += output

    }, 1000)
}

/*function createPost(post) {
    setTimeout(() => {
        posts.push(post)
    }, 2000)//when we run this, we dont see post three cos createpost takes 2mins to create post. we can either reduce the time to say 100 or use callbacks
}
getPosts()
createPost({title: 'Post Three', body: 'This is post Three'})*/


//Callback fns
/*function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

createPost({title: 'Post Three', body: 'This is post Three'}, getPosts)*/


//promises
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            //to resolve
            const error =false //to get error message/reject, set error to true
            if (!error) {
                resolve()
            }
            else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}
/*createPost({title:'Post Three', body: 'This is post Three'})
.then(getPosts)//we assoc a callback with the promise using .then
.catch(err=> console.log(err))*/
//using promise.all
/*  line 425
const promise1 = Promise.resolve("Hello World")
const promise2 = 10
const promise3 = new Promise((resolve, reject) => 
setTimeout(resolve, 2000, 'Goodbye'))
//fetch API makes Ajax calls or http requests which returns a promise
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json() )//to return actual response in json

Promise.all([promise1, promise2, promise3, promise4]).then(values => 
    console.log(values))


//Async Await
async function init(){
    await createPost({title: 'Post Three', body: 'This is post Three'})
    getPosts()
}
init()

//Async Await with fetch
async function fetchusers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    
}
fetchusers()
*/



//Exercises
//1. check 2 numbers and return true if one of the numbers is 100 or the sum of 
//the 2 is 100
//using function and arrow function
function checkNumbers(a, b) {
    if ((a + b) === 100) {
        console.log('True');
    }
    else if (a === 100 || b === 100) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}

checkNumbers(170, 50);  
checkNumbers(30, 70)
checkNumbers(10, 150)
checkNumbers(140, 100)
checkNumbers(10, 50)


const checknumber = (a, b) => {

    if (a===100 || b === 100) {
        console.log('True')
    }
    else if ( a + b === 100) {
        console.log('True')
    }
    else {
        console.log('False')
    }
}

checknumber(10, 50)


const checkIfOneOrSumIs100 = (a, b)=> {
    return a === 100 || b === 100 || a + b === 100;
  }
  
console.log(checkIfOneOrSumIs100(50, 50));   // true (sum is 100)
console.log(checkIfOneOrSumIs100(100, 0));   // true (num1 is 100)
console.log(checkIfOneOrSumIs100(90, 10));   // true (sum is 100)
console.log(checkIfOneOrSumIs100(40, 30));   // false (neither is 100 or sum is 100)


let randarray =[]
let x = Math.floor(Math.random() *100) + 1
let y = Math.floor(Math.random() *100) + 1
console.log(x, y)
let z = x + y
randarray.push(x, y, z)
console.log(randarray)
let check100array = randarray.filter(element => element !== 100)
console.log(check100array)
let check100 = randarray.length !== check100array.length  
console.log(check100)



//write  a javascript prog to get the extension of a filename
let filename = 'file.pdf'
const arrayw = filename.split('.')
console.log(arrayw)
console.log(arrayw[arrayw.length-1])
console.log(arrayw.slice(-1))
console.log(arrayw.pop())

const fileExt = (fileName) => {
    let ind = fileName.lastIndexOf('.')
    console.log(fileName.slice(ind))
}
fileExt('index.config.js')


//write a javascript code to replace every xta in a given string with the xta following it in the alphabet
const replaceXta = (string) => 
    string
    .split('')
    .map(element => String.fromCharCode(element.charCodeAt(0) + 1))
    .join('')
console.log(replaceXta('abcd'))


const alphabet = [...Array(26).keys()].map(element =>String.fromCharCode(element + 97));
console.log(alphabet)
const Alphabet =[...Array(26).keys()].map(i => String.fromCharCode(i + 65));
console.log(Alphabet)
//alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits);
console.log(fruits.constructor)