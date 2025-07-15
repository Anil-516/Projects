import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree'; 
import '../styles/MultiStepForm.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3; // Updated to 3 steps
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',    // New address fields
    city: '',      // New address fields
    state: '',     // New address fields
    zip: ''        // New address fields
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="multi-step-form">
      <ProgressBar step={step} totalSteps={totalSteps} />
      
      {step === 1 && 
        <StepOne formData={formData} setFormData={setFormData} />}
      
      {step === 2 && 
        <StepTwo formData={formData} setFormData={setFormData} />}
      
      {step === 3 && 
        <StepThree formData={formData} setFormData={setFormData} />}
      
      <div className="form-navigation">
        {step > 1 && (
          <button className="nav-button prev" onClick={prevStep}>
            Back
          </button>
        )}
        {step < totalSteps ? (
          <button className="nav-button next" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;