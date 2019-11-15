import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    // const [showHello, setShowHello] = useState(true);

    // useEffect(() => {
    //     console.log("render");
    //     const onMouseMove = e => {
    //         console.log(e);
    //     };
    //     window.addEventListener("mouseover", onMouseMove);

    //     return () => {
    //         window.removeEventListener("mousemove", onMouseMove);
    //     };
    // });

    return (
        <div>
            {/* <button onClick={() => setShowHello(!showHello)}>show</button> */}
            {/* {showHello ? <Hello /> : ""} */}
            {/*showHello && <Hello /> */}

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
        </div>
    );
};

//useEffect
/*

Fundamentos

useEffect reibe una funcion en su interior. Cada vez que el componete se renderiza se ejecuta useEffect
Además useEffect cuando como didMount, didUpdate, willUnmount. 

useEffect(() => {
        console.log("render");
    });

Nota: Podemos añadir mas de un useEffect()

useEffect(() => {
    console.log("Mount1");
});
useEffect(() => {
    console.log("Mount2");
});

Podemos añadir dependencias a nuestro useEffect para que no solo se ejecute en cada renderizado 
si no tambien cuando un valor cambie.

useEffect(() => {
        console.log("render");
    }, [deps]);

Nota:
Podemos dejar las [deps] vacias y el useEffect se ejecutara una vez durante el ciclo de vida del componente.

useEffect(() => {
        console.log("render");
        
    }, []);


Para limpiar o generar el willUnmount de useEffect tenemos que hacer que retorne
una funcion que se ejecutara antes que el componente se destruya.

useEffect(() => {
        console.log("render");

        return () => {
            console.log("unmount");
        };
    }, []);

Si colocamos deps dentro de los array, igualmente el return se ejecutara.

Nota: Podemos usas esta funcion para limipiar listeners. Ej:


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
*/

export default App;
