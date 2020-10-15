import React , {useState, useEffect}from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    

    useEffect(() => {
        setCounter(counter + 1);
        // return () => {
        //     cleanup
        // };
    }, [counter]);

    return (
        <div>
            {counter}
        </div>
    )
}
