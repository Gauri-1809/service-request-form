import React, { useState } from 'react';
import Step1 from './components/Step1_ChildDetails';
import Step2 from './components/Step2_ServiceNeeds';
import Step3 from './components/Step3_ContactInfo';
import FormNavigation from './components/FormNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    age: '', diagnosis: '', schoolType: '',
    support: [], frequency: '', requirements: '',
    parentName: '', email: '', phone: ''
  });

  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.age) newErrors.age = 'Age is required';
      if (!formData.diagnosis) newErrors.diagnosis = 'Diagnosis is required';
      if (!formData.schoolType) newErrors.schoolType = 'Select school type';
    } else if (step === 2) {
      if (formData.support.length === 0) newErrors.support = 'Select at least one support type';
      if (!formData.frequency) newErrors.frequency = 'Frequency is required';
    } else if (step === 3) {
      if (!formData.parentName) newErrors.parentName = 'Parent name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.phone || !/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Submitted Data:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container mt-5">
        <div className="alert alert-success text-center">
          Thank you! Your request has been submitted.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Service Request Form</h2>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${(step / 3) * 100}%` }}
              >
                Step {step} of 3
              </div>
            </div>
          </div>

          {step === 1 && (
            <Step1 formData={formData} setFormData={setFormData} errors={errors} />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} errors={errors} />
          )}
          {step === 3 && (
            <Step3 formData={formData} setFormData={setFormData} errors={errors} />
          )}

          <FormNavigation
            step={step}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
