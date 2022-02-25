let a  = [1,2,[3,4],[3,[5]]];
let flatArray = [].concat(...a)
console.log(flatArray)