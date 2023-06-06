import React,{Component} from 'react';
import Header from './extra/header';
import { Helmet } from "react-helmet";

class NewSet extends Component {


  handleButton = (href)=>{
    window.location.href = href;
  }
  render() {
    return (
        <div>
            <head>
                <Helmet>
                    <title>HedgeDeck | View Set</title>
                </Helmet>
                <link rel="stylesheet" type="text/css" href="../css/new-set.css" />
                <Header/>
            </head>
            <body>
                <header>
                    <h1><span>Hedge</span>Deck</h1>
                    <img src="../img/new-set-hog.svg" height="200" />
                </header>
                <div className="title-container">
                    <button className="back-button" onClick={() => this.handleButton('/dashboard')}>
                        <img src="../img/back-icon.svg" height="32" />
                    </button>
                    <h2>New set</h2>
                </div>

                <div className="base-container">
                    <form action="addSet" method="POST">

                    <div className="element">
                        <label htmlFor="title">Title:</label><br/>
                        <input name="title" id="title" placeholder="Set title" />
                    </div>
                    <div className="element">
                        <label htmlFor="category">Categories:</label><br/>
                        <select name="category">
                            <option value = "Food">Food</option>
                            <option value = "Entertainment">Entertainment</option>
                            <option value = "Education">Education</option>
                            <option value = "Transport">Transport</option>
                            <option value = "Income">Income</option>
                        </select>
                    </div>


                    <div className="import-container element">
                        <div className="import">
                            <label htmlFor="import-button">Import</label>
                            <br/>
                            <button name="import-button" id="import-button">
                                Browse
                            </button>
                        </div>
                        <div className="separator-container">
                            <label htmlFor="separator">Separator</label>
                            <br />
                            <input name="separator" id="separator" placeholder=";" />
                           
                        </div>
                    </div>

                    <div className="term-row">
                        <div className="term-container">
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>
                            
                        </div>
                        <button name="next-button" id="next-button">Next</button>
                    </div>


                    <button type="submit" id="save">
                        Save
                    </button>
                    </form>
                </div>
            </body>
        </div>
    );
  }
}

export default NewSet;
