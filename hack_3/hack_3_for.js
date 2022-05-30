/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

for (let index = 5; index >= 1; index--){
    result.push(index);
}

console.log(result)
//export result
module.exports = result;