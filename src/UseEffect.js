import React, {useState, useEffect} from 'react';

function UseEffect()
{
    const [ count, setCount ] = useState(0);
//useEffecttakes 2 args one call back function & 2nd is empty array
    useEffect( () => {
// setTimeout takes 2 args one call back function & second time in milli seconds
        setTimeout( () => {
            setCount(count + 1)
        }, 1000)
                 } , []);
                 return(<div>
                    <h1>count value is :{count} times</h1>
                 </div>)
}
export default UseEffect;