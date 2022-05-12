import React from 'react';

function Preview(props) {
  const { personalInfo, workExperience, education } = props;

  return (
    <div className="preview-container">
      <div className="preview-personal">
        <h2 id="preview-name">{personalInfo.name}</h2>
        <div className="preview-personal-right">
          <p id="preview-number">{personalInfo.number}</p>
          <p id="preview-email">{personalInfo.email}</p>
          <p id="preview-github">{personalInfo.github}</p>
        </div>
      </div>
      <div className="preview-work-experience">
        <h3 id="preview-work-header">Work Experience</h3>
        {workExperience.map((work) => (
          <div className="preview-work">
            <div className="preview-work-info">
              <p className="preview-work-company">{work.company}</p>
              <div className="preview-work-info-right">
                <p className="preview-work-position">{work.position}</p>
                <p className="preview-work-divider">|</p>
                <div className="preview-work-date">
                  <p className="preview-work-start-date">{work.startDate}</p>
                  <p className="preview-work-date-dash">-</p>
                  <p className="preview-work-end-date">{work.endDate}</p>
                </div>
              </div>
            </div>
            <p className="preview-work-description">{work.description}</p>
          </div>
        ))}
      </div>
      <div className="preview-education">
        <h3 id="preview-education-header">Education</h3>
        {education.map((edu) => (
          <div className="preview-edu">
            <div className="preview-edu-left">
              <p className="preview-edu-school">{edu.school}</p>
              <p className="preview-edu-degree">{edu.degree}</p>
            </div>
            <div className="preview-edu-date">
              <p className="preview-edu-start-date">{edu.startDate}</p>
              <p className="preview-edu-date-dash">-</p>
              <p className="preview-edu-end-date">{edu.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preview;
