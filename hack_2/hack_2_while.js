/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

let index = 1;

while(index < 6) {
    result.push(index)
    index++;
}

console.log(result);

//export result
module.exports = result;