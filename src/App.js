import './App.css';
import EmployeeDirectory from './employeeDirectory';
import Card from "./Card";
import Button from "./Button";
import React, { Fragment, useState } from 'react';
import axios from 'axios';

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
      <br></br>
     <Button isActive={activeUser} clicked={onClickHandler}/>
     <br></br>
      {loading ? (
        <h1>loading...</h1>
      ):(
        <div>{userData.map((user,index)=>{
          return (
            <>
            
            <Fragment>
            <img src={user.picture.medium} alt="#"/>
            </Fragment>
            <div style={styles.footer}>Employee Name: {user.name.first} {user.name.last}</div>
            <div style={styles.footer}>Employee Location: {user.location.city}, {user.location.state}</div>
            <br></br>
            </>
             )
        })}
    </div>
      )}
    </div>
      );
}
  
      
export default App;
