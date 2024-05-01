import React, { useState } from 'react';
import { diagnoseVehicle } from '../aiModel'; // Assuming a function to perform diagnosis

const VehicleDiagnosis = () => {
    const [stoppingBehavior, setStoppingBehavior] = useState('');
    const [gearFunctioning, setGearFunctioning] = useState('');
    const [engineOilChange, setEngineOilChange] = useState('');
    const [fuelLevel, setFuelLevel] = useState('');
    const [diagnosisResult, setDiagnosisResult] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const diagnosis = await diagnoseVehicle({
            stoppingBehavior,
            gearFunctioning,
            engineOilChange,
            fuelLevel
        });
        setDiagnosisResult(diagnosis);
    };

    return (
        <div className='diagnosisSolve' style={{textAlign:"center",height:'100vh'}}>
            <h1>Vehicle Diagnosis</h1>
            <h3>Type yes or no </h3>
            <h4>if the asking troubleshoot is Good then type "yes" otherwise just type "no"</h4>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"20%",margin:"auto"}}>
            <br/>
                <label style={{fontSize:"20px"}}>Stopping Behavior:</label>
                <input type="text" value={stoppingBehavior} onChange={(e) => setStoppingBehavior(e.target.value)} />
                <br/>

                {/* <label style={{fontSize:"20px"}}>Any abnormal behavior of the vehicle, such as unusual noises, vibrations, or changes in performance</label>
                <input type="text" value={stoppingBehavior} onChange={(e) => setStoppingBehavior(e.target.value)} />
                <br/> */}

                <label style={{fontSize:"20px"}}>Gear Functioning:</label>
                <input type="text" value={gearFunctioning} onChange={(e) => setGearFunctioning(e.target.value)} />
                <br/>
                <label style={{fontSize:"20px"}}>Engine Oil Change (Yes/No):</label>
                <input type="text" value={engineOilChange} onChange={(e) => setEngineOilChange(e.target.value)} />
                <br/>
                <label style={{fontSize:"20px"}}>Fuel Level:</label>
                <input type="text" value={fuelLevel} onChange={(e) => setFuelLevel(e.target.value)} />
                <br/>
                <br/>
                <button type="submit" className='butt mech'>Diagnose</button>
            </form>

            {diagnosisResult && (
                <div>
                    <br/>
                    <h2 style={{backgroundColor:'red',width:'80%',margin:'auto',marginBottom:'5px'}}>Diagnosis Result:</h2>
                    <h3 style={{color:"rgba(0,0,0)",backgroundColor:'yellow',width:'80%',margin:'auto'}}>{diagnosisResult}</h3>
                </div>
            )}
        </div>
    );
};

export default VehicleDiagnosis;