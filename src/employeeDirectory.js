import React from 'react';


const EmployeeDirectory = ({isActive, clicked})=> {
   

    return (
        <div>
            
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get Male Employees/Users"}</button>


        </div>
    );
}

export default EmployeeDirectory;


