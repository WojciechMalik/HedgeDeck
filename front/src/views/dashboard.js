import React from 'react';
import Header from './extra/header';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Helmet } from "react-helmet";

class Dashboard extends React.Component {
  state = {
    sets: [],
    amount: 0,
  };

  componentDidMount() {
    this.fetchSets();
  }

  fetchSets() {
    axios
      .get('http://localhost:8082/api/set/getAllSets/' + Cookies.get('tokenId'))
      .then(response => {
        this.setState({ sets: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSetClick = (setId,href) => {
    localStorage.setItem('idSet', JSON.stringify(setId));
    window.location.href = href;
  };

  handleButton = (href)=>{
    window.location.href = href;
  }

  render() {
    const { sets } = this.state;

    return (
      <div>
        <head>
          <Helmet>
            <title>HedgeDeck | Dashboard</title>
          </Helmet>
          <link rel="stylesheet" type="text/css" href="../css/dashboard.css" />
          <Header />
        </head>
        <body>
          <header>
            <h1>
              <span>Hedge</span>Deck
            </h1>
            <img src="../img/dashboard-hog.svg" height="200" alt='' />
          </header>
          <h2>Your sets:</h2>
          <div className="base-container">
            <div className= "set-container">
              {sets.map((set) => (
                <div className="single-set set-link"
                  key={set.id_set}
                  onClick={() => this.handleSetClick(set.id_set,'/viewSet')}
                >
                  <div className="bold-text set-text">{set.name}</div>
                  <div className="phrase-counter set-text">
                    {set.flashcards.length} phrases
                  </div>
                </div>
              ))}
            </div>
          

            <div className="button-container">
              <button className="new-set" onClick={() =>this.handleButton('/newSet')}>
                <img src="../img/newset-icon.svg" alt="new set icon" />
                New Set
              </button>
              <button className="exit" onClick={() =>this.handleButton('/logout')}>Exit</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Dashboard;
