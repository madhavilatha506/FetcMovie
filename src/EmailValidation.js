import React, {useState} from 'react';

function EmailValidation()
{
    const [ email, setEmail ] = useState("");
    const [ error, setError ] = useState("");
    const updateEmail = (e) =>
    {
        setEmail(e.target.value);
    }
    const validateEmail = (e) =>
    {
        var emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(!emailFormat.test(email)){
            setError(" email should contain @ , .com");
        }else{
            setError("you have entered correct email");
        }
    }
    return(<div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value={email} onChange={updateEmail} /><span style={{color:'red'}}>{error}</span><br>
        </br>
        <button onClick={validateEmail}> validateEmail</button>

    </div>)
}
export default EmailValidation;