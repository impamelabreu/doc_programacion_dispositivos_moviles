/* ------ THE BASIC ------ */

/* ... String ... */

const message = "Hello World!";
message();
/* Este código es erróneo ya que no recibe ninguna función string a la cual llamar con la constante. */ 

const message:string = "Hello World!";
console.log(message);
/* Esta es la opción correcta de la salida del mensaje, ya que se debe llamar a string como una función. */


/* ... Comprobación estática de tipos ... */

const message = "hello!";
message();
/* Este código es erróneo porque la declaración no llama a la función tipo string, se debe utilizar el mismo método del código anterior para su solución. */


/* ... Fallos no excepcionales ... */

function flipCoin() {
  return Math.random < 0.5;
}
/* Este código detecta error en el signo de menor, porque al operador se debe aplicar () antes del signo, seguido del número y un signo de interrogación, 
después se establece las opciones de respuesta. Asi mismo, antes que todo se debe llamar a la función flipCoin. */

const resultado = flipCoin();
console.log(resultado);
function flipCoin() {
  return Math.random() < 0.5 ? "cara" : "cruz";
}
/* Despues que se llama la función FlipCoin y se agregue el operador correctamente, se presentara el resultado del código en su ejecución. */


/* ... Compilador de TypeScript ... */

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
greet("Brendan");
/* La función ha sido definida con 2 parámetros, y se está llamando únicamente con un parámetro. Además, al definir la función, no se está definiendo el 
tipo de “person” ni “date”, por lo que debemos especificar que “person” se trata de un string, y date de un objeto Date(). Por otro lado, debemos al momento 
de llamar la función, debemos construir un Date con newDate(), porque de lo contrario, intentaría devolver un archivo string. */

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", Date());
/* Al aplicar la forma correcta del código, este mandará un saludo al nombre asignado junto con la fecha. */



/* ------ EVERYDAY TYPE ------ */

### • Any
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
/* Se está intentando llamar el método “foo()” en el objeto {x:0} en el cual no tiene ningún método de llamado, por lo cual se elimina esa línea código, al igual 
que el obj() ya que, se está llamando como una función y es un objeto. Además , “const n: number = obj;” es una cadena de texto por lo que no se puede asignar 
variable numérica, así que, se debe cambiar la cadena de texto a numero utilizando parseInt(). Finalmente, hemos impreso el valor de n en la consola. */

let obj: any = { x: 0 };
obj.bar = 100;
obj = "hello";
const n: number = parseInt(obj);
console.log(n);


/* ... Anotaciones de tipo de parámetro ... */

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(42);
/* El argumento greet es de tipo string, por lo cual, dará error si se coloca parámetros numéricos.*/

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(Pamela);


/* ... Anotaciones de tipo de retorno ... */

function getFavoriteNumber(): number {
  return 26;
}
/* Se reemplaza en return ya que no se necesita este tipo de retorno, sino que se debe declarar la constante para así presentar el numero favorito.*/ 

function getFavoriteNumber() {
  return 26;
}
const favoriteNumber = getFavoriteNumber();
console.log("Mi número favorito es: " + favoriteNumber);


/* ... Funciones anónimas ... */

const names = ["Alice", "Bob", "Eve"];
 
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
names.forEach((s) => {
  console.log(s.toUpperCase());
});
/* Se tiene dos variantes de la función de devolución de llamada (callback) que se pasan como argumento al método forEach(): una función anónima y una 
función de flecha (arrow function). Ambas variantes lograrán el mismo resultado.*/


/* ... Tipos de objetos ... */

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
/*E l código define una función printCoord que recibe un objeto como parámetro. El objeto debe tener propiedades x y y, ambas de tipo number. Luego, la 
función imprime los valores de x e y en la consola. */


/* ... Tipos de unión ... */

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}
/* El código es correcto, solo se agrega las declaraciones de los nombres. */

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}
welcomePeople(["Alice", "Bob", "Eve"]); 
welcomePeople("John");


/* ... Tipos de alias ... */

type Point = {
  x: number;
  y: number;
};
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
/*El código es correcto, muestra los valores de x e y del objeto { x: 100, y: 100 } en la consola.*/


/* ... Aserciones ... */

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
/*Se utiliza para obtener una referencia al elemento del DOM con el ID "main_canvas" y asignarlo a la variable myCanvas como un objeto de tipo HTMLCanvasElement.*/


/* ... Tipos literales ... */

const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
/* Se define un objeto req con las propiedades url y method. Además, se utiliza la palabra clave as const para hacer que las propiedades del objeto sean de solo 
lectura, lo que significa que no se les puede asignar nuevos valores.*/ 


/* ... Null y undefined ... */

