import React from 'react';

class ControlledUser extends React.Component
{
    constructor()
    {
        super();
        this.state = { name: "  ", city: " ", State: " "};
        this.updateUser = this.updateUser.bind(this);
        this.userSubmit = this.userSubmit.bind(this);
    }
    updateUser( event )
    {
        this.setState({  [event.target.name] : event.target.value })
    }
    userSubmit( event )
    {
        event.preventDefault();
        alert("successfully sent");
    }
    render()
    {
        let { name, city, state} = this.state;
        return(
            <div>
                <form onSubmit={ this.userSubmit }>
                    userName: <input type = 'text' name ='name' value = {this.state.name} onchange = {this.updateUser} /> <br />
                    city Name: <input type = 'text' name ='city' value = {this.state.city} onchange = {this.updateUser} /> <br />
                     State Name: <input type = 'text' name ='state' value = {this.state.state} onchange = {this.updateUser} /> <br />
                    <button value='submit'> submit</button>
                    </form>
                    <h1>{name}</h1>
                    <h1>{city}</h1>
                    <h1>{state}</h1>
               
            </div>
        )
    }
}

export default ControlledUser;