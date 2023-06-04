import React, { Component } from 'react';
import Header from './extra/header';
import axios from 'axios';
import { Helmet } from "react-helmet";
import ReactCardFlip from 'react-card-flip';

class Practise extends Component {

    constructor(){
        super();
        this.state = {
            isFlipped: false,
            set: {},
            currentCardIndex: 0,
            showErrors: true,
            completed: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

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
        const { flashcards } = this.state.set;
        const lastIndex = flashcards.length - 1;
        this.setState(prevState => ({
          currentCardIndex: prevState.currentCardIndex === 0 ? lastIndex : prevState.currentCardIndex - 1,
        }));
    };
      
    handleNextCard = () => {
        const { flashcards } = this.state.set;
        const lastIndex = flashcards.length - 1;
        this.setState(prevState => ({
          currentCardIndex: prevState.currentCardIndex === lastIndex ? 0 : prevState.currentCardIndex + 1,
        }));
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
                    <head>
                        <Helmet>
                            <title>HedgeDeck | View Set</title>
                        </Helmet>
                        <link rel="stylesheet" type="text/css" href="../css/practise.css" />
                        <Header/>
                    </head>
                    <body>
                        <header>
                            <h1>
                                <span>Hedge</span>Deck
                            </h1>
                            <img src="../img/practise-hog.svg" height="200" alt="" />
                        </header>
                        
                        <div className="menu">
                            <button className="back menu-button" onClick={()=>this.handleButton('/viewSet')} >
                                <img src="../img/back-icon.svg"/>
                            </button>
                        </div>
                        <div className="base-container">
                            <div className="setName">{set.name}</div>
                            <div className="flashcard-container">
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                                    <div className="flashcard">
                                        <div className="previous navbutton">
                                            <button onClick={this.handlePreviousCard}>
                                            <img src="../img/left-arrow.svg"/>
                                            </button>
                                        </div>
                                        <div className="middle">
                                            <div className="counter">{currentCardIndex+1}/{flashcards.length}</div>
                                            <div className="text">{currentCard.term}</div>
                                            <button class = "flipper" onClick={this.handleClick}>Flip Card</button>
                                        </div>
                                        <div className="next navbutton">
                                            <button onClick={this.handleNextCard}>
                                            <img src="../img/right-arrow.svg"/>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flashcard">
                                        <div className="previous navbutton">
                                            <button onClick={this.handlePreviousCard}>
                                            <img src="../img/left-arrow.svg"/>
                                            </button>
                                        </div>
                                        <div className="middle">
                                            <div className="counter">{currentCardIndex+1}/{flashcards.length}</div>
                                            {showErrors && <div className="text">{currentCard.definition}</div>}
                                            <button class = "flipper" onClick={this.handleClick}>Flip Card</button>
                                        </div>
                                        <div className="next navbutton">
                                            <button onClick={this.handleNextCard}>
                                            <img src="../img/right-arrow.svg"/>
                                            </button>
                                        </div>
                                    </div>
                                </ReactCardFlip>
                            </div>
                        </div>
                    </body>
                </div>
            );
        }
        else{
            return <div>Loading...</div>;
        }
    }
}

export default Practise;
