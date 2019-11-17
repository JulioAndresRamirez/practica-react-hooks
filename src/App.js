import React, { useState, useEffect, useRef } from "react";
import useForm from "./useForm";
import Hello from "./Hello";
import useFetch from "./useFetch";
import "./App.css";

const App = () => {
    const [values, handleChange] = useForm({
        email: "",
        password: "",
        firstName: ""
    });
    const [count, setCount] = useState(
        JSON.parse(localStorage.getItem("count"))
    );

    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
    const inputRef = useRef();

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const [showHello, setShowHello] = useState(true);

    return (
        <div>
            <div>{!data ? "Loading..." : data}</div>
            <div> Count: {count}</div>
            <button
                onClick={() => {
                    setCount(c => c + 1);
                }}
            >
                increment
            </button>
            <form>
                <input
                    ref={inputRef}
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
                <input
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    placeholder="FirstName"
                    onChange={handleChange}
                />
            </form>
            <button onClick={() => console.log(inputRef.current)}>focus</button>
            <hr />

            <button onClick={() => setShowHello(!showHello)}>Show Hello</button>
            {showHello && <Hello />}
        </div>
    );
};

//useRef
/*

useRef() devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue).
El objeto devuelto se mantendrá persistente durante la vida completa del componente.

Lenguaje coloquial: Podemos hacer referencia a cualquier cosa que tengamos en nuestro componente
este aceptar objetos, DOM, valores, functions, entre otros

const inputRef = useRef();

<input
    ref={inputRef}
    name="email"
    type="text"
    value={values.email}
    placeholder="Email"
    onChange={handleChange}
/>

<button onClick={() => console.log(inputRef.current)}>
                focus
            </button>

// Output

<input name="email" type="text" placeholder="Email" value="">

Nota: Cuando a Output se le cambia el valor, este no generara una peticion de renderizado 
al componente por lo que sirve para manejar estados en los que no queramos que el componente se renderice.


Utilidades:

Ejemplo entregado por Ben Awad -> https://www.youtube.com/watch?v=W6AJ-gRupCs&t=1s

Supongamos que estamos haciendo un peticion a una API en un componente que al final de hacer la peticion
actualizará un estado de dicho componente lo cual hará que se renderice. 

Pero este componente fue destruido sin haber finalizado su peticion asyncrona.

Podemos evaluar cuando el componente genere un componentWillUnmount con useEffect() y cambiar el valor de un 
useRef(false) a true (Nos indica que el componente fue destruido) cuando esta peticion finalice y vaya a utilizar
el setState() para actualizar los datos podemos agregar una condicion antes evaluado ese useRef(), si es true 
el setState() no se realizara. 

Con esto prevenimos errores y cambios en los estados que no queremos. 

:D

*/
export default App;
