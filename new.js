// function outermost(){
//     var c = 20;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c)
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
//
// }
// var close = outermost()("hello world")
// close();

//callback event listner

// function addEvent() {
//     let counter = 0;
//     document.getElementById('clickMeBroo').addEventListener('click', function xyz () {
//         console.log('CLicked', ++counter)
//     });
// }
//
// addEvent();

//higher order function
// radius= [4,5,6]
// const area = function (value) {
//     return Math.PI * value* value
// }
//
// console.log(radius.map(area))

//prototype

//bind call apply

// const object = {
//     name: "Tony Soprano",
//     place: "New Jersey"
// }
//
// let printName = function (series,realName) {
//     console.log(this.name + ' '+ this.place + ' ' + series + ' ' + realName)
// }
//
// printName.call(object, "Sopranos", "Dont know")
// printName.apply(object, ["Sopranos", "Dont know"])
// bindExample = printName.bind(object)
// bindExample()

//pollyfill for bind
//
// let names = {
//     firstName: 'Chirs',
//     lastName: 'Moltisanti'
// }

// let printShow = function (showName, showName2) {
//     console.log(this.firstName + ' ' + this.lastName + ' ' + showName + ' ' + showName2 )
// }
//
// Function.prototype.myBind = function (...args){
//    let obj = this,
//    params = args.slice(1);
//     return function (...args2){
//        console.log()
//         return obj.apply(args[0],[...params,...args2])
//     }
// }
//
// let printName = printShow.myBind(names,"Sopranos", )
// printName("Kim's Convinience");

//Currying

// by closure

// let addition = function (x) {
//     return function (y) {
//         return console.log(x * y)
//     }
// }
//
// let additionBySix = addition(6)
// additionBySix(5)
//
// //by binding
//
// let additionBind = function (x, y) {
//         return console.log(x * y)
// }
//
// let additionByTen = additionBind.bind(this, 10)
// additionByTen(10);

//fibonacci

function memoFibonacci(n, memo) {
    memo = memo || {}
    if(memo[n]){
        console.log('[n]', n)
        console.log('memo[n]', memo[n])
        return memo[n]

    }
    if(n<=1){
        return 1
    }

    return memo[n] = memoFibonacci(n-1, memo)+ memoFibonacci(n-2, memo)
}

console.log(memoFibonacci(10))

// function fibonacci(n) {
//     if(n<=1){
//         return 1
//     }
//
//     return fibonacci(n-1)+ fibonacci(n-2)
// }
//
// console.log(fibonacci(100))