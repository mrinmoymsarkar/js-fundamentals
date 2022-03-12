//self invoking functions | closures
const counter = (function(){
let counter = 0;
return function (){
return ++counter
}})()

//fix for loop setitmeout fix
function forLoop() {
    for (var i = 0; i <= 2; i++) {
         console.log('What is this')
        function fix(i){
        setTimeout(()=>{
            console.log(i)
        }, 0)
    }
        fix(i)
    }
}
