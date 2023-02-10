//import logo from './logo.svg';
import './App.css';
import Bmicalc from './components/Bmicalc';
//import React ,{ useState } from 'react'

function App() {


  const mystyle = {
    color: "white",
    backgroundColor: "#008b02",
    padding: "10px",
    marginLeft:"300px",
    marginRight:"300px",
    marginTop:"50px",
    textAlign: "center",
    fontStyle:"bold",
    fontSize:"1.5em",
    fontFamily: "Arial"
  };

  const styles = {
    marginLeft:"550px",
    marginRight:"300px",
    marginTop:"70px",
    
   
  };

  const setStyle = {
     marginLeft:"555px",
     marginRight:"300px",
     height: "30px",
    
   };

   const styleButton={
     fontSize: "1em",
     color: "white",
    marginLeft:"575px",
    marginRight:"300px",
    marginTop:"30px",
    height: "50px",
    width: "130px",
    backgroundColor: "#008b02",
    border:"none",
    cursor: "pointer",
    
   }

   const bmiStyle ={
     border:"2px solid green",
     width:"40%",
     height:"20vh",
     marginLeft:"400px",
     marginTop:"10px",
     textAlign:"center",
     borderRadius:"10px",
     
   }



  return (
  <>
  <Bmicalc mystyle={mystyle} styles={styles} setStyle={setStyle} styleButton={styleButton} bmiStyle={bmiStyle}/>
  </>
  );
}

export default App;
