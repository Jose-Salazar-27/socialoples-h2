/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for (let index = 0; index <= 7; index++) {

    let itsEven = index/2;

    if(Number.isInteger(itsEven)) continue;

    result.push(index)

}

console.log(result)
//export result
module.exports = result;

// console.log(i.Number.isInterger(i))