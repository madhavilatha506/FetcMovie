import React, {useState} from 'react';

function FormValidation() {
    const [ userName, setUserName ] = useState("");
    const [ error, setError ] = useState("");
    const updateUserName = (e) => {
        setUserName(e.target.value);
    }
    const validateName = (e) => {
        if(userName === "" || userName === null)
        {
            setError("userName should not be empty")
        }else if(userName.length < 4){
            setError("userName must be morethan 4 chars")
        }else if(userName.length > 8){
            setError("userName must be 4 to 8 chars")
        }else{
            setError("good Name")
        }
    }
    return(<div>
        <label htmlfor='userName'>userName:</label>
        <input type='text' name="userName" value={userName} onChange={updateUserName} />
        <span style={{ color:"red"}}>{error}</span>
        <br /><br />
        <button onClick={validateName}>validateName</button>
    </div>)
}
export default FormValidation;