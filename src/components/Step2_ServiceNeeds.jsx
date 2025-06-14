const Step2_ServiceNeeds = ({ formData, setFormData, errors }) => {
  const supportOptions = ['Speech Therapy', 'Occupational Therapy', 'Behavioral Support'];

  const toggleSupport = (option) => {
    const current = formData.support.includes(option)
      ? formData.support.filter((item) => item !== option)
      : [...formData.support, option];
    setFormData({ ...formData, support: current });
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Type of Support Needed</label>
        {supportOptions.map((option) => (
          <div className="form-check" key={option}>
            <input
              className="form-check-input"
              type="checkbox"
              value={option}
              checked={formData.support.includes(option)}
              onChange={() => toggleSupport(option)}
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}
        {errors.support && <div className="text-danger">{errors.support}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Preferred Frequency</label>
        <select
          className={`form-select ${errors.frequency ? 'is-invalid' : ''}`}
          value={formData.frequency}
          onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
        >
          <option value="">Select frequency</option>
          <option value="Weekly">Weekly</option>
          <option value="Biweekly">Biweekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <div className="invalid-feedback">{errors.frequency}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Any Specific Requirements</label>
        <textarea
          className="form-control"
          rows={3}
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Step2_ServiceNeeds;
