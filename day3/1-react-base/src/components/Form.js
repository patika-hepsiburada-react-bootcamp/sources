import { useState } from 'react';

function Form() {
  const [form, setForm] = useState({ name: '', surname: '', city: '01' });

  const onFormChange = (e) => {
    setForm((formData) => ({ ...formData, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      Name
      <input name="name" value={form.name} onChange={onFormChange} />
      <br />
      <br />
      Surname
      <input name="surname" value={form.surname} onChange={onFormChange} />
      <br />
      <br />
      <select name="city" value={form.city} onChange={onFormChange}>
        <option value="01">Adana</option>
        <option value="02">Adıyaman</option>
        <option value="03">Ardahan</option>
      </select>
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default Form;
