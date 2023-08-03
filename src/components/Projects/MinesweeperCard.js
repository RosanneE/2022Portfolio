function MineCard(props) {
    return (
        <div className="card">
          <div className="cardFacts">
            <h1 className="card1">Pour Choices</h1>
            <h3 className="card3">Django / PSQL  </h3>
            <h4 className="card5">Pour Choices is an app for home bartenders to find recipes and instructions specific to the ingredients and tools they have at  home.  The app allows users to input their ingredients, and filter cocktails by the ingredients they have.  Users can create lists of cocktails (ex. 'favorites', 'party ideas', 'to try', etc.) and can add new cocktails to the database.  Cocktails also have tags to help users find flavor profiles they are interested in. The website was created using Django and PostgreSQL as the capstone project for my coding boot camp.  NOTE: This site is in process of being rebuilt after changes to Heroku.  </h4>
          </div>
          <div className="cardImages">
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Pour/PourMyBar.png")}
              alt="Home Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Pour/PourCocktailCard.png")}
              alt="Cocktail information Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Pour/PourSearch.png")}
              alt="Search Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Pour/PourUserAccount.png")}
              alt="User Account Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Pour/PourUpdate.png")}
              alt="Update Page"
            />
          </div>
        </div>
      );
  }
  
  export default MineCard;