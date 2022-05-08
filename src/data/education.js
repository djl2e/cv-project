class Education {
  constructor(educationId, school, degree, startDate, endDate) {
    this.educationId = educationId;
    this.school = school;
    this.degree = degree;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  editSchool(newSchool) {
    this.school = newSchool;
  }

  editDegree(newDegree) {
    this.degree = newDegree;
  }

  editStartDate(newStartDate) {
    this.startDate = newStartDate;
  }

  editEndDate(newEndDate) {
    this.endDate = newEndDate;
  }
}

export default Education;
