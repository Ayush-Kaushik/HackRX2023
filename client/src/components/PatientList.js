import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function PatientList(props) {

    const [patientData, setState] = useState([]);

    useEffect(() => {
        let patientData = extractPatientList(props.data);
        console.log(patientData);
        setState(patientData);
    }, [props]);


    const extractPatientList = (data) => {
        return data.map(item => {
            return { 
                ...item.data.patient,
                refid: item.id
            }
        });
    }

    return (
        <div className="card-list">
            {patientData.map((patient) => (
                <div className="card" key={patient.id}>
                    <div className="card-content">
                        <h3 className="card-title">{patient.name}</h3>
                        <p className="card-description">{patient.address}</p>
                        <Link to={`/patient/${patient.refid}`}>Build Blisterpack</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PatientList;