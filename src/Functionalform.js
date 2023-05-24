import React, {useState} from 'react';

function FunctionalForm()
{
    // const input = { name: " ", email: " ", city: " ",state:" "}; we can pass input in useState OR
    const [ inputField, setInputField ] = useState({ name: "", email: "", city: "",state:""});
    const updateForm = (e) =>
    {
        let name = e.target.name;
        let value =e.target.value;
        setInputField({ [name ] : value });
        // setInputField = ({ [e.target.name] : e.target.value});
    }
    const submitform = (e) =>
    {
        e.preventDefault();
        alert("successfully submitted");
    }
    return(<div>
     <form onSubmit={submitform}>
        Name: <input type='text' name="name" value={inputField.name} onChange={updateForm}></input> <br />
        email: <input type='email' name="email" value={inputField.email} onChange={updateForm}></input> <br />
        city: <input type='text' name="city" value={inputField.city} onChange={updateForm}></input> <br />
        state: <input type='text' name="state" value={inputField.state} onChange={updateForm}></input> <br />
           <button value="submit"> Submit</button>
           <h1>{inputField.name}</h1>
           <h1>{inputField.email}</h1>
           <h1>{inputField.city}</h1>
           <h1>{inputField.state}</h1> 
            </form>
    </div>)
}
export default FunctionalForm;