import React,{Component} from 'react';
import Header from './extra/header';
import { Helmet } from 'react-helmet';

class Registration extends Component {

  render() {
    return (
      <div>
        <head>
          <Helmet>
            <title>HedgeDeck | Registration</title>
          </Helmet>
    
          <link rel="stylesheet" type="text/css" href="../css/login-registration.css" />
          <Header/>
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
