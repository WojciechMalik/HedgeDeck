import React from 'react';

class Registration extends React.Component {
  render() {
    return (
      <div>
        <head>
          <title>HedgeDeck | Registration</title>
          <link rel="stylesheet" type="text/css" href="../css/login-registration.css" />
          <meta charset="UTF-8" />
          <link rel="icon" href="../img/favicon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="container">
            <h1>
              Welcome to <span><br /></span>HedgeDeck!
            </h1>
            <form action="registration" method="POST">
              <div className="input-container">
                <img src="../img/mail-icon.svg" height="20" width="20" />
                <input name="email" type="text" placeholder="Mail" />
              </div>
              <div className="input-container">
                <img src="../img/password-icon.svg" height="20" width="20" />
                <input name="password" type="password" placeholder="Password" />
              </div>
              <div className="input-container">
                <img src="../img/password-icon.svg" height="20" width="20" />
                <input name="confirm-password" type="password" placeholder="Confirm Password" />
              </div>
              <div className="input-container">
                <img src="../img/username-icon.svg" height="20" width="20" />
                <input name="name" type="text" placeholder="Name" />
              </div>
              <div className="input-container">
                <img src="../img/username-icon.svg" height="20" width="20" />
                <input name="surname" type="text" placeholder="Surname" />
              </div>
              <button type="submit">Submit</button>
            </form>
            <p>
              Already have an account? <a href="login">Login</a>
            </p>
          </div>
          <img src="../img/login_registration_picture.png" id="mem" />
        </body>
      </div>
    );
  }
}

export default Registration;
