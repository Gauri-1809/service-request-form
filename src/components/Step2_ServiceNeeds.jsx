const Step2 = ({ formData, setFormData, errors }) => {
  const handleCheckbox = (value) => {
    const updated = formData.support.includes(value)
      ? formData.support.filter((s) => s !== value)
      : [...formData.support, value];
    setFormData({ ...formData, support: updated });
  };
  return (
    <div className="space-y-4">
      <div>
        <label className="block">Type of Support Needed:</label>
        {['Speech Therapy', 'Behavioral Therapy', 'Occupational Therapy'].map((s) => (
          <label key={s} className="block">
            <input type="checkbox" value={s} checked={formData.support.includes(s)} onChange={() => handleCheckbox(s)} /> {s}
          </label>
        ))}
        {errors.support && <p className="text-red-500 text-sm">{errors.support}</p>}
      </div>
      <div>
        <label className="block">Preferred Frequency:</label>
        <select value={formData.frequency} onChange={(e) => setFormData({ ...formData, frequency: e.target.value })} className="input">
          <option value="">Select</option>
          <option>Weekly</option>
          <option>Bi-weekly</option>
          <option>Monthly</option>
        </select>
        {errors.frequency && <p className="text-red-500 text-sm">{errors.frequency}</p>}
      </div>
      <div>
        <label className="block">Specific Requirements:</label>
        <textarea value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })} className="input" rows={3} />
      </div>
    </div>
  );
};

export default Step2;
