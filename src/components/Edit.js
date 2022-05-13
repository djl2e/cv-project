import React from 'react';
import EditPersonal from './EditPersonal';
import EditWork from './EditWork';
import EditEducation from './EditEducation';

function Edit(props) {
  const {
    personalInfo, workExperience, education,
    changeName, changeNumber, changeEmail, changeGithub,
    changeWorkCompany, changeWorkPosition, changeWorkStartDate,
    changeWorkEndDate, changeWorkDescription, changeEducationSchool,
    changeEducationDegree, changeEducationStartDate,
    changeEducationEndDate, submitAddWork, submitAddEducation,
    deleteWork, deleteEducation,
  } = props;

  return (
    <div className="edit-container">
      <h2 id="edit-personal-header">Personal Details</h2>
      <EditPersonal
        personalInfo={personalInfo}
        changeName={(e) => { changeName(e); }}
        changeNumber={(e) => { changeNumber(e); }}
        changeEmail={(e) => { changeEmail(e); }}
        changeGithub={(e) => { changeGithub(e); }}
      />
      <h2 id="edit-work-header">Work Experience</h2>
      <EditWork
        workExperience={workExperience}
        changeWorkCompany={(e) => { changeWorkCompany(e); }}
        changeWorkPosition={(e) => { changeWorkPosition(e); }}
        changeWorkStartDate={(e) => { changeWorkStartDate(e); }}
        changeWorkEndDate={(e) => { changeWorkEndDate(e); }}
        changeWorkDescription={(e) => { changeWorkDescription(e); }}
        deleteWork={(e) => { deleteWork(e); }}
      />
      <button id="add-work-button" onClick={submitAddWork} type="submit">Add Work Experience</button>
      <h2 id="edit-education-header">Education</h2>
      <EditEducation
        education={education}
        changeEducationSchool={(e) => { changeEducationSchool(e); }}
        changeEducationDegree={(e) => { changeEducationDegree(e); }}
        changeEducationStartDate={(e) => { changeEducationStartDate(e); }}
        changeEducationEndDate={(e) => { changeEducationEndDate(e); }}
        deleteEducation={(e) => { deleteEducation(e); }}
      />
      <button id="add-education-header" onClick={submitAddEducation} type="submit">Add Education</button>
    </div>
  );
}

export default Edit;
