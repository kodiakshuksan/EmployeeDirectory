import React from 'react';


const Gbutton = ({isActive, clicked})=> {
   

    return (
        <div>
            <button onClick={clicked}>{isActive ? "Get Male Employees" : "Get My Directory"}</button>
        </div>
    );
}

export default Gbutton;
