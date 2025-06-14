const Step3_ContactInfo = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Parent's Name</label>
        <input
          type="text"
          className={`form-control ${errors.parentName ? 'is-invalid' : ''}`}
          value={formData.parentName}
          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
        />
        <div className="invalid-feedback">{errors.parentName}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <div className="invalid-feedback">{errors.phone}</div>
      </div>
    </div>
  );
};

export default Step3_ContactInfo;
