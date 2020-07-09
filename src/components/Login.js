import React, { Component } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=60*1000";

    window.location.replace("/");
  };

  render() {
    return (
      <div className="container">
<link href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap" rel="stylesheet" />
        <div className="forms">
          <h2 className="head2">Homework Helper</h2>
          <h1 className="head1">Login</h1>
          <p className="createAcc">
            Don't have an account? Create your account
          </p>
          <div className="login">
          <Container maxWidth="sm">
            <form className="login-form" onSubmit={this.login}>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.username}
                name="username"
                label="Username"
                type="text"
              />
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.password}
                name="password"
                label="Password"
                type="password"
              />
              <Button
                type="submit"
                className="login-button"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
          </Container>
          </div>
        </div>
        <div className="welcome">
          <h2 className="WelcomeH2">Welcome Back!</h2>
          <p>Create quizzes, play games, and inspire students</p>
        </div>
      </div>
    );
  }
}

export default Login;
