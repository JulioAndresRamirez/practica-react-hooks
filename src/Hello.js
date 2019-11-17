import React, { useEffect, useRef } from "react";

const Hello = () => {
    const renders = useRef(0);
    /*
    useEffect(() => {
        console.log("Hello: render");

        return () => {
            console.log("Hello: unmount");
        };
    }, []); */

    console.log("Hello render: ", renders.current++);

    return <div>Hello</div>;
};

export default Hello;
