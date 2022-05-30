/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */

let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let index = 0;

while (index < arr.length) {
    
    const capitalizeFunction = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    result.push(capitalizeFunction(arr[index]))
    index++;
};

console.log(result);
//export result
module.exports = result;