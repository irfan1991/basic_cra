import React from 'react'

export default function Counter() {
    // let number = 0
    // const increment = () =>{
    //     number +=1
    //     console.log(number);
        
    // }
    const [number, increment] = React.useState(0)
    return (
        <div>
            <h1>Counter App</h1>
            <p>Nilai Counter saat ini : {number}</p>
            <button onClick={() => increment(number + 1)}>+</button>
        </div>
    )
}
