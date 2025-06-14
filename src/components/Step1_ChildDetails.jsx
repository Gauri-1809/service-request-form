const Step1 = ({ formData, setFormData, errors }) => (
  <div className="space-y-4">
    <div>
      <label className="block">Child's Age:</label>
      <input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="input" />
      {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
    </div>
    <div>
      <label className="block">Diagnosis:</label>
      <input type="text" value={formData.diagnosis} onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })} className="input" />
      {errors.diagnosis && <p className="text-red-500 text-sm">{errors.diagnosis}</p>}
    </div>
    <div>
      <label className="block">School Type:</label>
      {['Public', 'Private', 'Homeschool'].map((type) => (
        <label key={type} className="block">
          <input type="radio" name="schoolType" value={type} checked={formData.schoolType === type} onChange={(e) => setFormData({ ...formData, schoolType: e.target.value })} /> {type}
        </label>
      ))}
      {errors.schoolType && <p className="text-red-500 text-sm">{errors.schoolType}</p>}
    </div>
  </div>
);

export default Step1;