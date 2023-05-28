import React from 'react';
import Header from './extra/header';
import Cookies from "js-cookie";
import axios from 'axios';

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
      .get("http://localhost:8082/api/set/getAllSets/" + Cookies.get('token'))
      .then(response => {
        this.setState({ sets: response.data});

        
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { sets } = this.state;

    return (
      <div>
        <head>
          <title>HedgeDeck | Dashboard</title>
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
          <div className="sets-container">
            {sets.map((set) => (
              <div className="base-container" key={set.id}>
                <div className="set-container">
                  <div className="single-set">
                    <div className="bold-text set-text">{set.name}</div>
                    {/* <div className="category set-text">
                      Category:
                      {set.categories.map((category, index) => (
                        <span key={index}>{category}</span>
                      ))}
                    </div> */}
                    <div className="phrase-counter set-text">{set.flashcards.length} phrases</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="new-set">
              <img src="../img/newset-icon.svg" alt="new set icon" />
              New Set
            </button>
            <button className="exit">Exit</button>
          </div>
        </body>
      </div>
    );
  }
}

export default Dashboard;
