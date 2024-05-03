# PEC4 - Ejercicio 2 - Respuestas

## Pregunta 1

**¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce?**

```
ng new ecommerce
```

### Ficheros en la configuración raíz del proyecto

**README.md**
Archivo Markdown que contiene información sobre el proyecto, como instrucciones de instalación, uso y descripción general.

**angular.json**
Contiene la onfiguración específica de Angular para el proyecto, incluyendo la configuración de la aplicación, las bibliotecas, los estilos y las opciones de compilación.

**package.json**
Es un manifiesto del proyecto que define las dependencias de Node.js y NPM, los scripts de ejecución y los metadatos del proyecto

**tsconfig.app.json**
Aquí se pone una configuración específica de TypeScript para la compilación del código de la aplicación Angular. Se definen las opciones como el módulo de destino, los objetos globales y la resolución de rutas

**tsconfig.json**
Contiene una configuración general de TypeScript para todo el proyecto, incluyendo opciones como el objetivo de compilación, la comprobación de tipos y la resolución de rutas.

**tsconfig.spec.json**
Aquí nos encontramos la configuración específica de TypeScript para las pruebas unitarias del proyecto. Hay listadas las opciones como la ubicación de los archivos de prueba, la cobertura de código y las opciones de formato

### Directorio node_modules

Contiene las dependencias de Node.js y NPM necesarias para ejecutar la aplicación. Todas estas dependencias se instalan automáticamente mediante el comando _npm install_.

### Directorio src

**index.html**

Página principal de la aplicación web, donde arranca. Aquí tendremos la estructura básica de la página HTML y carga los scripts necesarios

**main.ts**

Es el punto de partida de la aplicación Angular. Donde se carga el módulo principal de la aplicación y configura el arranque de la app.

**styles.css**

Son lo estilos de la aplicación (página web), globales a toda la aplicación.

### Directorio src/assets

Aquí se almacenan todos los recursos estáticos como las imágenes, fuentes y archivos de texto, que serán referenciados desde el HTML y los CSS.

### Directorio src/app

Dentro de este directorio encontraremos el código fuente de la aplicación en angular. Incluye los componentes, servicios, módulos, rutas, etc.

**app.component.\***

Estos ficheros representan el componente principal de la aplicación Angular, que incluyen el código TypeScript (app.component.ts), la plantilla HTML (app.component.html) y los estilos CSS (app.component.css).

**app.module.ts**

Aquí se encuentra el módulo principal de la aplicación Angular. Donde se especifican los componentes, servicios y otras dependencias que se usará en la aplicación.

## Pregunta 2

### @NgModule en app.module.ts

El decorador @NgModule define un módulo Angular, que es un bloque modular de código que agrupa componentes, servicios, directivas y otros elementos relacionados. Las propiedades principales son:

**a) declarations**

Es una lista de componentes, directivas y pipes que pertenecen al módulo, estos elementos se declaran aquí para que puedan ser utilizados en las plantillas de otros componentes.

**b) imports**

Especifica una lista de módulos Angular que se importan y se utilizan en este módulo, de forma que se permite acceder a componentes, servicios y otras funcionalidades de otros módulos.

**c) providers**

Aquí se encuentra una lista de servicios y otros objetos que se inyectan en los componentes y otros elementos del módulo.
Estos proveedores son accesibles a través de la inyección de dependencias.

**d) Boostrap**

Indica el componente raíz de la aplicación que se debe cargar al iniciar la aplicación. Este componente es el punto de partida de la interfaz de usuario.

### @Component en app.component.ts

El decorador @Component define un componente Angular (el grupo: html, codigo, estilos y test), que es un bloque reutilizable de código que representa una parte específica de la interfaz de usuario. Las propiedades principales son:

**a) selector:**

Indica un selector CSS que identifica los elementos HTML donde se debe insertar el componente. Este selector se utiliza en las plantillas para indicar dónde se debe mostrar el componente que suele ser página asociada.

**b) templateUrl:**

Aquí se especifica la ruta de un archivo HTML que define la plantilla del componente, esta plantilla contiene el código HTML que representa la interfaz de usuario del componente.

**c) styleUrls:**

Aquí encontramos una lista de rutas de archivos CSS que contienen los estilos del componente. Estos estilos se aplican a la plantilla del componente para definir su apariencia.

## Pregunta 3

**¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls?**

Si, un ejemplo:

```typescript
@Component({
  selector: "componente",
  template: `
    <h1>Titulo</h1>
    <p>Contenido</p>
  `,
  styles: [
    `
      h1 {
        color: #ff007e;
      }
      p {
        color: #ffbd00;
      }
    `,
  ],
})
export class Componente {}
```

**¿Es recomendable hacer esto?**

Dependera del caso, tiene sus ventajas y desventajas.

Personalmente soy reacio a este tipo de usos, pero si es usa es simple, autocontenido, sin necesidad de archivos externos, pero en componentes complejos puede generar archivos muy largos, o si comparte algún estilo es repetir, así como incluir demasiados estilos en línea pueden afectar el rendimiento.
