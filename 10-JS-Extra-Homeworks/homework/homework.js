// No cambies los nombres de las funciones.
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
//var obj = {'D':1, 'B':2,'C':3}

function deObjetoAmatriz(objeto){
  var nArray = []
  var llaves = Object.keys(objeto);
  for (i=0; i < llaves.length; i++){
    nArray.push([ llaves[i] , objeto[llaves[i]] ]);
  }
  return(nArray);
  
  }
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
  
  
  function numberOfCharacters(string) {
  
  var objeto = {}
  for (i=0; i<string.length; i++){
  var letra = string[i]
  
  if (objeto[letra] === undefined){
    objeto[letra] = 1
      }
    else{
    objeto[letra] +=1
    }
  }
  return objeto
  }
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
  
  function capToFront(s) {
  var mayus  = ''
  var min = ''
    for (var i= 0; i < s.length; i++ ){
      if(s[i] === s[i].toUpperCase()){
        mayus += s[i]
      }
        else{
          min += s[i]
        }
    }
  return mayus + min;
  }
  
  
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    function asAmirror(str) {
    var reverseFrase = str.split(" ").map(function(string){
       let strReversed = ''
       for (var i= string.length-1; i>=0; i--){
         strReversed = strReversed + string [i]
       }
       return strReversed
    })
        return reverseFrase.join(' ');
    }
      
   
  
  
  function capicua(numero){
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
  var str = numero.toString()
  var str2 = asAmirror(str);
  if(str === str2){
    return 'Es capicua'
  }
  return 'No es capicua'
  }
  
  
  function deleteAbc(cadena){
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
  var str = '';
  for (let i = 0; i < cadena.length; i++){
      if(cadena[i] !== "a" && cadena[i] !== "b"&& cadena[i] !== "c"){
        str = str + cadena[i]
      }
  }
  
  
  return str
  }
  
  
  function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
  for (let i=0; i < arr.length; i++){
    var aux = arr[i];
    for(let j= 1; j < arr.length; j++){  //empieza de la posicion siguiente al primer for
      if(aux.length > arr[j].length){
      aux = arr[j];
      }
    }
    //arr[i]
  }
  return ;
  }
  
  
  function buscoInterseccion(arreglo1, arreglo2){
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
  var arr = []
  for (i=0;i<arreglo1.length;i++){
    for(j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        arr.push(arreglo1[i])
      }
    }
  }
  return arr
  }
  
  
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

