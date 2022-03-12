//self invoking functions | closures
const counter = (function(){
let counter = 0;
return function (){
return ++counter
}})()
