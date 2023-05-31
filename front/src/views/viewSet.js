import React,{Component} from "react";
import Header from "./extra/header";
import { Helmet } from "react-helmet";

class ViewSet extends Component{

    handleButton = (href)=>{
        window.location.href = href;
      }


    render(){
        return(
            <div>
                <head>
                    <Helmet>
                        <title>HedgeDeck | View Set</title>
                    </Helmet>
                    <link rel="stylesheet" type="text/css" href="../css/view-set.css" />
                    <Header/>
                </head>
                <body>
                    <header>
                        <h1>
                            <span>Hedge</span>Deck
                        </h1>
                        <img src="../img/view-set-hog.svg" height="200" alt="" />
                    </header>
                    <div className="menu">
                        <button className="back menu-button" onClick={()=>this.handleButton('/dashboard')} >
                            <img src="../img/back-icon.svg" height="32" />
                        </button>
                        <button className ="delete menu-button" onClick={()=>('')}>
                            <img src="../img/delete.svg" height="32" />
                        </button>
                        <button className="practise menu-button" onClick={()=>this.handleButton('/practise')}>Practise
                            <img className="practise-img" src="../img/practise.svg" height="32" />
                        </button>
                    </div>
                    <div className="base-container">
                        <form action="modifySet" method="POST"/>
                        <div className="first-row">
                            <div className="fr-container">
                                <label htmlFor="title">Title:</label><br/>
                                <input name="title" id="title" placeholder="Title"/>
                            </div>
                            <div className="fr-container">
                                <label htmlFor="category">Categories:</label><br/>
                                <select name="category">
                                    <option value = "Food">Food</option>
                                    <option value = "Entertainment">Entertainment</option>
                                    <option value = "Education">Education</option>
                                    <option value = "Transport">Transport</option>
                                    <option value = "Income">Income</option>
                                </select>
                            </div>
                        </div>

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
                            <div className="single-term">
                                <input name="term" id="term" placeholder="Term"/>
                                <input name="definition" id="definition" placeholder="Definition"/>
                            </div>

                            
                        </div>
                        <button type="submit" id="save">Save</button>
                    </div>
                </body>
            </div>
        );
    }



}

export default ViewSet;