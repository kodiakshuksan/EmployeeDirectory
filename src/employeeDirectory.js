import React from 'react';
import onClickHandlerDirectory from "./App";
import activeUser from "./App";
import User from "./getDirectory";
import GenderFind from "./genderFind";

const styles = {
    card: {
      width: "18rem",
      background: "#e8eaf6"
    },
    heading: {
      background: "#3f51b5",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: "1.2rem",
      color: "white",
      padding: "0 20px"
    },
    content: {
      padding: 20
    },
    footer: {
      background: "#3f51b5",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: "1.2rem",
      color: "white",
      padding: "0 20px"
    },
  };
  

const EmployeeDirectory = ({isActive, clicked})=> {

     return (
         <div>
           <EmployeeDirectory />
           <GenderFind />
            <button>{isActive ? "Get More Male Employees/Users" : "Get Male Employees/Users"}</button>
            <button> isActive={activeUser} clicked={onClickHandlerDirectory}</button>

            <div style={styles.footer}>{User.gender}</div>
        </div>
    );
}
      

export default EmployeeDirectory;

