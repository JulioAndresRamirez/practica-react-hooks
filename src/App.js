import React, { useState } from "react";
import useForm from "./useForm";
import "./App.css";

const App = () => {
    //const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
    //const [count, setCount] = useState(10);
    //const [count2, setCount2] = useState(20);
    /* const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); */
    const [values, handleChange] = useForm({ email: "", password: "" });

    return (
        <div>
            {/* <button
                onClick={() => {
                    setCount(currentState => ({
                        ...currentState,
                        count2: currentState.count2 + 1
                    }));
                }}
            >
                +
            </button> */}

            {/* <button
                onClick={() => {
                    setCount(c => c + 1);
                    setCount2(c => c + 1);
                }}
            >
                +
            </button> */}
            {/* <div> Count 1: {count}</div>
            <div> Count 2: {count2}</div> */}

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
        </div>
    );
};

//setState

/*
const [value, setValue] = setState(5);

Es la nueva forma de trabajar con estados en ReactJS. sustituyendo los componenetes basados en clases.
Esra funcion retorna un array con dos valores

El primer valor es la variable y valor que representa el estado. (value)
El segundo valor es un funcion que permite actualizar el estado. (setValue)

Nota: A setValue() podemos entregarle una funcion siendo el primer parametro el valor actual del estado.

setValue(c => console.log(c)) // c = valor actual del estado.


Nota: Puedes crear varios estados (No hay limite de uso para el useState) o tambien
puede crear un estado basado en un objeto

Estado basado en objeto
const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

Estados separados
const [count, setCount] = useState(10);
const [count2, setCount2] = useState(20);


CUSTOM HOOKS
Podemos crear nuestros propios Hooks
Como regla estos deben empezar con la palabra "use"


*/

export default App;
