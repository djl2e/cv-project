import React, { Component } from 'react';
import data from '../data/data';

class AppPersonal extends Component {
  constructor() {
    super();

    this.state = {
      name: data.name,
      number: data.number,
      email: data.email,
      github: data.github,
    };

    this.changeName = this.changeName.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeGithub = this.changeGithub.bind(this);
  }

  changeName = (e) => {
    data.editName(e.target.value);
  };

  changeNumber = (e) => {
    data.editNumber(e.target.value);
  };

  changeEmail = (e) => {
    data.editEmail(e.target.value);
  };

  changeGithub = (e) => {
    data.editGithub(e.target.value);
  };

  render() {
    const {
      name, number, email, github,
    } = this.state;

    return (
      <div className="personal-info-form">
        <h2 id="personal-info-header-form">Personal Details</h2>
        <form>
          <input id="name-form" type="text" placeholder={name} onChange={this.changeName} />
          <input id="number-form" type="text" placeholder={number} onChange={this.changeNumber} />
          <input id="email-form" type="text" placeholder={email} onChange={this.changeEmail} />
          <input id="github-form" type="text" placeholder={github} onChange={this.changeGithub} />
        </form>
      </div>
    );
  }
}

export default AppPersonal;
