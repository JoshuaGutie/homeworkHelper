import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      // value: event.target.value,
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    // don't reload the page
    event.preventDefault();
    this.setState({
      username: "",
      password: "",
      loggedIn: !this.state.loggedIn,
    });
    console.log(this.state.loggedIn);
  }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />;
    } else {
      return (
        <div className="container">
          <div className="forms">
            <h1 className="head1">Login</h1>
            <p className="createAcc">
              Don't have an account? Create your account
            </p>
            <form style={{ marginTop: "0px" }}>
              <TextField
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />

              <TextField
                placeholder="Password"
                name="password"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </form>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
            
          </div>
          <div className = "welcome">
              <h2 className ="WelcomeH2">Welcome Back!</h2>
              <p>Create quizzes, play games, and inspire students</p>
            </div>
        </div>
      );
    }
  }
}

export default App;
