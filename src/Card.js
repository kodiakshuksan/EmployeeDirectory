import React from "react";
import App from "./App";

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

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Employee Name</div>
      <div style={styles.content}>
        Photo
      </div>
      <div style={styles.footer}>Employee Job

      </div>
      
    </div>
  );
}

export default Card;
