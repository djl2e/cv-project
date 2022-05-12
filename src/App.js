/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Preview from './components/Preview';
import Edit from './components/Edit';

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

    this.toEditMode = this.toEditMode.bind(this);
    this.toPreviewMode = this.toPreviewMode.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeGithub = this.changeGithub.bind(this);
    this.changeWorkCompany = this.changeWorkCompany.bind(this);
    this.changeWorkPosition = this.changeWorkPosition.bind(this);
    this.changeWorkStartDate = this.changeWorkStartDate.bind(this);
    this.changeWorkEndDate = this.changeWorkEndDate.bind(this);
    this.changeWorkDescription = this.changeWorkDescription.bind(this);
    this.changeEducationSchool = this.changeEducationSchool.bind(this);
    this.changeEducationDegree = this.changeEducationDegree.bind(this);
    this.changeEducationStartDate = this.changeEducationStartDate.bind(this);
    this.changeEducationEndDate = this.changeEducationEndDate.bind(this);
    this.submitAddWork = this.submitAddWork.bind(this);
    this.submitAddEducation = this.submitAddEducation.bind(this);
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
    const workId = e.target.parentNode.id;
    const newCompany = e.target.value;
    const newWork = [...this.state.workExperience];

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        const workItem = { ...newWork[i] };
        workItem.company = newCompany;
        newWork[i] = workItem;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkPosition(e) {
    const workId = e.target.parentNode.id;
    const newPosition = e.target.value;
    const newWork = [...this.state.workExperience];

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        const workItem = { ...newWork[i] };
        workItem.position = newPosition;
        newWork[i] = workItem;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkStartDate(e) {
    const workId = e.target.parentNode.id;
    const newStartDate = e.target.value;
    const newWork = [...this.state.workExperience];

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        const workItem = { ...newWork[i] };
        workItem.startDate = newStartDate;
        newWork[i] = workItem;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkEndDate(e) {
    const workId = e.target.parentNode.id;
    const newEndDate = e.target.value;
    const newWork = [...this.state.workExperience];

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        const workItem = { ...newWork[i] };
        workItem.endDate = newEndDate;
        newWork[i] = workItem;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeWorkDescription(e) {
    const workId = e.target.parentNode.id;
    const newDescription = e.target.value;
    const newWork = [...this.state.workExperience];

    for (let i = 0; i < newWork.length; i++) {
      if (newWork[i].workId === workId) {
        const workItem = { ...newWork[i] };
        workItem.description = newDescription;
        newWork[i] = workItem;
        break;
      }
    }

    this.setState({
      workExperience: newWork,
    });
  }

  changeEducationSchool(e) {
    const educationId = e.target.parentNode.id;
    const newSchool = e.target.value;
    const newEducation = [...this.state.education];

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        const eduItem = { ...newEducation[i] };
        eduItem.school = newSchool;
        newEducation[i] = eduItem;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  changeEducationDegree(e) {
    const educationId = e.target.parentNode.id;
    const newDegree = e.target.value;
    const newEducation = [...this.state.education];

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        const eduItem = { ...newEducation[i] };
        eduItem.degree = newDegree;
        newEducation[i] = eduItem;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  changeEducationStartDate(e) {
    const educationId = e.target.parentNode.id;
    const newStartDate = e.target.value;
    const newEducation = [...this.state.education];

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        const eduItem = { ...newEducation[i] };
        eduItem.startDate = newStartDate;
        newEducation[i] = eduItem;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  changeEducationEndDate(e) {
    const educationId = e.target.parentNode.id;
    const newEndDate = e.target.value;
    const newEducation = [...this.state.education];

    for (let i = 0; i < newEducation.length; i++) {
      if (newEducation[i].educationId === educationId) {
        const eduItem = { ...newEducation[i] };
        eduItem.endDate = newEndDate;
        newEducation[i] = eduItem;
        break;
      }
    }

    this.setState({
      education: newEducation,
    });
  }

  submitAddWork() {
    const newWork = {
      workId: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    this.setState({
      workExperience: this.state.workExperience.concat(newWork),
    });
  }

  submitAddEducation() {
    const newEducation = {
      educationId: uuidv4(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    };
    this.setState({
      education: this.state.education.concat(newEducation),
    });
  }

  deleteWork(e) {
    const workId = e.target.parentNode.id;
    const newWork = [...this.state.workExperience];
    const filteredWork = newWork.filter((work) => work.workId !== workId);

    this.setState({
      workExperience: filteredWork,
    });
  }

  deleteEducation(e) {
    const educationId = e.target.parentNode.id;
    const newEducation = [...this.state.education];
    const filteredEducation = newEducation.filter((edu) => edu.educationId !== educationId);

    this.setState({
      education: filteredEducation,
    });
  }

  render() {
    return (
      <div className="main-container">
        <Edit
          personalInfo={this.state.personalInfo}
          workExperience={this.state.workExperience}
          education={this.state.education}
          changeName={(e) => { this.changeName(e); }}
          changeNumber={(e) => { this.changeNumber(e); }}
          changeEmail={(e) => { this.changeEmail(e); }}
          changeGithub={(e) => { this.changeGithub(e); }}
          changeWorkCompany={(e) => { this.changeWorkCompany(e); }}
          changeWorkPosition={(e) => { this.changeWorkPosition(e); }}
          changeWorkStartDate={(e) => { this.changeWorkStartDate(e); }}
          changeWorkEndDate={(e) => { this.changeWorkEndDate(e); }}
          changeWorkDescription={(e) => { this.changeWorkDescription(e); }}
          changeEducationSchool={(e) => { this.changeEducationSchool(e); }}
          changeEducationDegree={(e) => { this.changeEducationDegree(e); }}
          changeEducationStartDate={(e) => { this.changeEducationStartDate(e); }}
          changeEducationEndDate={(e) => { this.changeEducationEndDate(e); }}
          submitAddWork={() => { this.submitAddWork(); }}
          submitAddEducation={() => { this.submitAddEducation(); }}
          deleteWork={(e) => { this.deleteWork(e); }}
          deleteEducation={(e) => { this.deleteEducation(e); }}
        />
        <Preview
          personalInfo={this.state.personalInfo}
          workExperience={this.state.workExperience}
          education={this.state.education}
        />
      </div>
    );
  }
}

export default App;
