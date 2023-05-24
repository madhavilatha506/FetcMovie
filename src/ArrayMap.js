import React from 'react';

const arrObj = [
    {id: 1, name: 'madhu', city: 'BNG'},
    {id: 1, name: 'manu', city: 'HYD'},
    {id: 1, name: 'mahi', city: 'KDP'}
];
class ArrayMap extends React.Component{
    render()
    {
        return(
            // To display data in list format
            <div>
                {
                    arrObj.map( (item) => <li>{item.id}- {item.name}- {item.city}</li>)
                }
            </div>
        );
    }

}
export default ArrayMap;