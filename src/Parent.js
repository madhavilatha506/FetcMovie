import React from 'react';

class Parent extends React.Component{

   constructor( props )
   {
    super(props);
    this.state = { data: 'this is parent component'}
   }
   render()
   {
    return(<div>
    <Child passData = {this.state.data}></Child>
    </div>)
   }
}

 class Child extends React.Component{
    render()
        {
            return (
                <div>
                <h1>{this.props.passData}</h1>
                </div>
                );
        }
 }

export default Parent;
