import React, { useEffect, useState } from 'react';
import Header from './extra/header';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Cookies.get('tokenId')) {
      navigate('/login');
    } else {
      fetchSets();
    }
  }, [navigate]);

  const fetchSets = () => {
    axios
      .get('http://localhost:8082/api/set/getAllSets/' + Cookies.get('tokenId'))
      .then(response => {
        setSets(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSetClick = (setId, href) => {
    localStorage.setItem('idSet', JSON.stringify(setId));
    window.location.href = href;
  };

  const handleButton = href => {
    if (href === '/logout') {
      Cookies.remove('tokenId'); 
      navigate('/login');
    } else {
      window.location.href = href;
    }
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
        <title>HedgeDeck | Dashboard</title>
      </Helmet>
      <link rel="stylesheet" type="text/css" href="../css/dashboard.css" />
      <Header />
      <div>
        {loading ? (
          <div className="preloader">
            <img src="../img/preloader.gif" alt="Preloader" />
          </div>
        ) : (
          <div>
            <header>
              <h1>
                <span>Hedge</span>Deck
              </h1>
              <img src="../img/dashboard-hog.svg" height="200" alt="" />
            </header>
            <h2>Your sets:</h2>
            <div className="base-container">
              <div className="set-container">
                {sets.map(set => (
                  <div
                    className="single-set set-link"
                    key={set.id_set}
                    onClick={() => handleSetClick(set.idSet, '/viewSet')}
                  >
                    <div className="bold-text set-text">{set.name}</div>
                    <div className="category-name set-text">Category Name</div>
                    <div className="phrase-counter set-text">
                      {set.flashcards.length} phrases
                    </div>
                  </div>
                ))}
              </div>

              <div className="button-container">
                <button className="new-set" onClick={() => handleButton('/newSet')}>
                  <img src="../img/newset-icon.svg" alt="new set icon" />
                  New Set
                </button>
                <button className="exit" onClick={() => handleButton('/logout')}>
                  Exit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
