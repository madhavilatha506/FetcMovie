import React, { useState } from 'react';

function FunctionCounter(){

    const[ count, setCount ] = useState(0);
    const increase = () => setCount (count +1);
    const decrease = () => setCount (count -1);
    const stop = () => setCount(0);

    return(<div>
        <button onClick = {increase}> +</button>
        <h1>{count}</h1>
        <button onClick = {decrease}> -</button>
        <br /> <br />
        <button onClick = {stop}> Stop</button>

    </div>)
}
export default FunctionCounter;