/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];

for (let index = 0; index < arr.length; index++) {
/*    if(index % 2 == 1 ) { //Porque no se usa isInterger()
      result.push(arr[index]);
   } else {
      continue;
   } */

   if(!Number.isInteger(index/2)) {
      result.push(arr[index]);
   } else {
      continue;
   };
}

console.log(result)

//export result
module.exports = result;