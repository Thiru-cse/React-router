import React, { Component } from "react";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candName: "",
      candAge: "",
      roleApplied: "",
      termsCond: "",
      errors: {
        candName: "",
        candAge: "",
        roleApplied: "",
        termsCond: "",
      },
      touched: {
        candName: false,
        candAge: false,
        roleApplied: false,
        termsCond: false,
      },
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    if (type === "checkbox") value = checked;

    const errors = { ...this.state.errors };

    switch (name) {
      case "candName": {
        if (!value) {
          errors.candName = "Name is Required";
        } else {
          errors.candName = "";
        }
        break;
      }
      case "candAge": {
        if (!value) {
          errors.candAge = "Age is Required";
        } else if (value < 18) {
          errors.candAge = "Age should be 18";
        } else {
          errors.candAge = "";
        }
        break;
      }
      case "roleApplied": {
        if (!value) {
          errors.roleApplied = "Role is Required";
        } else {
          errors.roleApplied = "";
        }
        break;
      }
      case "termsCond": {
        if (!value) {
          errors.termsCond = "Accept T&C";
        } else {
          errors.termsCond = "";
        }
        break;
      }
    }

    this.setState({ ...this.state, [name]: value, errors });
  };

  handleBlur = ({ target: { name } }) => {
    const touched = { ...this.state.touched, [name]: true };
    this.setState({ touched });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.state.errors
  };

  render() {
    return (
        <>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
        <button onClick={() => this.props.history.goForward()}>Go Forward</button>
        <button onClick={() => this.props.history.push("/Post")}>Go To Post</button>
        <br/>
      <form onSubmit={this.handleSubmit}>
        <h1>Application Form</h1>
        <div>
          <label>Canditate Name: </label>
          <input
            type="text"
            name="candName"
            value={this.state.candName}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <br />
          <span>{this.state.errors.candName}</span>
        </div>
        <br />
        <div>
          <label>Canditate Age: </label>
          <input
            type="number"
            name="candAge"
            value={this.state.candAge}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <br />
          <span>{this.state.errors.candAge}</span>
        </div>
        <br />
        <div>
          <label>Role Applied: </label>
          <select
            name="roleApplied"
            value={this.state.roleApplied}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          >
            <option value="node">Node Developer</option>
            <option value="react">React Developer</option>
            <option value="mern">Mern Developer</option>
          </select>
          <br />
          <span>{this.state.errors.roleApplied}</span>
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            name="termsCond"
            value={this.state.termsCond}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <label>I agree to Terms & Condition </label>
          <br />
          <span>{this.state.errors.termsCond}</span>
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </>
    );
  }
}

export default Form;