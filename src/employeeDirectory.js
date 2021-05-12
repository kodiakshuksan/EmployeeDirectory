import React from 'react';


const EmployeeDirectory = ({isActive, clicked})=> {
   

    return (
        <div>
            
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get Male Employees"}</button>



        </div>
    );
}

export default EmployeeDirectory;


