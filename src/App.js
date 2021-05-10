import './App.css';
import EmployeeDirectory from './employeeDirectory';
import Card from "./Card";
import Button from "./Button";
import React, { useState } from 'react';

 
const App = () => {
 // const [userData, setUserData] = useState([]);
 // const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  //const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = ()=>{
    console.log("button is working")
  }
  return (
    <>
   
     <div>
      
      <EmployeeDirectory /> 
      <Button isActive={activeUser} clicked={onClickHandler }/>
      
      <br>
      </br>
      <Card />
      
      <br>
      </br>
      <Card />
      <br>
      </br>
      <Card />
    
    </div>
    </>
  );
}

export default App;
