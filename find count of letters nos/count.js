//find number of charaters or nos
function charCount(str) {
    var result = {}
    for (var i = 0; str.length; i++) {
        var char = str[i]
        if(result[char]>0){
            result[char]++
        }
        else{
            result[char] = 1
        };
    }
    return result;
}

charCount('hello')
