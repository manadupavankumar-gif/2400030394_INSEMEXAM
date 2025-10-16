import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Single file Welcome component
const Welcome = ({ name }) => {
  return <h1>Hello, {name}! Welcome to your dashboard.</h1>;
};

// Main App component
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

// Render the App
createRoot(document.getElementById('root')).render(<App />);
