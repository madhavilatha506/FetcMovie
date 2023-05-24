import React from 'react';

class BankAccount extends React.Component
{
    constructor(  )
    {
        super(); // Err this.state is not defined
        this.state = {
            accountName: 'madhu',
            IFSC: 'SBIN000078',
            city: 'Bangalore',
            PIN: 51004
        }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange()
    {
        this.setState({ accountName: ' manu '})
    }
    render()
    {
        return (<div>
        <h1>{this.state.accountName}</h1>
        <button onClick={this.handleChange()}>change data</button>
        <h1>{this.state.accountName}</h1>
        </div>);
    } 
}
export default BankAccount;