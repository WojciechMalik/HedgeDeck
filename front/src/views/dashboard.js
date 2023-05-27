import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <head>
          <title>HedgeDeck | Dashboard</title>
          <link rel="stylesheet" type="text/css" href="../css/dashboard.css" />
          <meta charset="UTF-8" />
          <link rel="icon" href="../img/favicon.svg" alt= ''/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <header>
            <h1>
              <span>Hedge</span>Deck
            </h1>
            <img src="../img/dashboard-hog.svg" height="200" alt='' />
          </header>
          <h2>Your sets:</h2>
          <div className="base-container">
            <div className="set-container">
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
              <div className="single-set">
                <div className="bold-text set-text">Title</div>
                <div className="category set-text">Category</div>
                <div className="phrase-counter set-text">15 phrases</div>
              </div>
            </div>

            <div className="button-container">
              <button className="new-set">
                <img src="../img/newset-icon.svg" alt="new set icon" />
                New Set
              </button>
              <button className="exit">Exit</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Dashboard;
