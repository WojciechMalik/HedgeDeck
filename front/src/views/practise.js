import React, { Component } from 'react';
import Header from './extra/header';
import axios from 'axios';
import { Helmet } from "react-helmet";
class Practise extends Component {
  state = {
    set: {},
    currentCardIndex: 0,
    showErrors: true,
    completed: false,
  };

  componentDidMount() {
    this.fetchSet();
  }

  fetchSet() {
    axios
      .get('http://localhost:8082/api/set/getSet/' + localStorage.getItem('idSet'))
      .then(response => {
        this.setState({ set: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handlePreviousCard = () => {
    this.setState(prevState => ({
      currentCardIndex: prevState.currentCardIndex - 1,
    }));
  };

  handleNextCard = () => {
    const { set, currentCardIndex } = this.state;
    const { flashcards } = set;
    const lastIndex = flashcards.length - 1;

    if (currentCardIndex === lastIndex) {
      this.setState({ completed: true });
    } else {
      this.setState(prevState => ({
        currentCardIndex: prevState.currentCardIndex + 1,
      }));
    }
  };

  toggleShowErrors = () => {
    this.setState(prevState => ({
      showErrors: !prevState.showErrors,
    }));
  };
  
  handleButton = (href)=>{
    window.location.href = href;
  }
  render() {
    const { set, currentCardIndex, showErrors, completed } = this.state;
    const { flashcards } = set;

    if (flashcards && flashcards.length > 0) {
      const currentCard = flashcards[currentCardIndex];

      return (
        <div>

                <Helmet>
                    <title>HedgeDeck | View Set</title>
                </Helmet>
                
                <link rel="stylesheet" type="text/css" href="../css/new-set.css" />
                <Header/>
    
                
                    <nav >

                    
                    <h1>
                    <span>Hedge</span>Deck
                    </h1>
                    
                    <div className="menu">
                        <button className="back" onClick={()=>this.handleButton('/viewSet')} >
                            <img src="../img/back-icon.svg" height="32" />
                        </button>
                        <Header />
                    </div>
                    </nav>


          <div>{set.name}</div>
          <div>
            <button onClick={this.handlePreviousCard} disabled={currentCardIndex === 0}>
              Lewo
            </button>
            <button onClick={this.handleNextCard} disabled={currentCardIndex === flashcards.length - 1}>
              Prawo
            </button>
          </div>
          <div>
            <div>{currentCard.term}</div>
            {showErrors && <div>{currentCard.definition}</div>}
          </div>
          <div>

          </div>
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

export default Practise;
