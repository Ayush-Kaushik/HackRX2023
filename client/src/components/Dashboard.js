import React, {useState, useEffect} from 'react';
import PatientList from './PatientList';

function Dashboard() {
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/blisterpack`); // Replace with your API endpoint
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

  return (
    <div>
      <h2>Patients with pending blisterpacks</h2>

      {data && (
        <PatientList data={data}/>
      )}
    </div>
  );
}

export default Dashboard;