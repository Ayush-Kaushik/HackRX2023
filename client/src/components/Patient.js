import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Patient(props) {

    const { id } = useParams();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/blisterpack/?id=${id}`); // Replace with your API endpoint
                const jsonData = await response.json();
                console.log(jsonData);

                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const extactMedicineData = (data) => {
        return data.data.blisterpack.prescription.map(item => {
            return {
                ...item
            }
        });
    }

    const handleClick = (data) => {
        console.log(data.dosage);
    }


    const PatientInfoSideBar = ({ patientInfo, medicineInfo }) => {
        console.log(patientInfo);

        return (
            <div className="sidebar">
                <div className="card-content">
                    <h2 className="card-title">{patientInfo.name}</h2>
                    <p className="card-description">{patientInfo.address}</p>
                </div>

                <div>
                    {medicineInfo.map((blisterpack) => (

                        <div className="card-content" key={blisterpack.drug_identification_number}>
                            <b>{blisterpack.brand_name}</b>
                            <p>{blisterpack.company_name}</p>
                            <button onClick={() => { handleClick(blisterpack) }}>{"View Layout"}</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    const BlisterPackGrid = () => {
        const DAYS_OF_WEEK = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
        const TIME_OF_DAY = ["MORNING", "NOON", "EVENING", "NIGHT"];

        return (
            <>
                <div class="grid-container">
                    <div class="grid-row">
                        <div class="grid-item"></div>
                        <div class="grid-item">Sunday</div>
                        <div class="grid-item">Monday</div>
                        <div class="grid-item">Tuesday</div>
                        <div class="grid-item">Wednesday</div>
                        <div class="grid-item">Thursday</div>
                        <div class="grid-item">Friday</div>
                        <div class="grid-item">Saturday</div>

                    </div>
                    <div class="grid-row">
                        <div class="grid-item">Morning</div>
                        <div class="grid-item" key={"SUNDAY-MORNING"}>{"SUNDAY-MORNING"}</div>
                        <div class="grid-item" key={"MONDAY-MORNING"}>{"MONDAY-MORNING"}</div>
                        <div class="grid-item" key={"TUESDAY-MORNING"}>{"TUESDAY-MORNING"}</div>
                        <div class="grid-item" key={"WEDNESDAY-MORNING"}>{"WEDNESDAY-MORNING"}</div>
                        <div class="grid-item" key={"THURSDAY-MORNING"}>{"THURSDAY-MORNING"}</div>
                        <div class="grid-item" key={"FRIDAY-MORNING"}>{"FRIDAY-MORNING"}</div>
                        <div class="grid-item" key={"SATURDAY-MORNING"}>{"SATURDAY-MORNING"}</div>
                        <div class="grid-item"></div>
                    </div>
                    <div class="grid-row">
                        <div class="grid-item">Noon</div>
                        <div class="grid-item" key={"SUNDAY-NOON"}>{"SUNDAY-NOON"}</div>
                        <div class="grid-item" key={"MONDAY-NOON"}>{"MONDAY-NOON"}</div>
                        <div class="grid-item" key={"TUESDAY-NOON"}>{"TUESDAY-NOON"}</div>
                        <div class="grid-item" key={"WEDNESDAY-NOON"}>{"WEDNESDAY-NOON"}</div>
                        <div class="grid-item" key={"THURSDAY-NOON"}>{"THURSDAY-NOON"}</div>
                        <div class="grid-item" key={"FRIDAY-NOON"}>{"FRIDAY-NOON"}</div>
                        <div class="grid-item" key={"SATURDAY-NOON"}>{"SATURDAY-NOON"}</div>
                        <div class="grid-item"></div>
                    </div>
                    <div class="grid-row">
                        <div class="grid-item">Evening</div>
                        <div class="grid-item" key={"SUNDAY-EVENING"}>{"SUNDAY-EVENING"}</div>
                        <div class="grid-item" key={"MONDAY-EVENING"}>{"MONDAY-EVENING"}</div>
                        <div class="grid-item" key={"TUESDAY-EVENING"}>{"TUESDAY-EVENING"}</div>
                        <div class="grid-item" key={"WEDNESDAY-EVENING"}>{"WEDNESDAY-EVENING"}</div>
                        <div class="grid-item" key={"THURSDAY-EVENING"}>{"THURSDAY-EVENING"}</div>
                        <div class="grid-item" key={"FRIDAY-EVENING"}>{"FRIDAY-EVENING"}</div>
                        <div class="grid-item" key={"SATURDAY-EVENING"}>{"SATURDAY-EVENING"}</div>
                        <div class="grid-item"></div>
                    </div>
                    <div class="grid-row">
                        <div class="grid-item">Night</div>
                        <div class="grid-item" key={"SUNDAY-NIGHT"}>{"SUNDAY-NIGHT"}</div>
                        <div class="grid-item" key={"MONDAY-NIGHT"}>{"MONDAY-NIGHT"}</div>
                        <div class="grid-item" key={"TUESDAY-NIGHT"}>{"TUESDAY-NIGHT"}</div>
                        <div class="grid-item" key={"WEDNESDAY-NIGHT"}>{"WEDNESDAY-NIGHT"}</div>
                        <div class="grid-item" key={"THURSDAY-NIGHT"}>{"THURSDAY-NIGHT"}</div>
                        <div class="grid-item" key={"FRIDAY-NIGHT"}>{"FRIDAY-NIGHT"}</div>
                        <div class="grid-item" key={"SATURDAY-NIGHT"}>{"SATURDAY-NIGHT"}</div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            <PatientInfoSideBar patientInfo={data.data.patient} medicineInfo={extactMedicineData(data)} />
            <div className='main-content'><BlisterPackGrid></BlisterPackGrid></div>
        </div>
    );
}

export default Patient;