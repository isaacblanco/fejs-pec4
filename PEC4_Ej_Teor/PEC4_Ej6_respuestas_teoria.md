# PEC3 - Ejercicio 6

## Pregunta 1. Tipos de encapsulación de los estilos

Cuando hablamos de **style encapsulation** en los componentes hay que diferenciar tres tipos: cuando se emula, cuando se hace un Shadow DOM y si no se aplica "none". Se especifica en el fichero del componente, en la opción de encapsulation:

- encapsulation: ViewEncapsulation.Emulated
- encapsulation: ViewEncapsulation.ShadowDom
- encapsulation: ViewEncapsulation.None

La **encapsulación emulada** se hace por defecto, agregando un prefijo especifico, así se evitan conflictos directos con otros estilos

```CSS
.my-component {
  background-color: #f0f0f0;
  padding: 20px;
}

<my-component></my-component>
```

Otra forma es la **encapsulación Shadow DOM** que consiste en hacer los estilos internos al componente, no accesibles desde fuera.

```CSS
:host {
  display: block;
  background-color: #f0f0f0;
  padding: 20px;
}
```

Si no se aplica ninguna encapsulación corremos el riesgo de que los estilos se propagen al resto si usamos nombres relativamente genericos

## Pregunta 2. Shadow DOM

Shadow DOM es una técnica del navegador web que permite a los componentes web encapsular su propio estilo y estructura DOM, creando un sub árbol DOM aislado, no accesible desde fuera. Algunas características son:

**Encapsulación** donde os estilos internos no se ven afectados por estilos externos, y viceversa. Así los componentes cuentan con una apariencia consistente en cualquier lugar de la página.
**Ámbito local para JavaScript** ademas \eEl código JavaScript dentro de un Shadow DOM no afecta al resto de la página, lo que da mayor seguridad y modularidad.
**Simplificación del DOM**, ya que proporciona una estructura de código más modular y clara, lo que facilita el mantenimiento y la reutilización de componentes.
Finalmente, el **uso de slots** permite componer interfaces utilizando "slots", lo que da mayor flexibilidad en la creación de componentes reutilizables.

## Pregunta 3. changeDetection

En Angular, la detección de cambios (_changeDetection_) es el mecanismo mediante el cual el framework detecta cambios en los datos de los componentes y actualiza el DOM en consecuencia. Esto garantiza que la vista mostrada al usuario refleje con precisión el estado actual de los datos de la aplicación.

Gracias a ello, cuenta con unos **aspectos clave**

- Funciona en **Automático**, se detectan y activan automáticamente la detección de cambios cuando se producen cambios en los datos.
- Es **eficaz**, dado que los algoritmos de detección de cambios están optimizados para minimizar la sobrecarga de rendimiento.
- Es muy **configurable**, permitiendo a los desarrolladores pueden personalizar las estrategias de detección de cambios para escenarios específicos.

Con ello conseguimos los siguientes **propósitos**

- Mantener la coherencia entre datos y vistas: Mantiene el DOM sincronizado con los cambios de datos.
- Optimizar el rendimiento: Evita actualizaciones innecesarias del DOM, mejorando la capacidad de respuesta.
- Mejorar la experiencia del usuario: Garantiza una aplicación fluida y con capacidad de respuesta.

¿Qué se obtiene con ello?

- Las manipulaciones DOM son reducidas al minimizar las actualizaciones innecesarias, mejorando el rendimiento.
- Se mejora la experiencia del usuario, ello contribuye a una aplicación más responsiva y fluida.
- Ademas el desarrollo esta más simplificado, dado que reduce la necesidad de actualizaciones manuales del DOM.

## Pregunta 4. Estrategias Default y OnPush

