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
