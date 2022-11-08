import React, {useState} from "react";

export default function Bmicalc(props) {
  const [weight, setWeight]= useState(0)
  const [height, setHeight]= useState(0)
  const [bmi, setBmi]= useState('')
  

  let bmiCalc = () => {
    if (weight === 0 || height ===0)
    {
      alert('Please enter a valid weight and height')
    }
    else {
    let myBmi=((weight*100*100)/(height*height));
    setBmi(myBmi.toFixed(2))
    document.body.style.backgroundColor ='#042743';
    
    }
  }

 
  return (
    <div className="bmicalculator">
      <div className="bmi" style={props.mystyle}>
        BMI Calculator
      </div>
      <div className="textarea" >
      <h4 style={props.styles} ><p style={{color: 'green'}}>Enter your weight in kg:</p></h4>
        <div>
          <label>
            <input type="digit" name="number" value={weight} onChange={(event) => setWeight(event.target.value)}  style={props.setStyle} />
          </label>
        </div>
      </div>
      <div className="textarea" >
      <h4 style={props.styles} ><p style={{color: 'green'}}>Enter your height in cm:</p></h4>
        <div>
          <label>
            <input type="digit" name="number" value={height} onChange={(event) => setHeight(event.target.value)} style={props.setStyle} />
          </label>
        </div>
      </div>
      <button type="button"  onClick={bmiCalc} style={props.styleButton} >Submit</button>
      <div style={props.bmiStyle}>
        <p style={{color:'green'}}>Your BMI is {bmi} <br></br> your suggested weight range is between 50-67<br></br>
            you are in healthy weight range </p>
      </div>
    </div>
  );
}
