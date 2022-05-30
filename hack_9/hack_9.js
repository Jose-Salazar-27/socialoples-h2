/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let index = 0;


while(index < arr.length) {

    if(arr[index].charAt(0) === 'b') {
        result ++;
        index++;
    } else {
        index++
        continue;
    };

/*     if (arr[index].charAt(0) != 'b' ) {
        continue;
    } else{
        result++;
    }

    index++; */
};

console.log(result);
//export result
module.exports = result;