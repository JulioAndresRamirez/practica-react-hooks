# React

# setState

Es la nueva forma de trabajar con estados en ReactJS. sustituyendo los componenetes basados en clases.

```javascript
const [value, setValue] = setState(5);
```

Esta funcion retorna un array con dos valores

1. El primer valor es la variable y valor que representa el estado. `value`
2. El segundo valor es un funcion que permite actualizar el estado. `setValue`

---

**Nota**: A `setValue()` podemos entregarle una funcion siendo el primer parametro el valor actual del estado.

```javascript
setValue(c => console.log(c)); // c = valor actual del estado.
```

---

**Nota**: Puedes crear varios estados (No hay limite de uso para el useState) o tambien

puede crear un estado basado en un objeto.

Estado basado en objeto:

```javascript
const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
```

Estados separados:

```javascript
const [count, setCount] = useState(10);

const [count2, setCount2] = useState(20);
```

---

## CUSTOM HOOKS

Podemos crear nuestros propios Hooks

Como regla estos deben empezar con la palabra "use"

Tenemos este manejo de estado de un formulario simple:

```javascript
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

```javascript
    						<input
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
```

O creando nuestro propio Hook - useForm

```
    import { useState } from "react";

    const useForm = initialValues => {
        const [values, setValues] = useState(initialValues);

        return [
            values,
            e => {
                setValues({
                    ...values,
                    [e.target.name]: e.target.value
                });
            }
        ];
    };

    export default useForm;
```

Entonces:

```
    const [values, handleChange] = useForm({ email: "", password: "" });
```

```
    						<input
                    name="email"
                    type="text"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                />
```

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
