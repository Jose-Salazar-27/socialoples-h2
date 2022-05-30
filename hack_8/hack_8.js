/*
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */

let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let index = 1;

while(index <= 3) {

    if(arr[index] != 'qux'){
        function reWrite (string) {
            return string.charAt(0) + '@' + string.charAt(2);
        };
        result.push(reWrite(arr[index]));

    } else {
        result.push(arr[index].toLocaleUpperCase());
    };

    index++;
}

console.log(result);

//export result
module.exports = result;