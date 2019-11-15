import { useState, useEffect } from "react";

export const useFetch = url => {
    const [state, setState] = useState({ data: null, loding: true });

    //http://numbersapi.com/43/trivia

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url)
            .then(x => x.text())
            .then(y => {
                setState({ data: y, loading: false });
            });
    }, [url, setState]);

    return state;
};

export default useFetch;
