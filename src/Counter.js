import React from 'react';

class Counter extends React.Component{
    constructor()
    {
        super();
        this.state = { count: 0}
        // this.state.count = 0;
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.stop = this.stop.bind(this);
    }
    increase()
    {
        this.setState({count: this.state.count + 1});
    }
    decrease()
    {
        this.setState({count: this.state.count - 1});
    }
    stop()
    {
        this.setState({count: 0});
    }
    render()
    {
        return(<div>
            <button onClick={this.increase}> +</button>
            <h1>counter value is: {this.state.count}</h1>
            <button onClick={this.decrease}> -</button>
            <br /> <br />
            <button onClick={this.stop}> stop</button>
        </div>)
    }
}
export default Counter;