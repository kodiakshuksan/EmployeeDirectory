import React from 'react';


const User = ({isActive, clicked})=> {
   

    return (
        <div>
            <input type="text"></input>
            <button onClick={clicked}>{isActive ? "Get another Directory" : "Find User"}</button>

        </div>
    );
}

export default User;


