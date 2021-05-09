
import './App.css';
import EmployeeDirectory from './employeeDirectory';
import Card from "./Card";

function App() {
  return (
    <>
   
     <div>
      
      <EmployeeDirectory /> 
      
      <button>show all managers</button>
      <button>show all female employees</button>
      <button>show all plumbers</button>
      <Card />
    
    </div>
    </>
  );
}

export default App;
