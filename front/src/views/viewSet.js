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

                <Helmet>
                    <title>HedgeDeck | View Set</title>
                </Helmet>
                
                <link rel="stylesheet" type="text/css" href="../css/new-set.css" />
                <Header/>
    
                <header>
                    <nav >

                    
                    <h1>
                    <span>Hedge</span>Deck
                    </h1>
                    
                    <div className="menu">
                        <button className="back" onClick={()=>this.handleButton('/dashboard')} >
                            <img src="../img/back-icon.svg" height="32" />
                        </button>
                        <button className ="delete" onClick={()=>('')}>
                            <img src="../img/delete.svg" height="32" />
                        </button>
                        <button className="practise" onClick={()=>this.handleButton('/practise')}>Practise
                            <img src="../img/practise.svg" height="32" />
                        </button>
                    </div>
                    </nav>
                    <img src="../img/new-set-hog.svg" height="200" alt="" />
                </header>
                <div className="settings set">
                    <div className="title">
                        Term
                    </div>

                    <div className="category">
                        Category
                    </div>
                </div>
                
                <button>
                    Save
                </button>
            </div>
        );
    }



}

export default ViewSet;