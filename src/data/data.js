import Education from './education';
import Work from './work';

class Data {
  constructor() {
    this.name = 'John Doe';
    this.number = '000-0000-0000';
    this.email = 'johndoe@gmail.com';
    this.github = 'github.com/johndoe';
    this.education = [];
    this.educationId = 0;
    this.work = [];
    this.workId = 0;
  }

  editName(newName) {
    this.name = newName;
  }

  editNumber(newNumber) {
    this.number = newNumber;
  }

  editEmail(newEmail) {
    this.email = newEmail;
  }

  editGithub(newGithub) {
    this.github = newGithub;
  }

  addEducation(school, degree, startDate, endDate) {
    const newEducation = new Education(this.educationId, school, degree, startDate, endDate);
    this.educationId += 1;
    this.education.push(newEducation);
  }

  getEducation(educationId) {
    return this.education.find((edu) => edu.educationId === educationId);
  }

  editEducationSchool(educationId, school) {
    const edu = this.getEducation(educationId);
    edu.editSchool(school);
  }

  editEducationDegree(educationId, degree) {
    const edu = this.getEducation(educationId);
    edu.editSchool(degree);
  }

  editEducationStartDate(educationId, startDate) {
    const edu = this.getEducation(educationId);
    edu.editSchool(startDate);
  }

  editEducationEndDate(educationId, endDate) {
    const edu = this.getEducation(educationId);
    edu.editSchool(endDate);
  }

  deleteEducation(educationId) {
    const index = this.education.findIndex((edu) => edu.educationId === educationId);
    this.education.splice(index, 1);
  }

  addWork(company, position, startDate, endDate) {
    const newWork = new Work(this.workId, company, position, startDate, endDate);
    this.workId += 1;
    this.work.push(newWork);
  }

  getWork(workId) {
    return this.work.find((wk) => wk.workId === workId);
  }

  editWorkCompany(workId, company) {
    const wk = this.getWork(workId);
    wk.editCompany(company);
  }

  editWorkPosition(workId, position) {
    const wk = this.getWork(workId);
    wk.editCompany(position);
  }

  editWorkStartDate(workId, startDate) {
    const wk = this.getWork(workId);
    wk.editCompany(startDate);
  }

  editWorkEndDate(workId, endDate) {
    const wk = this.getWork(workId);
    wk.editCompany(endDate);
  }

  deleteWork(workId) {
    const index = this.work.findIndex((wk) => wk.workId === workId);
    this.work.splice(index, 1);
  }
}

export default Data;
