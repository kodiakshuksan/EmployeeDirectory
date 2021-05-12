import React from 'react';


const Button = ({isActive, clicked})=> {
   

    return (
        <div>
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get My Directory"}</button>
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get Male Employees"}</button>
            <button onClick={clicked}>{isActive ? "Get another Directory" : "Find User"}</button>

        </div>
    );
}

export default Button;


