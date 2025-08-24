import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthSupport = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/health')
      .then(response => setHealthData(response.data))
      .catch(error => console.error('Error fetching health data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Health Support Resources</h2>
      <ul>
        {healthData.map((item, index) => (
          <li key={index}>{item.supportMessage}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthSupport;
