import React, { useState } from 'react';
import Welcome from './Welcome'; 

const App = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Student Dashboard Greetings</h2>
      <input
        type="text"
        placeholder="Enter student's name..."
        value={name}
        onChange={handleNameChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <hr />
      {name && <Welcome name={name} />}
    </div>
  );
};

export default App;
