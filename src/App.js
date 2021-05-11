import './App.css';
import EmployeeDirectory from './employeeDirectory';
import Card from "./Card";
import Button from "./Button";
import React, { Fragment, useState } from 'react';
import axios from 'axios';

 
function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = ()=>{
    setLoading(true);
    axios.get('https://randomuser.me/api/?results=10')
    .then((response)=>{
      console.log(response.data.results);
      setUserData(response.data.results);
    }).catch((error)=>{
      console.log(error);
      setLoading(true);
    }).finally(()=>{
      setLoading(false);
      setActiveUser(true);
    }) 
  }
  return (
    <div>
      <h1>User Directory</h1>
     <Button isActive={activeUser} clicked={onClickHandler}/>
      {loading ? (
        <h1>loading...</h1>
      ):(
        <div>{userData.map((user,index)=>{
          return (
            <>
            <Card />
            <Fragment>
            <img src={user.picture.medium} alt="#"/>
            </Fragment>
            
            </>
             )
        })}
    </div>
      )}
    </div>
      );
}
  
      
export default App;
