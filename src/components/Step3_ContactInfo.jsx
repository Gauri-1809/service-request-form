const Step3 = ({ formData, setFormData, errors }) => (
  <div className="space-y-4">
    <div>
      <label className="block">Parent Name:</label>
      <input type="text" value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} className="input" />
      {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
    </div>
    <div>
      <label className="block">Email:</label>
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </div>
    <div>
      <label className="block">Phone Number:</label>
      <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="input" />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>
  </div>
);

export default Step3;