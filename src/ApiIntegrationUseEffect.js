import React, {useState, useEffect} from 'react';
import "./ApiIntegrationUseEffect.css";

function ApiIntegrationUseEffect(){
    const [array, setArray] = useState([ ]);
    useEffect( () =>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => {
    setArray(json)
})
    }, []);
    return(<div>
        <table>
            <tr><th>name</th><th>username</th><th>email</th><th>city</th></tr>
        {    
        array.map((item) => (
            <tr><td>{item.name}</td><td>{item.username}</td><td>{item.email}</td><td>{item.address.city}</td></tr>
        ))
    }
    </table>
    </div>)
}
export default ApiIntegrationUseEffect;
