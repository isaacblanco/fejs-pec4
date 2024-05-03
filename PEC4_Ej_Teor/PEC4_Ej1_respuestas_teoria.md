# PEC 4 - Ejercicio 1

## ng new <nombre-del-proyecto>

Crea un nuevo espacio de trabajo Angular y un proyecto de aplicación con el nombre especificado.
Al inicio pide opciones de configuración (enrutamiento, formato de hoja de estilos, etc.).
Inicializa la estructura del proyecto con las carpetas y archivos esenciales.
Instala las dependencias necesarias.

## ng generate component <nombre-del-componente>

Genera un nuevo componente Angular dentro de tu proyecto existente.
Crea el archivo TypeScript del componente (<nombre-del-componente>.component.ts), la plantilla HTML (<nombre-del-componente>.component.html) y la hoja de estilos CSS (<nombre-del-componente>.component.css).
Opcionalmente genera un archivo spec (<nombre-del-componente>.component.spec.ts) para pruebas unitarias.

Un **componente** es un bloque modular de código que se ocupa de una parte de la interfaz de usuario, combina HTML, CSS y TypeScript para crear vistas interactivas.

## ng generate directive <nombre-directiva>

Crea una nueva directiva Angular dentro de tu proyecto.
Genera el archivo TypeScript de la directiva (<nombre-directiva>.directiva.ts).
Proporciona una forma reutilizable de manipular elementos DOM o vinculación de datos en plantillas.

Una **directiva** modifica el comportamiento de los elementos HTML en la plantilla, sirve para manipular el DOM o aplicar directivas estructurales.

## ng generate enum <nombre-de-la-enumeracion>

Crea una nueva enumeración TypeScript dentro de su proyecto.
Genera un archivo TypeScript (<nombre-del-enum>.enum.ts) que contiene un conjunto de constantes con nombre.
Útil para definir opciones o valores fijos que mejoran la legibilidad y mantenibilidad del código.

Un **enumerado** es un conjunto de nombres y valores, un conjunto de constantes que defines valores claramente.

## ng generate guard <nombre-de-la-guardia>

Genera una nueva guardia Angular dentro de tu proyecto.
Crea el archivo TypeScript de la guardia (<guard-name>.guard.ts).
Proporciona un mecanismo para controlar el acceso a la ruta basado en condiciones específicas.

Los **guard** se ocupan de controlar el acceso a rutas especificas de la aplicación según unas condiciones que permiten al usuario seguir o no en la navegación.

## ng generate interface <nombre-de-la-interfaz>

Crea una nueva interfaz TypeScript dentro de su proyecto.
Genera un archivo TypeScript (<nombre-de-la-interfaz>.interface.ts) que define una estructura para los objetos.
Garantiza la seguridad de tipos y la claridad en tu código.

Un **interface** define el esqueleto de un objeto, sus propiedades y tipos de datos, garantiza compatibilidad y mejora la legibilidad.

## ng generate pipe <nombre-de-la-tubería>

Genera una nueva tubería Angular dentro de tu proyecto.
Crea el archivo TypeScript de la tubería (<nombre-de-la-tubería>.pipe.ts).
Proporciona una forma de transformar valores de datos en plantillas para su visualización o manipulación.

Las **pipe** son transformadores de datos, filtran los datos o modifican su formato, p. ej. con fechas, números, strings u otros tipos de datos.

## ng generate service <nombre-del-servicio>

Genera un nuevo servicio Angular dentro de tu proyecto.
Crea el archivo TypeScript del servicio (<nombre-del-servicio>.service.ts).
Encapsula la lógica de negocio y el acceso a datos, mejorando la organización y reutilización del código.

Los **service** son códigos reutilizables que encapsulan la lógica y el consumo de datos de forma eficiente y organizada.

## ng serve

Inicia el servidor de desarrollo de Angular.
Compila el código de tu aplicación y lo sirve localmente (normalmente en http://localhost:4200).
Habilita la recarga en caliente, actualizando automáticamente el navegador cada vez que se realicen cambios en tu código.

## ng test

Ejecuta pruebas unitarias para tu aplicación Angular.
Requiere configurar un framework de pruebas como Jasmine y Karma.
Ayuda a asegurar la calidad del código y a detectar errores en las primeras fases del proceso de desarrollo.

## ng version

Muestra la versión actualmente instalada de Angular CLI.
Útil para comprobar la compatibilidad con los requisitos del proyecto o para mantenerse actualizado.
