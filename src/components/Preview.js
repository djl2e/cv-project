import React from 'react';

function Preview(props) {
  const { personalInfo, workExperience, education } = props;

  return (
    <div className="preview-container">
      <div className="preview-personal">
        <h2 id="preview-name">{personalInfo.name}</h2>
        <div className="preview-personal-right">
          <p id="preview-number">{personalInfo.number}</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;