function doSomething(x: string | null) {
  if (x === null) {
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
/* Dependiendo del valor que pase para x, se mostrará el saludo correspondiente o no se realizará ninguna acción adicional.*/

function doSomething(x: string | null) {
  if (x === null) {
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
doSomething("John");
doSomething(null);


/* ... Primitivas menos comunes ... */

const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
}
/* El código es erróneo, el bloque if no se ejecutará porque la condición firstName === secondName es falsa.*/


/* ------ NARROWING ------ */

/* ... Typeof tipo guardias ... */

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
  }
}
/* La función llamada printAll toma un parámetro llamado strs, el cual puede ser una cadena, una matriz de cadenas o null. La función imprime todos los 
elementos de strs si strs es un objeto (es decir, una matriz de cadenas), imprime strs si es una cadena y no realiza ninguna acción si es null. */

function printAll(strs: string | string[] | null) {
  if (Array.isArray(strs)) {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
/*  Se utilizó Array.isArray(strs) en lugar de typeof strs === "object" para verificar si strs es una matriz. Array.isArray es una función incorporada en 
JavaScript que devuelve true si el argumento dado es una matriz y false en caso contrario. */


 /* ... Estrechamiento de veracidad ... */
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
/* Se toma dos parámetros: values y factor. values es una matriz de números o undefined, y factor es un número. La función multiplica cada elemento de 
la matriz values por el factor y devuelve una nueva matriz con los resultados. Si values es undefined, la función devuelve undefined. */

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}
/* La función utiliza el operador ! en la condición !values para verificar si values es undefined o null. Si es así, se devuelve directamente values sin 
realizar ninguna operación. */


/* ... Reducción de la igualdad ... */ 
function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);              
    }
  }
}
/* Es una versión modificada de la función printAll. Se agregó una condición adicional strs !== null para verificar si strs no es null antes de realizar 
las comprobaciones de tipo. */

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (Array.isArray(strs)) {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
/* En esta solución, se utilizó Array.isArray(strs) en lugar de typeof strs === "object" para verificar si strs es una matriz. Además, se mantiene la 
comprobación typeof strs === "string" en el segundo if para imprimir directamente strs si es una cadena. */


/* ... El “in” estrechamiento del operador ... */
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
/* La función move  toma un parámetro llamado animal, que puede ser de tipo Fish o Bird. La función verifica si animal tiene la propiedad swim utilizando 
el operador in. Si animal tiene la propiedad swim, se llama al método swim() en animal. Si animal no tiene la propiedad swim, se asume que tiene la propiedad 
fly y se llama al método fly() en animal. */ 

type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();  }
}
/*  Aquí se mantiene la estructura y la lógica de tu función move. La diferencia es que en lugar de devolver el resultado de los métodos swim() o fly(), se 
invoca directamente el método correspondiente dentro del bloque condicional. */ 


/* ... Instanceof estrechamiento ... */

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());  }
}
/* La función logValue toma un parámetro llamado x, que puede ser de tipo Date o string. Verifica si x es una instancia de Date utilizando el operador instanceof. 
Si x es una instancia de Date, se llama al método toUTCString() en x y se imprime el resultado. Si x no es una instancia de Date, se asume que es una cadena y se
llama al método toUpperCase() en x y se imprime el resultado. */ 


/* ... Tareas ... */
let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
console.log(x);

x = "goodbye!";
console.log(x);
/* El código crea una variable x y la inicializa con un valor condicional. Si el resultado de Math.random() es menor que 0.5, x se establecerá en el número 10. 
De lo contrario, x se establecerá en la cadena "hello world!". Luego, se asigna un nuevo valor a x, estableciéndolo en 1, y se le asigna otro nuevo valor a x, 
estableciéndolo en la cadena "goodbye!", y se imprime. */ 


/* ... Análisis de flujo de control ... */ 

function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
  console.log(x);
 
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);

  } else {
    x = 100;
    console.log(x);
  }
  return x;
}
/* La función example crea una variable x que puede ser de tipo string, number o boolean. Luego, se asigna a x un valor booleano basado en si el resultado de 
Math.random() es menor que 0.5. A continuación, se imprime el valor de x en la consola. Después, se realiza una verificación condicional utilizando Math.random() 
nuevamente. Si el resultado es menor que 0.5, x se establece en la cadena "hello" y se imprime en la consola. Si el resultado es mayor o igual que 0.5, x 
e establece en el número 100 y se imprime en la consola. Finalmente, se devuelve el valor de x al final de la función. */


/* ... Uso de predicados de tipo ... */

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}


/* ... Sindicatos discriminados ... */

interface Circle {
  kind: "circle";
  radius: number;
} 
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;
/* Las interfaces Circle y Square definen la estructura de los objetos de tipo Circle y Square, respectivamente. Ambas interfaces tienen propiedades 
específicas para cada forma, como radius para Circle y sideLength para Square. */


/* ... Comprobacion de exhaustividad ... */

type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
/* El codigo da error porque no se han manejado todos los casos posibles, como es el caso de exhaustiveChek, donde el tipo “any” no se le puede asginar a 
un tipo “never”. */

