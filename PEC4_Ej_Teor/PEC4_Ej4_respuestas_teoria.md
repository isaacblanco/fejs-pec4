# PEC 4 - Ejercicio 4

## Pregunta 1 - NgFor

Iteraciones.

Estas variables del NgFor son valores que ya están definidos que se proporcionan a cada iteración del **bucle for** para facilitar el acceso a información contextual sobre el elemento actual en la lista. De forma que se simplifica el consumo de datos y la aplicación de estilos dentro de la plantilla HTML que tenga una iteración entre un array de elementos.

### index

Es el índice numérico del elemento actual dentro del array. Se usa para acceder al elemento en una posición específica dentro del array y es útil para aplicar estilos o comportamientos diferenciados según la posición del elemento.

```html
<div *ngFor="let item of items; index as i">
  <p>{{ i + 1 }}: {{ item.name }}</p>
</div>
```

Se usa cuando necesitamos acceder al elemento en una posición específica dentro de un array.

### even

Indica si el índice del elemento actual es par (true) o impar (false). Lo que permite aplicar estilos o comportamientos alternos para elementos pares e impares, como los estilos llamados cebra, y es útil para crear patrones visuales o diferenciar elementos dentro de una lista.

```html
<div *ngFor="let item of items; even as isEven">
  <p [class.even]="isEven">{{ item.name }}</p>
</div>
```

Se usa cuando deseamos aplicar estilos o comportamientos alternos para elementos pares e impares.

## odd

El inverso de even

```html
<div *ngFor="let item of items; odd as isOdd">
  <p [class.odd]="isOdd">{{ item.name }}</p>
</div>
```

Mismo uso que even

### first

Nos dice si el elemento actual es el primero en la lista iterada (true). Con ello podemos distinguir al primer elemento, lo que lo diferencia como el primer elemento de la lista de los demás.

```html
<div *ngFor="let item of items; first as isFirst">
  <p [class.first]="isFirst">{{ item.name }}</p>
</div>
```

Se usa cuando queremos diferenciar el primer o último elemento de la lista de los demás.

### last

Lo mismo que el first, pero el último elemento del array.

```html
<div *ngFor="let item of items; last as isLast">
  <p [class.last]="isLast">{{ item.name }}</p>
</div>
```

Uso como first

**Notas**

Utilizar las variables locales ayuda a evitar confusiones en la plantilla, p. ej. si se necesita acceder a propiedades del elemento actual, conviene usa la expresión let item en lugar de las variables locales. La ventaja es combinar estas variables con directivas como ngClass o ngStyle para aplicar estilos dinámicos. En el fondo no ayudan a simplificar la manipulación de datos y la creación de plantillas HTML más dinámicas.

## Pregunta 2

**Propósito**

La opción _trackBy_ de la directiva NgFor de Angular mejora el rendimiento proporcionando un identificador único para cada elemento de un array. Este identificador permite a Angular realizar un seguimiento eficiente de los cambios y actualizar sólo los elementos DOM correspondientes, reduciendo las manipulaciones DOM innecesarias.

**Ventajas**

- Mejora el rendimiento: se minimizan las manipulaciones del DOM, especialmente para listas grandes o que cambian con frecuencia.
- Menor uso de memoria: se reutilizan elementos del DOM, especialmente para listas grandes.
- Experiencia de usuario más fluida: esto contribuye a que la aplicación responda mejor y sea más fluida.

**Cuándo utilizar trackBy**

En los casos de tener: listas grandes o dinámicas, elementos complejos, ordenación y filtrado dinámicos.

Un ejemplo para identificar un producto

```html
<div *ngFor="let product of products; trackBy: product.id"></div>
```

En el ejemplo anterior se controlan los IDs de los productos.

Un ejemplo para referenciar a un producto

```html
<div *ngFor="let product of products; trackBy: trackByProduct"></div>

<script>
  function trackByProduct(first, second) {
    return first === second;
  }
</script>
```

En el ejemplo anterior se controla todo el contenido de un objeto.

Un ejemplo para seguir cambios especificos de un producto

```html
<div *ngFor="let product of products; trackBy: trackByProductChanges"></div>

<script>
  function trackByProductChanges(first, second) {
    return first.name === second.name && first.price === second.price;
  }
</script>
```

De esta forma podemos hacer una comparación de atributos más eficiente.

## Pregunta 3
