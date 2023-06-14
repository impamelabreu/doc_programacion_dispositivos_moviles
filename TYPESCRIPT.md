# The basic

"The Basic" es un lenguaje de programación de alto nivel y fácil de aprender que se desarrolló a principios de la década de 1960. Es considerado uno de los primeros lenguajes de programación accesibles para principiantes y se popularizó como una herramienta para enseñar programación en las décadas siguientes.

## Tipos básicos:

### • Number
Representa valores numéricos, ya sean enteros o de punto flotante de 64 bits.

### • String
Representa valores de texto.

También cubre los tipos literales, que permiten definir un tipo con un valor específico, y los tipos de unión, que permiten definir una variable que puede tener uno de varios tipos diferentes.

### • Comprobación estática de tipos
En TypeScript, se realiza una comprobación estática de tipos durante la compilación del código para detectar posibles errores y garantizar que los tipos se utilicen de manera coherente. La comprobación estática de tipos es una de las características clave de TypeScript que ayuda a mejorar la calidad y robustez del código. Cuando se escribe código en TypeScript, se pueden especificar los tipos de variables, parámetros de funciones, valores de retorno y otros elementos. El compilador de TypeScript analiza el código y verifica si se están utilizando los tipos de manera correcta y coherente.

### • Fallos excepcionales
En TypeScript, los fallos excepcionales pueden ocurrir cuando se producen errores en tiempo de ejecución que no pueden ser manejados de manera adecuada. Estos fallos pueden surgir debido a diversas razones, como errores de lógica, errores de programación o condiciones inesperadas.

Algunos ejemplos de fallos no excepcionales incluyen:
  •	  Acceder a una propiedad o método de un objeto que no existe.
  •	  Pasar un argumento de tipo incorrecto a una función.
  •	  Intentar asignar un valor de tipo incorrecto a una variable.
  •	  Usar una variable que no ha sido declarada o inicializada.

## Tipos de herramientas:

En TypeScript, existen varias herramientas que se pueden utilizar para mejorar la productividad y la calidad del código. Algunas de las herramientas más comunes son:

### • Compilador de TypeScript
Es una herramienta que convierte el código fuente escrito en TypeScript en código JavaScript, que puede ser ejecutado en cualquier entorno que admita JavaScript. El compilador realiza varias tareas, como la comprobación de tipos estática, la transpilación de características de TypeScript a JavaScript y la generación de archivos de salida.

### • Editor de código con soporte de TypeScript
Muchos editores de código, como Visual Studio Code, tienen soporte integrado para TypeScript.

### • Linter
También conocido como analizador estático de código, es una herramienta que ayuda a identificar y corregir posibles problemas en el código fuente. Su objetivo principal es mejorar la calidad y legibilidad del código, así como ayudar a mantener un estilo consistente en un proyecto.

### • Pruebas unitarias
Son un aspecto fundamental del desarrollo de software para garantizar que las unidades individuales de código funcionen correctamente. En TypeScript, puedes realizar pruebas unitarias utilizando diversas bibliotecas y herramientas de pruebas disponibles.

### • Depurador
Es una herramienta que permite a los desarrolladores ejecutar el código paso a paso y ver el estado de las variables y objetos en tiempo de ejecución.

### • Bundler
Son herramientas que permiten empaquetar el código TypeScript y sus dependencias en un archivo JavaScript único.

### • Gestor de paquetes
Los gestores de paquetes, como npm o yarn, son herramientas que permiten instalar y gestionar las dependencias del proyecto de forma fácil y automatizada.

### • Emitiendo con errores
Se refiere al proceso en el que el compilador de TypeScript detecta errores de sintaxis, errores de tipos u otros problemas en el código fuente y genera mensajes de error correspondientes durante la fase de compilación. Cuando se emite un error en TypeScript, el compilador detiene la compilación y muestra un mensaje de error en la línea de comando o en la interfaz del IDE que se está utilizando. Estos mensajes de error pueden incluir información sobre el tipo de error, la ubicación en el código donde se produjo y sugerencias para corregir el problema.

