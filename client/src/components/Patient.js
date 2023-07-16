import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import firstImage from '../assets/1.jpg';
import secondImage from '../assets/2.jpg';
import thirdImage from '../assets/3.jpg';

import capsuleOne from '../assets/capsule1.jpg';
import capsuleTwo from '../assets/capsule2.jpg';
import capsuleThree from '../assets/capsule3.jpg';

function Patient(props) {

    const { id } = useParams();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [blisterPackIndex, setBlisterPackIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/blisterpack/?id=${id}`); // Replace with your API endpoint
                const jsonData = await response.json();
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
        const randomImageIndex = Math.floor(Math.random() * 3);
        console.log(randomImageIndex);

        setBlisterPackIndex(randomImageIndex);
    }


    const PatientInfoSideBar = ({ patientInfo, medicineInfo }) => {
        console.log(patientInfo);
        let counter = 0;

        return (
            <div className="sidebar">
                <div className="card-content">
                    <h2 className="card-title" >{patientInfo.name}</h2>
                    <p className="card-description" key={`${patientInfo.name}${patientInfo.address}`}>{patientInfo.address}</p>
                </div>

                <div>
                    {medicineInfo.map((blisterpack, index) => (

                        <div className="card-content" key={`card-content-${index} ${blisterpack.drug_identification_number}${blisterpack.brand_name}`}>
                            <b key={`card-brandname-${index} ${blisterpack.drug_identification_number}${blisterpack.brand_name}`}>{blisterpack.brand_name}</b>
                            <p key={`card-company-name-${index} ${blisterpack.drug_identification_number}${blisterpack.brand_name}`}>{blisterpack.drug_identification_number}</p>
                            <button onClick={() => { handleClick(blisterpack) }}>{"View Layout"}</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    const BlisterPackGrid = () => {

        const RANDOM_IMAGE_ARRAY = [firstImage, secondImage, thirdImage];

        console.log(blisterPackIndex);
        console.log(RANDOM_IMAGE_ARRAY[blisterPackIndex])

        return (
            <img src={RANDOM_IMAGE_ARRAY[blisterPackIndex]} />
        )
    }

    const CapsuleImage = () => {

        const RANDOM_IMAGE_ARRAY = [capsuleOne, capsuleTwo, capsuleThree];

        console.log(blisterPackIndex);
        console.log(RANDOM_IMAGE_ARRAY[blisterPackIndex])

        return (

            <div className="card">
                <div className="card-content">
                    <label>
                        <input
                            type="checkbox"
                        />
                        Has Been Verified
                    </label>

                    <h3 className="card-title">{"Medicine Image"}</h3>
                    <img src={RANDOM_IMAGE_ARRAY[blisterPackIndex]} style={{ height: '200px', width: '300px' }} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <PatientInfoSideBar patientInfo={data.data.patient} medicineInfo={extactMedicineData(data)} />
            <div className='main-content'>


                <BlisterPackGrid />
                <CapsuleImage />

            </div>
        </div>
    );
}

export default Patient;