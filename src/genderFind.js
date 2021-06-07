import React, { Fragment, useState } from 'react';
import axios from 'axios';
import User from "./getDirectory";



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
  


function GenderFind() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
  
    const onClickHandlerDirectory = ()=>{
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
               <br></br>
      {loading ? (
        <h1>loading...</h1>
      
      ):(
        <div>{userData.map((User,index)=>{
          return (
            <>
            
        
            <div style={styles.footer}>Employee/User Gender:{User.gender}</div>
            
            <br></br>
            </>
             )
        })}
    </div>
      )}
    </div>
      );
}
  

export default GenderFind;