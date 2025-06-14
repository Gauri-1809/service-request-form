const FormNavigation = ({ step, handleNext, handlePrevious, handleSubmit }) => {
  return (
    <div className="d-flex justify-content-between mt-4">
      {step > 1 && (
        <button className="btn btn-secondary" onClick={handlePrevious}>
          Previous
        </button>
      )}
      {step < 3 && (
        <button className="btn btn-primary ms-auto" onClick={handleNext}>
          Next
        </button>
      )}
      {step === 3 && (
        <button className="btn btn-success ms-auto" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
