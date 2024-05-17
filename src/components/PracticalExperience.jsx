import React, { useState } from 'react';

const PracticalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
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
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <input
            type="text"
            name="responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          />
          <input
            type="text"
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
            placeholder="Date From"
          />
          <input
            type="text"
            name="dateTo"
            value={experience.dateTo}
            onChange={handleChange}
            placeholder="Date To"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.dateFrom}</p>
          <p>To: {experience.dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
