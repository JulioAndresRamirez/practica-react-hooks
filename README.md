# useEffect

### Fundamentos

`useEffect()` recibe una funcion en su interior. Cada vez que el componete se renderiza se ejecuta `useEffect()`

Además `useEffect()` cuenta como `componentDidMount`, `componentDidUpdate`, `componentDidUnmount`.

```javascript
useEffect(() => {
    console.log("render");
});
```

**Nota**: Podemos añadir mas de un useEffect()

```javascript
useEffect(() => {
    console.log("Mount1");
});

useEffect(() => {
    console.log("Mount2");
});
```

---

Podemos añadir dependencias a nuestro `useEffect()` para que no solo se ejecute en cada renderizado

si no cuando un valor cambie.

```javascript
useEffect(() => {
    console.log("render");
}, [deps]);
```

**Nota**: Podemos dejar las `[deps]` vacias y el useEffect se ejecutara una vez durante el ciclo de vida del componente.

```javascript
useEffect(() => {
    console.log("render");
}, []);
```

Para limpiar o generar el componentWillUnmount de `useEffect()` tenemos que hacer que retorne

una funcion que se ejecutará antes que el componente se destruya.

```javascript
useEffect(() => {
    console.log("render");
    return () => {
        console.log("unmount");
    };
}, []);
```

Si colocamos deps dentro del array, igualmente el `return` se ejecutara.

**Nota**: Podemos usas esta funcion para limpiar listeners.

```javascript
useEffect(() => {
    console.log("render");
    const onMouseMove = e => {
        console.log(e);
    };

    window.addEventListener("mouseover", onMouseMove);

    return () => {
        console.log("unmount");
        window.removeEventListener("mousemove", onMouseMove);
    };
});
```

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
