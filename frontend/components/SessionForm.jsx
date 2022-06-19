import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // first_name: "",
      // last_name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  handleSubmit(e) {
    // console.log(this.state);
    // console.log(this.props);
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    console.log(user);
  }

  render() {
    return (
      <div className="session-form">
        <form>
          <label>
            Email:
            <input type="text" onChange={this.handleChange("email")} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" onChange={this.handleChange("password")} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Submit!
          </button>
        </form>
      </div>
    );
  }
}
export default SessionForm;
