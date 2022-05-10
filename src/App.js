import React, { Component } from 'react';
import uniqueid from 'uniqueid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      onEditMode: true,
      personalInfo: {
        name: 'John Doe',
        number: '000-000-0000',
        email: 'johndoe@gmail.com',
        github: 'github.com/johndoe',
      },
      workExperience: [],
      education: [],
    };
  }

  toEditMode() {
    if (!this.state.onEditMode) {
      this.setState({
        onEditMode: true,
      });
    }
  }

  toPreviewMode() {
    if (this.state.onEditMode) {
      this.setState({
        onEditMode: false,
      });
    }
  }

  changeName(e) {
    const newPersonalInfo = this.state.personalInfo;
    newPersonalInfo.name = e.target.value;
    this.setState({
      personalInfo: newPersonalInfo,
    });
  }

  changeNumber(e) {
    const newPersonalInfo = this.state.personalInfo;
    newPersonalInfo.number = e.target.value;
    this.setState({
      personalInfo: newPersonalInfo,
    });
  }

  changeEmail(e) {
    const newPersonalInfo = this.state.personalInfo;
    newPersonalInfo.email = e.target.value;
    this.setState({
      personalInfo: newPersonalInfo,
    });
  }

  changeGithub(e) {
    const newPersonalInfo = this.state.personalInfo;
    newPersonalInfo.github = e.target.value;
    this.setState({
      personalInfo: newPersonalInfo,
    });
  }

  changeWorkCompany(e) {
    const workId = e.target.id;
    const newCompany = e.target.value;
    const newWork = this.state.workExperience;

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        newWork[i].position = newCompany;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkPosition(e) {
    const workId = e.target.id;
    const newPosition = e.target.value;
    const newWork = this.state.workExperience;

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        newWork[i].position = newPosition;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkStartDate(e) {
    const workId = e.target.id;
    const newStartDate = e.target.value;
    const newWork = this.state.workExperience;

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        newWork[i].startDate = newStartDate;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkEndDate(e) {
    const workId = e.target.id;
    const newEndDate = e.target.value;
    const newWork = this.state.workExperience;

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        newWork[i].endDate = newEndDate;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeEducationSchool(e) {
    const educationId = e.target.id;
    const newSchool = e.target.value;
    const newEducation = this.state.education;

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        newEducation[i].school = newSchool;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  changeEducationDegree(e) {
    const educationId = e.target.id;
    const newDegree = e.target.value;
    const newEducation = this.state.education;

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        newEducation[i].degree = newDegree;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  changeEducationStartDate(e) {
    const educationId = e.target.id;
    const newStartDate = e.target.value;
    const newEducation = this.state.education;

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        newEducation[i].startDate = newStartDate;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  changeEducationEndDate(e) {
    const educationId = e.target.id;
    const newEndDate = e.target.value;
    const newEducation = this.state.education;

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        newEducation[i].endDate = newEndDate;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  submitAddWork(e) {
    e.preventDefault();
    const newWork = {
      workId: uniqueid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
    };
    this.setState({
      workExperience: this.state.workExperience.concat(newWork),
    });
  }

  submitAddEducation(e) {
    e.preventDefault();
    const newEducation = {
      educationId: uniqueid(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    };
    this.setState({
      education: this.state.education.concat(newEducation),
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="button-container">
          <button id="edit-button" className="current-mode" type="submit">Edit Mode</button>
          <button id="preview-button" type="submit">Preview Mode</button>
        </div>
      </div>
    );
  }
}

export default App;
