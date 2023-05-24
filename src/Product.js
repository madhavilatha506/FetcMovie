import React from 'react';

class Product extends React.Component
{
constructor()
{
    super();
    this.state= {productName: " "};
    this.updateProduct = this.updateProduct.bind(this);
}
updateProduct()
{
    //function() OR () =>
    this.setState({productName: "laptop"}, function() {
        console.log(this.state.productName);
    });
}
render()
{
    return(
        <div>
            <h1>your product is: { this.state.productName }</h1>
             <button onClick = { this.updateProduct } >update</button> 
        </div>
    )
}

}
export default Product;