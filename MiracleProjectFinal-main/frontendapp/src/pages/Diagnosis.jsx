import React, { useState } from "react";
import DiagnosisSolve from './DiagnosisSolve';
import Mechanic from "./Mechanic";
const Diagnosis = () => {
  const [show, setShow] = useState(0);
  return (
    <div className="main-home diagnosis ">
    {show===0 && <div className="home-buttons">
        <button className="butt mech" onClick={()=>setShow(1)}>Diagnosis</button>
        <button className="butt cust" onClick={()=>setShow(2)}>Mechanic Support</button>
      </div>}
      {show===1 && <div><button className="butt cust" onClick={()=>setShow(2)} style={{marginBottom:'10px'}}>Mechanic Support</button> <DiagnosisSolve /></div>}
      
      {
        show===2 && <><button className="butt mech" onClick={()=>setShow(1)}>Diagnosis</button>
        <Mechanic />
        </>
      }
    </div>
  );
};

export default Diagnosis;



{/* <div>
  <h2 className="diag-title">Diagnosis</h2>
  <button className="butt cust" onClick={()=>setShow(2)} style={{marginBottom:'10px'}}>Mechanic Support</button>
  <div className="diag-home">
    {questions.map((each, index) => {
      return (
        <div className="faq">
          <p>
            {index + 1}.{each.name}
          </p>
          <div style={{ display: "flex" }}>
            <input type="text" placeholder="answer" />
            
          </div>
        </div>
      );
    })}
    <button className="sub">Submit</button>
  </div>
</div> */}