class Work {
  constructor(workId, company, position, startDate, endDate) {
    this.workId = workId;
    this.company = company;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  editCompany(newCompany) {
    this.company = newCompany;
  }

  editPosition(newPosition) {
    this.position = newPosition;
  }

  editStartDate(newStartDate) {
    this.startDate = newStartDate;
  }

  editEndDate(newEndDate) {
    this.endDate = newEndDate;
  }
}

export default Work;
