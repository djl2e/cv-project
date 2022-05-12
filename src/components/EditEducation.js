import React from 'react';

function EditEducation(props) {
  const {
    education, changeEducationSchool, changeEducationDegree,
    changeEducationStartDate, changeEducationEndDate,
  } = props;

  return (
    <div className="edit-education-container">
      {education.map((edu, count) => (
        <div className="edit-edu" id={edu.educationId} key={edu.educationId}>
          <h3 className="edit-edu-subheader">
            Education
            {' '}
            {count + 1}
          </h3>
          <input
            id="edit-edu-school"
            type="text"
            value={edu.school}
            onChange={changeEducationSchool}
            placeholder="Instition Name"
          />
          <input
            id="edit-edu-degree"
            type="text"
            value={edu.degree}
            onChange={changeEducationDegree}
            placeholder="Degree Earned"
          />
          <input
            id="edit-edu-start-date"
            type="text"
            value={edu.startDate}
            onChange={changeEducationStartDate}
            placeholder="Degree Start Date"
          />
          <input
            id="edit-edu-end-date"
            type="text"
            value={edu.endDate}
            onChange={changeEducationEndDate}
            placeholder="Degree End Date"
          />
        </div>
      ))}
    </div>
  );
}

export default EditEducation;
