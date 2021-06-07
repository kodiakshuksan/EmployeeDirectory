import React from 'react';


const ButtonDirectory = ({isActive, clicked})=> {
   

    return (
        <div>
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get My Directory"}</button>
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get Male Directory"}</button>
           

        </div>
    );
}

export default ButtonDirectory;


