import React, { useState } from 'react';

const EducationalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            type="text"
            name="title"
            value={education.title}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            type="text"
            name="date"
            value={education.date}
            onChange={handleChange}
            placeholder="Date of Study"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
