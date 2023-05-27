import React, { Component } from "react";


class Login extends Component {
  render() {
    return (
      <div>
        <body>
        <title>HedgeDeck | Login</title>
        <link rel="stylesheet" type="text/css" href="../css/login-registration.css" />
        <meta charset="UTF-8" />
        <link rel="icon" href="../img/favicon.svg" alt=" " />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap" rel="stylesheet" />

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
