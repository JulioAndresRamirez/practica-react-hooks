# useRef()

`useRef()` devuelve un objeto ref mutable cuya propiedad `.current` se inicializa con el argumento pasado `(initialValue)`. El objeto devuelto se mantendrá persistente durante la vida completa del componente.

**Lenguaje coloquial**: Podemos hacer referencia a cualquier cosa que tengamos en nuestro componente este aceptar objetos, DOM, valores, functions, entre otros

```javascript
    const inputRef = useRef();

    <input
    	ref={inputRef} //Aqui enlazamos el input a la useRef() "inputRef"
    	name="email"
    	type="text"
    	value={values.email}
    	placeholder="Email"
    	onChange={handleChange}
    />


    <button onClick={() => console.log(inputRef.current)}>
    focus
    </button>


    //output
    <input name="email" type="text" placeholder="Email" value="">
```

**Nota**: Cuando a `useRef()` se le cambia el valor, este no generara una peticion de renderizado al componente por lo que sirve para manejar estados en los que no queramos que el componente se renderice.

### Utilidades:

Ejemplo entregado por Ben Awad -> https://www.youtube.com/watch?v=W6AJ-gRupCs&t=1s

Supongamos que estamos haciendo un peticion a una API en un componente que al final de hacer la peticion actualizará un estado de dicho componente lo cual hará que se renderice.

Pero este componente fue destruido sin haber finalizado su peticion asyncrona.

Podemos evaluar cuando el componente genere un componentWillUnmount con `useEffect()` y cambiar el valor de un `useRef(false)` a `true` (Nos indica que el componente fue destruido) cuando esta peticion finalice y vaya a utilizar el `setState()` para actualizar los datos podemos agregar una condicion antes evaluado ese `useRef()`, si es true el `setState()` no se realizara.

Con esto prevenimos errores y cambios en los estados que no queremos.

:D

---

<h1 align="center">Welcome to Practica de React Hooks 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/juliorafre">
    <img alt="Twitter: juliorafre" src="https://img.shields.io/twitter/follow/juliorafre.svg?style=social" target="_blank" />
  </a>
</p>

> Practica de React

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Julio Ramirez**

-   Twitter: [@juliorafre](https://twitter.com/juliorafre)
-   Github: [@JulioAndresRamirez](https://github.com/JulioAndresRamirez)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
