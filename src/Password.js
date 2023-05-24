import React, {useState} from 'react';

function Password(){
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [error, setError ] = useState("");

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const passwordConfirm = (e) => {
        setConfirmPassword(e.target.value);
    }
    const regExpSpecialChars = /^(?=.*\d)(?=(.*\w){2})(?=.*(a-zA-Z))(?!.*\s).{1,8}$/;
    const validatePassword = (e) => {
        if(password === "" ||password ===null){
            setError("Please Enter password")
        }else if(password.length < 4){
            setError("Not a strong password")
        }else if(!regExpSpecialChars.test(password)){
            setError("password must be atleast 1 digit, 2 special char, 1 lower& upper");
        }else if(password !== confirmPassword){
            setError("Password should match")
        }else{
            setError("Good strong password")
        }
    }

return(<div>
    <label htmlfor='password'>Password: </label>
    <input type='password' name="password" value={password} onChange={updatePassword} />
    <span style={{ color:'red'}}>{error}</span><br />
    <label htmlfor='password'>Confirm Password: </label>
    <input type='password' name="ConfirmPassword" value={confirmPassword} onChange={passwordConfirm} />

    <button onClick={validatePassword}>ValidatePassword</button>
</div>)
}
export default Password;