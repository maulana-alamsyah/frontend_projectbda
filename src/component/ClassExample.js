import React, { Component } from "react";
import axios from "axios";

class ClassExample extends Component {
  constructor() {
    super();

    this.state = {
      firstname: "",
      lastname: "",
      fullname: "",
    };
  }

  getUser = async () => {
    let respon = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    this.setState({
      user: respon.data,
    });
  };

  componentDidMount() {
    this.getUser();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitChange = (e) => {
    e.preventDefault();
    this.setState({
      fullname: `${this.state.firstname} ${this.state.lastname}`,
    });

    this.state.firstname = "";
    this.state.lastname = "";
  };

  render() {
    const { fullname } = this.state;
    return (
      <div className="container">
        <div className="w-4/6 mx-auto">
          <form
            className="flex flex-col bg-white border rounded p-5"
            onSubmit={this.submitChange}
          >
            <label htmlFor="firstname">firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="bg-gray-100 focus:outline-none"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <label htmlFor="lastname">lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="bg-gray-100 focus:outline-none"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="bg-blue-200 rounded-md text-white p-5 block w-1/4 text-center"
            >
              Show
            </button>
          </form>
          <div>nama saya adalah {fullname ? fullname : ". . ."}</div>
        </div>
      </div>
    );
  }
}

export default ClassExample;