### •Tipos explícitos
En TypeScript, se utilizan para declarar y especificar el tipo de una variable, parámetro de función, valor de retorno o propiedad de objeto de manera explícita. Al proporcionar tipos explícitos, se mejora la legibilidad del código y se permite al compilador realizar comprobaciones estáticas de tipos.

# Everyday type

## Tipos cotidianos:
Esta sección vemos algunos tipos cotidianos y más avanzados que nos proporciona TypeScript. Algunos de estos tipos cotidianos incluyen:

### • Arrays
Una colección de elementos del mismo tipo. Puede ser declarado de dos maneras: usando la sintaxis de corchetes [] o utilizando el tipo genérico Array<T>
•	### Interfaces: una descripción de la forma de un objeto, que se puede usar para definir tipos personalizados y mejorar la legibilidad del código.
También cubre otros tipos cotidianos como funciones, tipo de objetos, tipos literales, tipos de unión, tipos de alias, primitivas menos comunes, entre otros.
  
## Las primitivas
En TypeScript, las primitivas son los tipos básicos que representan los valores más simples y comunes en la programación. Estos tipos primitivos son:
•	### String: representa una cadena de caracteres. Puede contener cualquier caracter, desde letras, números, símbolos y espacios, y se define con la palabra clave "string". Ejemplo:
  
### • Number
Representa un valor numérico, ya sea entero o decimal. Puede ser positivo, negativo o cero, y se define con la palabra clave "number". 
  
### • Boolean
Representa un valor lógico que puede ser verdadero o falso, y se define con la palabra clave "boolean".
  
### • Array
(también conocidos como arrays) son una estructura de datos muy útil que permite almacenar y manipular una colección de elementos del mismo tipo. Se pueden definir utilizando la sintaxis "tipoDeDato[]" y se pueden manipular utilizando una serie de métodos predefinidos.
  
### • Any
Representa cualquier tipo y permite el uso de valores de cualquier tipo sin restricciones de verificación de tipos. El uso de any debe evitarse en la medida de lo posible, ya que anula la verificación de tipos de TypeScript.
  
### • Funciones
En TypeScript, son bloques de código que se pueden ejecutar y que realizan una tarea específica. Las funciones pueden recibir parámetros (valores de entrada), realizar operaciones y devolver un resultado (valor de salida).
  
### • Tipos de objetos
Existen varios tipos de objetos que se pueden utilizar para definir variables y funciones más complejas, como Object, Interface y Class. Cada uno de estos tipos tiene sus propias características y sintaxis para definirlos, y se utilizan en función de las necesidades específicas de cada proyecto.
  
### • Tipos de Unión
Los tipos de unión son una característica importante de TypeScript que permite definir variables y parámetros con varios tipos posibles. Se utilizan con el símbolo "|" entre los tipos que se quieren unir, y son útiles para manejar situaciones en las que una variable o parámetro puede tener diferentes tipos en diferentes situaciones.
  
### • Tipo de alias
Los tipos de alias son una característica útil de TypeScript que permiten crear un nombre alternativo para un tipo existente. Se utilizan para definir tipos más complejos y legibles, y también facilitan la reutilización de tipos en diferentes partes del código. Se pueden utilizar para definir alias para tipos simples, objetos, arreglos, funciones y otros tipos de datos.
  
###  • Tipos literales
Los tipos literales permiten definir un tipo de dato específico que solo puede tomar un conjunto de valores concretos. Se utilizan para crear código más seguro y legible, y se pueden combinar con otros tipos de datos y tipos de unión para definir tipos más complejos.
  
### • Null y undefined
Los valores primitivos "null" y "undefined" son importantes en TypeScript para representar valores nulos o indefinidos, y para evitar errores en tiempo de ejecución al trabajar con variables que pueden ser nulas o indefinidas. Además, los operadores de "nullish coalescing" y "optional chaining" son útiles para manejar valores nulos o indefinidos de forma segura.
  
### • Primitivas menos comunes
TypeScript admite varios tipos de datos primitivos menos comunes, como "bigint" y "symbol" que pueden ser útiles en ciertas situaciones para crear código más seguro y flexible. Y es de suma importancia comprender los diferentes tipos de datos primitivos disponibles para poder utilizarlos de manera efectiva en el código.
  
