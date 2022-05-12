import React from 'react';

function EditPersonal(props) {
  const {
    personalInfo, changeName, changeNumber, changeEmail, changeGithub,
  } = props;

  return (
    <div className="edit-personal-container">
      <input
        id="edit-personal-name"
        type="text"
        value={personalInfo.name}
        onChange={changeName}
        placeholder="Full Name"
      />
      <input
        id="edit-personal-number"
        type="text"
        value={personalInfo.number}
        onChange={changeNumber}
        placeholder="Phone Number"
      />
      <input
        id="edit-personal-email"
        type="text"
        value={personalInfo.email}
        onChange={changeEmail}
        placeholder="Email Address"
      />
      <input
        id="edit-personal-github"
        type="text"
        value={personalInfo.github}
        onChange={changeGithub}
        placeholder="Github Link"
      />
    </div>
  );
}

export default EditPersonal;
