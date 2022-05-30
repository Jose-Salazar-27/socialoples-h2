/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let index = 0;


while(index <= 7){

    //let itsEven = index/2; // Preguntar porque si es una variable dentro del bloque, funciona bien y porque si esta fuera del while no
    if(!Number.isInteger(index/2)){
        result.push(index);
        index++;
    } else {
        index++;
        continue;
    }
};

console.log(result);


//export result
module.exports = result;