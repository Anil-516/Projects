import React from 'react';
import './App.css';
import MultiStepForm from './components/MultiStepForm';

const App = () => (
  <div className="app-container">
    <h1 className="app-title">Multi-Step Form with Progress</h1>
    <MultiStepForm />
  </div>
);

export default App;