import React from 'react';

class Child extends React.Component{

    
    render()
    {
        //Destructuring props
        const { passData1, passData2, data1,data2} = this.props;
        return(
            <div>
                <h1>{passData1}</h1>
                <h1>{passData2}</h1>
                <h1>{data1}</h1>
                <h1>{data2}</h1>
            </div>
        )
    }
}
export default Child;