# Narrowing
Narrowing, en TypeScript, se refiere a la capacidad de reducir el tipo de una variable o expresión en función de comprobaciones condicionales en tiempo de compilación. Esta característica es especialmente útil cuando se trabaja con tipos de datos unión (union types) y tipos de datos condicionales (conditional types).
  
El documento cubre varios mecanismos de reducción de tipos, incluyendo:
  
### • Typeof tipo guardias
Los "typeof tipo guardias" son una técnica para estrechar el tipo de una variable en TypeScript utilizando el operador "typeof" para obtener el tipo de una variable en tiempo de ejecución.  Se utiliza principalmente para realizar comprobaciones sobre los tipos de datos primitivos, como string, number, boolean y symbol. Permite al compilador inferir y estrechar el tipo de una variable en función del resultado de typeof.
  
### • Estrechamiento de veracidad
Se utiliza para estrechar el tipo de una variable en función de su valor "verdadero" o "falso". Esto se basa en el hecho de que, en JavaScript, algunos valores se evalúan como "verdaderos" y otros como "falsos" cuando se utilizan en una expresión booleana. El estrechamiento de veracidad se puede utilizar para mejorar la seguridad y la legibilidad del código en TypeScript.
  
### • Reducción de la igualdad
Se refiere a la capacidad del compilador para inferir un tipo más específico basado en comprobaciones de veracidad (truthiness) de una expresión condicional. Cuando se realiza una comprobación de veracidad en una expresión condicional, el compilador puede ajustar (estrechar) el tipo de una variable en función del resultado de la evaluación de la expresión. Esto permite al compilador inferir con mayor precisión el tipo de la variable en cada rama condicional.
  
### El “in” estrechamiento del operador
Se basa en el uso del operador in para comprobar la existencia de una propiedad en un objeto. Cuando se utiliza el operador in en una expresión condicional, el compilador de TypeScript puede inferir el tipo más específico para una variable en función de si una propiedad específica está presente en un objeto.
  
### Instanceof estrechamiento
Permite inferir y estrechar el tipo de una variable en función de si es una instancia de una clase específica. Se utiliza para comprobar si un objeto es una instancia de una clase determinada. Al utilizar instanceof en una expresión condicional, el compilador de TypeScript puede ajustar el tipo de una variable en función del resultado de la evaluación.
  
### • Análisis de flujo de control
Se refiere al proceso en el cual el compilador rastrea y comprende cómo fluye el control del programa a través de diferentes caminos en tiempo de compilación. Esto permite al compilador inferir y ajustar los tipos de las variables en función de las condiciones y acciones que se realizan en el código.
  
Durante el análisis de flujo de control, el compilador examina las estructuras condicionales, bucles y otros bloques de código para determinar qué rutas de ejecución son posibles y cómo afectan a las variables. Esto permite realizar inferencias de tipo más precisas y realizar estrechamientos de tipo en base a los resultados de las comprobaciones de flujo de control.
  
### • Uso de predicados de tipo
Se refiere a la capacidad de definir y utilizar funciones de tipo que actúan como comprobadores de tipos personalizados en tiempo de compilación. Estos predicados de tipo permiten realizar comprobaciones más complejas y específicas sobre el tipo de una variable.
  
Un predicado de tipo es una función que tiene como objetivo comprobar si un valor dado cumple con ciertas características o restricciones. El resultado de un predicado de tipo es un valor booleano (true o false) que indica si el valor cumple o no con las condiciones definidas.
  
### • Funciones de aserción
Son funciones personalizadas que permiten al programador realizar aserciones de tipo explícitas sobre los valores en tiempo de compilación. Estas funciones se utilizan para informar al compilador de TypeScript sobre el tipo de una variable de una manera que no puede ser inferida automáticamente.
  
Una función de aserción es una función que toma un valor como argumento y devuelve ese mismo valor con un tipo específico. Al utilizar una función de aserción, el programador le dice al compilador que confíe en que el valor tiene el tipo especificado, incluso si la inferencia de tipo automática no lo determina de manera precisa.
