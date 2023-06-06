import React, { useEffect, useState } from 'react';
import Header from './extra/header';
import axios from 'axios';
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const NewSet = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [flashcards, setFlashcards] = useState([]);
    const [setTitle, setSetTitle] = useState('');
    const [setIdSet, setSetIdSet] = useState(null);

    const handleAddFlashcard = () => {
        setFlashcards(prevFlashcards => [...prevFlashcards, { term: '', definition: '' }]);
    };

    const handleButton = (href)=>{
        window.location.href = href;
    }

    useEffect(() => {
        if (!Cookies.get('tokenId')) {
            navigate('/');
        } else {
            fetchSet();
        }
    }, [navigate]);

    const fetchSet = () => {
        axios
            .get('http://localhost:8082/api/category/getAllCategories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleSave = () => {
        if (setTitle !== '') {
            const requestData = {
                title: setTitle,
                category: document.getElementsByName('category')[0].value,
                tokenId: Cookies.get('tokenId'),
            };
            axios
                .post('http://localhost:8082/api/set/addSet', requestData)
                .then(response => {
                    console.log(response.data);
                    const newSetId = response.data.idSet;
                    setSetIdSet(newSetId);
    
                    // Dodawanie fiszek po dodaniu zestawu
                    const addFlashcardPromises = flashcards.map(flashcard => {
                        if (flashcard.term !== '' && flashcard.definition !== '') {
                            flashcard.id_flashcard = -1;
                            console.log(flashcard);
                            return axios.post(
                                `http://localhost:8082/api/flashcard/addFlashcard?setId=${newSetId}`,
                                flashcard
                            );
                        }
                    });
    
                    Promise.all(addFlashcardPromises)
                        .then(() => {
                            console.log('Dodawanie fiszek zakończone');
                            navigate('/dashboard');
                        })
                        .catch(error => {
                            console.error(error);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };
    
    
    
  
    return (
        <div>
            <head>
                <Helmet>
                    <title>HedgeDeck | New Set</title>
                </Helmet>
                <link rel="stylesheet" type="text/css" href="../css/new-set.css" />
                <Header/>
            </head>
            {loading ? (
                <div className="preloader">
                    <img src="../img/preloader.gif" alt="Preloader" />
                </div>
            ) : (
            <body>
                <header>
                    <h1><span>Hedge</span>Deck</h1>
                    <img src="../img/new-set-hog.svg" height="200" />
                </header>
                <div className="title-container">
                    <button className="back-button" onClick={() => handleButton('/dashboard')}>
                        <img src="../img/back-icon.svg" height="32" />
                    </button>
                    <h2>New set</h2>
                </div>

                <div className="base-container">
                    

                    <div className="element">
                        <label htmlFor="title">Title:</label><br/>
                        <input name="title" id="title" placeholder="Set title" 
                            onChange={(e) => setSetTitle(e.target.value)}
                        />
                    </div>
                    <div className="element">
                        <label htmlFor="category">Categories:</label><br/>
                        <select name="category">
                            {categories.map((category) => (
                                <option key={category.id_category} value={category.id_category}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="term-row">
                        <div className="term-container">
                            {flashcards.map((flashcard, index) => (
                                <div className="single-term" key={index}>
                                    <input
                                        name={`term-${index}`}
                                        id={`term-${index}`}
                                        placeholder="Term"
                                        value={flashcard.term}
                                        onChange={e => {
                                            const updatedFlashcards = [...flashcards];
                                            updatedFlashcards[index].term = e.target.value;
                                            setFlashcards(updatedFlashcards);
                                        }}
                                    />
                                    <input
                                        name={`definition-${index}`}
                                        id={`definition-${index}`}
                                        placeholder="Definition"
                                        value={flashcard.definition}
                                        onChange={e => {
                                            const updatedFlashcards = [...flashcards];
                                            updatedFlashcards[index].definition = e.target.value;
                                            setFlashcards(updatedFlashcards);
                                        }}
                                    />
                                </div>
                            ))}
                            
                        </div>
                    </div>
                    <div className='buttons-container'>
                        <button id="addFlashcard" onClick={handleAddFlashcard}>Add Flashcard</button>
                        <button id="save" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </body>
            )}
        </div>
    );
  
}

export default NewSet;
