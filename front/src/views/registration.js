import React, { useState, useEffect } from "react";
import Header from './extra/header';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Registration = () =>{
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      const name = form.elements.name.value;
      const surname = form.elements.surname.value;
      const confirmedPassword = form.elements['confirm-password'].value;


      if (password !== confirmedPassword) {
        alert("Passwords do not match!");
        return;
      }
    
      axios.post("http://localhost:8082/api/users/add_user", {
          email,
          password,
        })
        .then(() => {
          axios.get("http://localhost:8082/api/users/id/" + email)
            .then((response) => {
              const data = response.data;
              console.log("data", data);
              axios.post("http://localhost:8082/api/userDetails/add_user_details/" + data, {
                    name,
                    surname,
                  }
                ).then(()=>{
                  navigate("/", { replace: true });

                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleLoginClick = () => {
      navigate("/", { replace: true });
    };

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

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
          {loading ? (
            <div className="preloader">
              <img src="../img/preloader.gif" alt="Preloader" />
            </div>
          ) : (

          <div className="container">
            <h1>
              Welcome to <br /><span>Hedge</span>Deck!
            </h1>
            <form onSubmit={handleSubmit}>
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
              Already have an account? <a href="#" onClick={handleLoginClick}>Login</a>
            </p>
          </div>
          )}
          {!loading && <img src="../../img/login_registration_picture.png" id="mem" alt="" />}
        </body>
      </div>
    );
  
}

export default Registration;
