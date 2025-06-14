const FormNavigation = ({ step, handleNext, handlePrevious, handleSubmit }) => (
  <div className="mt-6 flex justify-between">
    {step > 1 && <button onClick={handlePrevious} className="px-4 py-2 bg-gray-300 rounded">Previous</button>}
    {step < 3 && <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>}
    {step === 3 && <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>}
  </div>
);

export default FormNavigation;
