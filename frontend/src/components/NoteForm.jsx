import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [formData, setFormData] = useState({ title: '', content: '' });
    
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;

    setFormData((currentData) => {
      return { ...currentData, [changedField]: newValue };});
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      addNote(formData);
      setFormData({ title: '', content: '' });
    };

    return (
      <form className='note-form' onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter the title..."/>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          cols="30"
          rows="5"
          required
          placeholder="Enter the content..."/>
        <button type="submit">ADD</button>
      </form>
    );
}

export default NoteForm;
