let arrayEquals = ['a', 'a', 'a', '4'];

function compare(arrayEquals) {
    for(var i = 0; i < arrayEquals.length - 1; i++) {
        if(arrayEquals[i] !== arrayEquals[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(compare(arrayEquals));