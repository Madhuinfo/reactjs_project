import React from 'react';

// function Greet(){
//     return <h1>Hai Users</h1>
// } 

// ES6 Components

const Greet = props =>{
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}  {props.work}</h1>
            {props.children}
        </div>
    )
}
export default Greet;