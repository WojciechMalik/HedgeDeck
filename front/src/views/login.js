import React, { Component } from "react";
import Header from "./extra/header";
import { Helmet } from "react-helmet";
class Login extends Component {
  render() {
    return (
      <div>
        <body>
          <Helmet>
            <title>HedgeDeck | Login</title>
          </Helmet>
        
        <link rel="stylesheet" type="text/css" href="../css/login-registration.css" />
        <Header/>

        <div className="container">
          <h1>
            Welcome to <span><br />Hedge</span>Deck!
          </h1>
          <form action="login" method="POST">
            <div className="messages"></div>

            <div className="input-container">
              <img src="../img/mail-icon.svg" height="20" width="20" alt="Mail Icon" />
              <input name="email" type="text" placeholder="Mail" />
            </div>

            <div className="input-container">
              <img src="../img/password-icon.svg" height="20" width="20" alt="Password Icon" />
              <input name="password" type="password" placeholder="Password" />
            </div>

            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <a href="registration">Sign Up</a></p>
        </div>
        <img src="../../img/login_registration_picture.png" id="mem" alt="" />
        </body>
      </div>
    );
  }
}

export default Login;
