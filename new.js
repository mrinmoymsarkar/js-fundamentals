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

let names = {
    firstName: 'Chirs',
    lastName: 'Moltisanti'
}

let printShow = function (showName, showName2) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + showName + ' ' + showName2 )
}

Function.prototype.myBind = function (...args){
   let obj = this,
   params = args.slice(1);
    return function (...args2){
       console.log()
        return obj.apply(args[0],[...params,...args2])
    }
}

let printName = printShow.myBind(names,"Sopranos", )
printName("Kim's Convinience");

