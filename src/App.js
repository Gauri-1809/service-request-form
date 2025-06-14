import React, { useState } from 'react';
import Step1 from './components/Step1_ChildDetails';
import Step2 from './components/Step2_ServiceNeeds';
import Step3 from './components/Step3_ContactInfo';
import FormNavigation from './components/FormNavigation';

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
      if (!formData.phone) newErrors.phone = 'Phone number is required';
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
    return <div className="p-6 text-center text-green-600 text-xl">Thank you! Your request has been submitted.</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Service Request Form</h2>
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 3 && <Step3 formData={formData} setFormData={setFormData} errors={errors} />}
      <FormNavigation
        step={step}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;