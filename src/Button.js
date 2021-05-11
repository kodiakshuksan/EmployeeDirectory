import React from 'react';


const Button = ({isActive, clicked})=> {
   

    return (
        <div>
            <button onClick={clicked}>{isActive ? "Get another Directory" : "Get My Directory"}</button>
        </div>
    );
}

export default Button;


