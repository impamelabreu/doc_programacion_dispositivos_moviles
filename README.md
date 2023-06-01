# Frameworks más populares para desarrollo de aplicaciones móviles

Este repositorio contiene información sobre varios frameworks populares utilizados para el desarrollo de aplicaciones móviles.

## Comparación de los frameworks

| Framework   | Lenguaje Base            | Desarrollado por | Ventajas          | Desventajas      |
|-------------|--------------------------|------------------|-------------------|------------------|
| Flutter     | Dart                     | Google           |Alto rendimiento, hot reload, widgets personalizables, soporte para Android e iOS, amplia comunidad y documentación.| Menor número de bibliotecas y componentes en comparación con otras opciones.|
| Xamarin     | C#                       | Microsoft        |Amplio soporte de plataforma, integración con herramientas de Microsoft, acceso directo a APIs nativas.|Mayor curva de aprendizaje, dependencia de la plataforma y menor rendimiento en comparación con las aplicaciones nativas.|
| React Native| JavaScript               | Facebook         |Amplia comunidad, hot reload, rendimiento cercano a las aplicaciones nativas, soporte para Android e iOS.|Dependencia de terceros para ciertas características, menor acceso a las API nativas y posible complejidad al integrar bibliotecas nativas.|
| Ionic       | HTML, CSS, JavaScript    | Ionic Team       |Fácil acceso a características web, amplia variedad de plugins, soporte multiplataforma, rápida iteración de desarrollo.| Rendimiento ligeramente inferior en comparación con las aplicaciones nativas, dependencia del rendimiento del navegador.|
| Swiftic     | N/A                      | Apple            |Diseño fácil de usar, características específicas para el comercio electrónico, opciones de marketing integradas.|Limitado en términos de personalización y funcionalidad más allá del comercio electrónico, menos opciones de plataforma en comparación con otras herramientas.|

> Note: Cada framework y herramienta tiene sus propias características, ventajas y desventajas. La elección adecuada dependerá de los requisitos del proyecto, las habilidades del equipo de desarrollo y las necesidades específicas de la aplicación. Es recomendable evaluar detenidamente cada opción antes de tomar una decisión.

# Patrones de Diseño

En el ámbito de la programación y el desarrollo de software, son soluciones reutilizables para problemas comunes que los programadores suelen enfrentar durante el diseño y la implementación de aplicaciones. Estos patrones proporcionan un enfoque probado y estructurado para resolver problemas específicos, lo que ayuda a mejorar la eficiencia, la mantenibilidad y la escalabilidad del código.

Los patrones de diseño son una forma de capturar y comunicar soluciones de diseño exitosas y se basan en la idea de que muchos problemas de diseño pueden ser abordados de manera similar en diferentes contextos. Los patrones de diseño se han recopilado y documentado a lo largo de los años por expertos en la industria del software.

Existen varios tipos de patrones de diseño, que se clasifican en tres categorías principales:

## Patrones de Creacionales: 
Son una categoría de patrones de diseño que se centran en la creación de objetos de manera adecuada y flexible. Estos patrones proporcionan soluciones para los problemas asociados con la creación de objetos y la gestión de su ciclo de vida. Se pueden clasificar en:

### • Factory Method Pattern: 
Es un patrón de diseño creacional que se utiliza para crear objetos sin especificar explícitamente la clase exacta del objeto que se creará. En lugar de crear directamente un objeto, el patrón Factory Method define un método en una clase base (a menudo llamado "fábrica") que se encarga de la creación del objeto. La subclase de la clase base puede entonces sobrescribir el método de fábrica para devolver una instancia de la clase concreta deseada.

### •	Abstract Factory Pattern:

Es un patrón de diseño creacional que proporciona una interfaz para crear familias de objetos relacionados sin especificar las clases concretas. Es una extensión del patrón Factory Method. Se utiliza cuando se necesita crear un conjunto de objetos que pertenecen a una familia o grupo relacionado. En lugar de crear cada objeto de forma individual, el patrón Abstract Factory proporciona una fábrica abstracta que encapsula la creación de estos objetos. Las subclases de esta fábrica abstracta implementarán la lógica para crear los objetos concretos de la familia.

### •	Builder Pattern:

Es un patrón de diseño creacional que se utiliza para construir objetos complejos paso a paso. Este patrón separa la construcción de un objeto complejo de su representación, permitiendo que el mismo proceso de construcción pueda crear diferentes representaciones del objeto. Se utiliza cuando se necesita crear un objeto complejo compuesto por múltiples partes, y se quiere tener un proceso de construcción flexible y controlado. En lugar de tener un constructor con muchos parámetros o métodos setter para configurar todas las propiedades del objeto, el Builder proporciona una interfaz clara y estructurada para construir el objeto paso a paso.

### •	Prototype Pattern:

Es un patrón de diseño creacional que se utiliza para crear nuevos objetos a partir de un objeto existente, conocido como prototipo. En lugar de crear objetos desde cero utilizando constructores, el patrón Prototype permite clonar un objeto existente y personalizarlo según sea necesario. Prototype equiere que el objeto a clonar implemente una interfaz común que defina un método para clonarse a sí mismo. De esta manera, cualquier objeto que implemente esta interfaz puede ser clonado y utilizado como prototipo.

### •	Singleton Pattern:

Es un patrón de diseño creacional que se utiliza para garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global a esa instancia. Se utiliza en situaciones en las que se desea que una clase tenga una única instancia en todo el sistema y se quiera acceder a ella desde múltiples partes del código. Algunos casos de uso comunes incluyen la configuración global, la conexión a una base de datos, la gestión de recursos compartidos, el registro de eventos, entre otros.

## Patrones Estructurales:
Son una categoría de patrones de diseño que se centran en la composición de clases y objetos para formar estructuras más grandes y complejas. Estos patrones se utilizan para establecer relaciones entre objetos, definir cómo se relacionan y comunican entre sí, y facilitar la construcción de sistemas más flexibles y extensibles.

## Patrones de Comportamiento:
Son una categoría de patrones de diseño que se centran en cómo los objetos interactúan y distribuyen la responsabilidad de las tareas entre ellos. Estos patrones están destinados a definir la comunicación y la colaboración entre objetos, lo que permite que los sistemas sean más flexibles, extensibles y adaptables a cambios en los requisitos y comportamientos. 
