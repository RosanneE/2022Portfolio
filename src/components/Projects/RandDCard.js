function RandDCard(props) {
    return (
        <div className="card">
          <div className="cardFacts">
            <h1 className="card1">R&D Books</h1>
            <h3 className="card3">Node / JSX / MongoDB  </h3>
            <h4 className="card5">R&D Bookstore was the first website I created.  It was a partnered poject I worked on with a classmate, Dylan.  The goal of the project was to create a website that emulated an existing website (in the most basic possible way), and explored relationships between objects.  We chose Amazon, but took it back to the days they sold books.  The site has user authentication (by Devon), as well as full CRUD for users and books.  Users can add and 'sell' books, search books by author name title or genre, and review their purchases.  NOTE: This site is in process of being rebuilt after changes to Heroku.  </h4>
          </div>
          <div className="cardImages">
            <img
              className="pourPic cardImg"
              src={require("../../Assets/RandD/RDHome.png")}
              alt="Home Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/RandD/RDGenreSections.png")}
              alt="Genre Selections"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/RandD/RDsearch.png")}
              alt="Search Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/RandD/RDUser.png")}
              alt="User Account Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/RandD/RDAccountCreate.png")}
              alt="Account Creation Page"
            />
          </div>
        </div>
      );
  }
  
  export default RandDCard;