| Característica       | Estrategia Default                                                                                                   | Estrategia OnPush                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Detección de Cambios | Detecta todos los cambios en las propiedades de entrada y las propiedades del componente.                            | Solo detecta cambios en las propiedades de entrada.                                                                                        |
| Ciclo de Vida        | Ejecuta la detección de cambios en cada ciclo de detección de cambios de Angular.                                    | Solo ejecuta la detección de cambios cuando se detecta un cambio en las propiedades de entrada.                                            |
| Rendimiento          | Puede ser menos eficiente para componentes con muchas propiedades cambiantes.                                        | Puede ser más eficiente para componentes con pocas propiedades cambiantes o cuando la detección de cambios no es necesaria con frecuencia. |
| Complejidad          | Más simple de implementar.                                                                                           | Requiere más configuración y comprensión de la estrategia de detección de cambios.                                                         |
| Uso                  | Ideal para componentes simples o con muchas propiedades cambiantes que requieren actualizaciones frecuentes del DOM. | Ideal para componentes complejos o con pocas propiedades cambiantes que no requieren actualizaciones frecuentes del DOM.                   |

**Cuándo usar la Estrategia Default o la OnPush** depende de varios factores.

La Estrategia Default es más adecuada cuando el componente es simple y tiene pocas propiedades cambiantes. También es preferible si se requieren actualizaciones frecuentes del DOM para reflejar cambios en los datos y cuando la simplicidad de implementación es una prioridad.

Por otro lado, la Estrategia OnPush es recomendable en situaciones donde el componente es más complejo y tiene muchas propiedades cambiantes. Es ideal cuando las actualizaciones del DOM no son necesarias con frecuencia, se busca optimizar el rendimiento y evitar detecciones de cambios innecesarias, y cuando el desarrollador tiene una buena comprensión de la estrategia de detección de cambios.

## Pregunta 5

El ciclo de vida de un componente en Angular describe las distintas etapas por las que atraviesa desde su creación hasta su destrucción. Durante este ciclo, se ejecutan una serie de métodos denominados "hooks" que permiten al desarrollador realizar acciones específicas en cada fase.

**Etapas del Ciclo de Vida**

| Fase                                  | Descripción                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Creación**                          | El constructor del componente se ejecuta una vez, inicializando sus propiedades y dependencias. |
|                                       | No se debe realizar ninguna operación asincrónica en el constructor.                            |
| **Detección de Cambios**              | Angular detecta cambios en las propiedades de entrada y las propiedades del componente.         |
|                                       | Si se detecta un cambio, se inicia el ciclo de detección de cambios.                            |
| **Actualización de Propiedades**      | Las propiedades del componente se actualizan con los nuevos valores.                            |
|                                       | Se ejecutan los hooks OnChanges y ngOnInit si es necesario.                                     |
| **Detección de Cambios de Contenido** | Angular detecta cambios en el contenido del componente (plantillas, expresiones, etc.).         |
|                                       | Si se detecta un cambio, se actualiza el DOM en consecuencia.                                   |
| **Verificación de Cambios**           | Angular verifica si se han producido cambios en la interfaz de usuario.                         |
|                                       | Si hay cambios, se actualiza el DOM nuevamente.                                                 |
| **Destrucción**                       | El componente se destruye y se eliminan sus recursos.                                           |
|                                       | Se ejecuta el hook OnDestroy.                                                                   |

**Hooks Clave**

| Hook              | Descripción                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OnChanges**     | Se dispara cada vez que se detectan cambios en las propiedades de entrada del componente y es útil para responder a cambios en los datos recibidos de otros componentes.                                                        |
| **OnInit**        | Se dispara una vez, después de que el componente ha sido inicializado y sus propiedades han sido actualizadas, ideal para realizar tareas de inicialización como suscribirse a eventos o cargar datos.                          |
| **AfterViewInit** | Se dispara una vez, después de que la vista del componente ha sido inicializada y renderizada en el DOM, útil para realizar acciones que dependen de la estructura de la vista, como manipular elementos DOM o aplicar estilos. |
| **OnDestroy**     | Se dispara justo antes de que el componente sea destruido y es útil para realizar tareas de limpieza, como desuscribirse de eventos o liberar recursos.                                                                         |

Un ejemplo en el código:

```typescript
import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-my-component",
  templateUrl: "./my-component.html",
  styleUrls: ["./my-component.css"],
})
export class MyComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  datos: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.datos) {
      console.log('Propiedad "datos" ha cambiado:', changes.datos.currentValue);
    }
  }

  ngOnInit() {
    console.log("Componente inicializado");
  }

  ngAfterViewInit() {
    console.log("Vista del componente inicializada");
  }

  ngOnDestroy() {
    console.log("Componente destruido");
  }
}
```
