const Step1_ChildDetails = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Child's Age</label>
        <input
          type="number"
          className={`form-control ${errors.age ? 'is-invalid' : ''}`}
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <div className="invalid-feedback">{errors.age}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Diagnosis</label>
        <input
          type="text"
          className={`form-control ${errors.diagnosis ? 'is-invalid' : ''}`}
          value={formData.diagnosis}
          onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
        />
        <div className="invalid-feedback">{errors.diagnosis}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Current School Type</label>
        <div>
          {['Public', 'Private', 'Homeschool'].map((type) => (
            <div className="form-check form-check-inline" key={type}>
              <input
                type="radio"
                className="form-check-input"
                name="schoolType"
                value={type}
                checked={formData.schoolType === type}
                onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })}
              />
              <label className="form-check-label">{type}</label>
            </div>
          ))}
        </div>
        {errors.schoolType && <div className="text-danger">{errors.schoolType}</div>}
      </div>
    </div>
  );
};

export default Step1_ChildDetails;
