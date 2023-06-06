import React, { useEffect, useState} from 'react';
import Header from './extra/header';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import Cookies from 'js-cookie';

const Practise = () => {
  const navigate = useNavigate(); 
  const [isFlipped, setIsFlipped] = useState(false);
  const [set, setSet] = useState({});
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(true);

  useEffect(() => {
    if (!Cookies.get('tokenId')) {
      navigate('/');
    } else {
      fetchSet();
    }
  }, [navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const fetchSet = () => {
    axios
      .get('http://localhost:8082/api/set/getSet/' + localStorage.getItem('idSet'))
      .then(response => {
        const sortedFlashcards = response.data.flashcards.sort((a, b) => a.id_flashcard - b.id_flashcard);
        setSet({ ...response.data, flashcards: sortedFlashcards });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handlePreviousCard = () => {
    const { flashcards } = set;
    const lastIndex = flashcards.length - 1;
    setCurrentCardIndex(prevIndex => (prevIndex === 0 ? lastIndex : prevIndex - 1));
  };

  const handleNextCard = () => {
    const { flashcards } = set;
    const lastIndex = flashcards.length - 1;
    setCurrentCardIndex(prevIndex => (prevIndex === lastIndex ? 0 : prevIndex + 1));
  };

  const handleButton = href => {
    navigate(href);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (set.flashcards && set.flashcards.length > 0) {
    const currentCard = set.flashcards[currentCardIndex];

    return (
      <div>
        <head>
          <Helmet>
            <title>HedgeDeck | View Set</title>
          </Helmet>
          <link rel="stylesheet" type="text/css" href="../css/practise.css" />
          <Header />
        </head>
        <div>
        {loading ? (
          <div className="preloader">
            <img src="../img/preloader.gif" alt="Preloader" />
          </div>
        ) : (
            <body>
            <header>
                <h1>
                <span>Hedge</span>Deck
                </h1>
                <img src="../img/practise-hog.svg" height="200" alt="" />
            </header>

            <div className="menu">
                <button className="back menu-button" onClick={() => handleButton('/viewSet')}>
                <img src="../img/back-icon.svg" />
                </button>
            </div>
            <div className="base-container">
                <div className="setName">{set.name}</div>
                <div className="flashcard-container">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="flashcard">
                    <div className="previous navbutton">
                        <button onClick={handlePreviousCard}>
                        <img src="../img/left-arrow.svg" />
                        </button>
                    </div>
                    <div className="middle">
                        <div className="counter">{currentCardIndex + 1}/{set.flashcards.length}</div>
                        <div className="text">{currentCard.term}</div>
                        <button className="flipper" onClick={handleClick}>Flip Card</button>
                    </div>
                    <div className="next navbutton">
                        <button onClick={handleNextCard}>
                        <img src="../img/right-arrow.svg" />
                        </button>
                    </div>
                    </div>

                    <div className="flashcard">
                    <div className="previous navbutton">
                        <button onClick={handlePreviousCard}>
                        <img src="../img/left-arrow.svg" />
                        </button>
                    </div>
                    <div className="middle">
                        <div className="counter">{currentCardIndex + 1}/{set.flashcards.length}</div>
                        {showErrors && <div className="text">{currentCard.definition}</div>}
                        <button className="flipper" onClick={handleClick}>Flip Card</button>
                    </div>
                    <div className="next navbutton">
                        <button onClick={handleNextCard}>
                        <img src="../img/right-arrow.svg" />
                        </button>
                    </div>
                    </div>
                </ReactCardFlip>
                </div>
            </div>
            </body>
        )}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Practise;
