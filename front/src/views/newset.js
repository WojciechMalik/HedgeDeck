import React from 'react';
import Header from './extra/header';

class NewSet extends React.Component {
  render() {
    return (
      <div>
        <head>
          <title>HedgeDeck | New Set</title>
          <link rel="stylesheet" type="text/css" href="../css/new-set.css" />
          <Header/>
          <div>
            a
          </div>
        </head>
        <body>
          <header>
            <h1>
              <span>Hedge</span>Deck
            </h1>
            <img src="../img/new-set-hog.svg" height="200" />
          </header>
          <div className="title-container">
            <button className="back-button">
              <img src="../img/back-icon.svg" height="32" />
            </button>
            <h2>New set</h2>
          </div>

          <div className="base-container">
            <form action="addTransaction" method="POST">
              <label htmlFor="title">Title:</label>
              <br />
              <input name="title" id="title" placeholder="Set title" />
              <br />

              <label htmlFor="category">Categories:</label>
              <br />
              <input name="category" id="category" placeholder="Category" />
              <br />

              <div className="import-container">
                <div className="import">
                  <label htmlFor="import-button">Import</label>
                  <br />
                  <button name="import-button" id="import-button">
                    Browse
                  </button>
                </div>
                <div className="separator-container">
                  <label htmlFor="separator">Separator</label>
                  <br />
                  <input name="separator" id="separator" placeholder=";" />
                  <br />
                </div>
              </div>

              <div className="term-row">
                <div className="term-container">
                  <div className="single-term">
                    <div className="term">
                      <label htmlFor="term">Term:</label>
                      <br />
                      <input name="term" id="term" placeholder="Term" />
                      <br />
                    </div>
                    <div className="definition">
                      <label htmlFor="definition">Title:</label>
                      <br />
                      <input name="definition" id="definition" placeholder="Definition" />
                      <br />
                    </div>
                  </div>
                </div>
                <button name="next-button" id="next-button">
                  Next
                </button>
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
