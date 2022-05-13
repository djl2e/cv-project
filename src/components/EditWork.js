import React from 'react';

function EditWork(props) {
  const {
    workExperience, changeWorkCompany, changeWorkPosition, changeWorkStartDate,
    changeWorkEndDate, changeWorkDescription, deleteWork,
  } = props;

  return (
    <div className="edit-work-container">
      {workExperience.map((work, count) => (
        <div className="edit-work" id={work.workId} key={work.wokId}>
          <div className="edit-work-top">
            <h3 className="edit-work-subheader">
              Work Experience
              {' '}
              {count + 1}
            </h3>
            <button
              className="delete-work-button"
              onClick={deleteWork}
              type="submit"
            >
              Delete
            </button>
          </div>
          <input
            className="edit-work-company"
            type="text"
            value={work.company}
            onChange={changeWorkCompany}
            placeholder="Company Name"
          />
          <input
            className="edit-work-position"
            type="text"
            value={work.position}
            onChange={changeWorkPosition}
            placeholder="Position Held"
          />
          <input
            className="edit-work-start-date"
            type="text"
            value={work.startDate}
            onChange={changeWorkStartDate}
            placeholder="Company Start Date"
          />
          <input
            className="edit-work-end-date"
            type="text"
            value={work.endDate}
            onChange={changeWorkEndDate}
            placeholder="Company End Date"
          />
          <textarea
            className="edit-work-description"
            value={work.description}
            onChange={changeWorkDescription}
            placeholder="Work Descrtiption"
          />
        </div>
      ))}
    </div>
  );
}

export default EditWork;
