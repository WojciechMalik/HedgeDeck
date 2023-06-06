import React, { useEffect, useState } from 'react';
import Header from './extra/header';
import axios from 'axios';
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ViewSet = () => {
    const navigate = useNavigate();
    const [setId, setSetId] = useState(null); // Dodany stan setId
    const [set, setSet] = useState({});
    const [loading, setLoading] = useState(false);
    const [flashcards, setFlashcards] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
    const [newFlashcards, setNewFlashcards] = useState([]);
    const [setTitle, setSetTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategoryId(event.target.value);
    };



    const handleButton = (href) => {
        window.location.href = href;
    };

    useEffect(() => {
        if (!localStorage.getItem("idSet")) {
            navigate("/dashboard");
        } else if (!Cookies.get('tokenId')) {
            navigate('/login');
        } else {
            console.log(localStorage.getItem('idSet')); // Dodaj ten console.log
            fetchSet();
        }
    }, [navigate]);

    const fetchSet = () => {
        const idSet = localStorage.getItem('idSet');
        setSetId(idSet); // Ustawienie wartości setId na idSet
        axios
            .get(`http://localhost:8082/api/set/getSet/${idSet}`)
            .then(response => {
                setSet(response.data);
                setSetTitle(response.data.name);
                const sortedFlashcards = response.data.flashcards.sort((a, b) => a.id_flashcard - b.id_flashcard);
                setFlashcards(sortedFlashcards);
            })
            .catch(error => {
                console.error(error);
            });


        axios
            .get('http://localhost:8082/api/category/getAllCategories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        console.log(flashcards);
        console.log(set);
    }, [flashcards, set]);

    const handleAddFlashcard = () => {
        setNewFlashcards(prevFlashcards => [...prevFlashcards, { term: '', definition: '' }]);
    };

    const handleSave = () => {
        newFlashcards.forEach((newFlashcard) => {
            console.log(newFlashcard);
            if (newFlashcard.term !== '' && newFlashcard.definition !== '') {
                newFlashcard.id_flashcard = -1;
                axios
                    .post(
                        `http://localhost:8082/api/flashcard/addFlashcard?setId=${localStorage.getItem('idSet')}`,
                        newFlashcard
                    )
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });

        flashcards.forEach((flashcard) => {
            if (flashcard.term !== '' && flashcard.definition !== '') {
                axios
                    .put('http://localhost:8082/api/flashcard/updateFlashcard', flashcard)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });

        if (setTitle !== '') {
            const updatedSet = { setId: setId, name: setTitle };
            axios.put(`http://localhost:8082/api/set/updateSetTitle`, updatedSet)
                .then((response) => {
                    console.log(response.data);
                    setSet(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        axios
            .put(`http://localhost:8082/api/set/updateSetCategory/${setId}`, { categoryId: selectedCategoryId })
            .then((response) => {
                console.log(response.data);
                setSet({ ...set, id_category: selectedCategoryId });
            })
            .catch((error) => {
                console.error(error);
            });


        setIsSaved(true);

        setTimeout(() => {
            setIsSaved(false);
        }, 3000);
    };

    const handleDeleteSet = () => {
        console.log(localStorage.getItem('idSet'));
        axios
            .delete(`http://localhost:8082/api/set/deleteSet/${localStorage.getItem('idSet')}`)
            .then(() => {
                navigate('/dashboard');
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div>
            <Helmet>
                <title>HedgeDeck | View Set</title>
            </Helmet>
            <link rel="stylesheet" type="text/css" href="../css/view-set.css" />
            <Header />

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
                        <img src="../img/view-set-hog.svg" height="200" alt="" />
                    </header>
                    <div className="menu">
                        <button className="back menu-button" onClick={() => handleButton("/dashboard")}>
                            <img src="../img/back-icon.svg" height="32" />
                        </button>
                        <button className="delete menu-button" onClick={handleDeleteSet}>
                            <img src="../img/delete.svg" height="32" />
                        </button>
                        <button className="practise menu-button" onClick={() => handleButton("/practise")}>
                            Practise
                            <img className="practise-img" src="../img/practise.svg" height="32" />
                        </button>
                    </div>
                    <div className="base-container">
                        <form action="modifySet" method="POST" />
                        <div className="first-row">
                            <div className="fr-container">
                                <label htmlFor="title">Title:</label>
                                <br />
                                <input name="title" id="title" placeholder={setTitle}
                                    onChange={(e) => setSetTitle(e.target.value)}
                                />
                            </div>
                            <div className="fr-container">
                                <label htmlFor="category">Category:</label>
                                <br />
                                <select
                                    name="category"
                                    value={selectedCategoryId}
                                    onChange={handleCategoryChange}
                                >
                                    {categories.map((category) => (
                                        <option key={category.id_category} value={category.id_category}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="term-container">
                            {flashcards.length > 0 ? (
                                flashcards.map((flashcard, index) => (
                                    <div className="single-term" key={index}>
                                        <input
                                            name="term"
                                            id={`term-${index}`}
                                            placeholder={flashcard.term}
                                            onChange={e => {
                                                const updatedFlashcards = [...flashcards];
                                                updatedFlashcards[index].term = e.target.value;
                                                setFlashcards(updatedFlashcards);
                                            }}
                                        />
                                        <input
                                            name="definition"
                                            id={`definition-${index}`}
                                            placeholder={flashcard.definition}
                                            onChange={e => {
                                                const updatedFlashcards = [...flashcards];
                                                updatedFlashcards[index].definition = e.target.value;
                                                setFlashcards(updatedFlashcards);
                                            }}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No flashcards found.</p>
                            )}
                            {newFlashcards.length > 0 && (
                                newFlashcards.map((flashcard, index) => (
                                    <div className="single-term" key={index}>
                                        <input
                                            name="term"
                                            id={`term-${index}`}
                                            placeholder={flashcard.term}
                                            onChange={e => {
                                                const flashcards_new = [...newFlashcards];
                                                flashcards_new[index].term = e.target.value;
                                                setNewFlashcards(flashcards_new);
                                            }}
                                        />
                                        <input
                                            name="definition"
                                            id={`definition-${index}`}
                                            placeholder={flashcard.definition}
                                            onChange={e => {
                                                const flashcards_new = [...newFlashcards];
                                                flashcards_new[index].definition = e.target.value;
                                                setNewFlashcards(flashcards_new);
                                            }}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                        <button id="addFlashcard" onClick={handleAddFlashcard}>Add Flashcard</button>
                        <button type="button" id="save" onClick={handleSave}>
                            {isSaved ? 'Saved!' : 'Save'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewSet;
