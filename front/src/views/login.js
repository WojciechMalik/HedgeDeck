import React, { useState, useEffect } from "react";
import Header from "./extra/header";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    axios.post("http://localhost:8082/api/users/login", {
      email: email,
      password: password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        axios.get("http://localhost:8082/api/users/id/" + email)
          .then(response => {
            const data = response.data;
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 1);
            Cookies.set("tokenId", data, { expires: expirationDate });
          })
          .catch(error => {
            console.error(error);
          });

        navigate("/dashboard", { replace: true });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLoginClick = () => {
    navigate("/registration", { replace: true });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Helmet>
        <title>HedgeDeck | Login</title>
      </Helmet>

      <link rel="stylesheet" type="text/css" href="../css/login-registration.css" />
      <Header />

      <body>
        {loading ? (
          <div className="preloader">
            <img src="../img/preloader.gif" alt="Preloader" />
          </div>
        ) : (
          <div className="container">
            <h1>
              Welcome to <span><br />Hedge</span>Deck!
            </h1>
            <form className="login" onSubmit={handleSubmit}>
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
            <p>Don't have an account? <a href="#" onClick={handleLoginClick}>Sign Up</a></p>
          </div>
        )}

        {!loading && <img src="../../img/login_registration_picture.png" id="mem" alt="" />}
      </body>
    </div>
  );
}

export default Login;
