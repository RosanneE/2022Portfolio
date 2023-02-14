import PourSwiper from "../Carosels/PourSwiper";
function Pour(props) {
    return (
        <div className="myTabsDiv">
            <h2>Pour Choices</h2>
            <h3>About</h3>
            <p className="pourDesc">
                Pour Choices is an app for home bartenders to find recipies and instructions specific to the ingredients and tools they have at  home.  The app allows users to input their ingredients, and filter cocktails by the ingredients they have.  Users can create lists of cocktails (ex. favorites, want to try, tried, etc.) and can add new cocktails to the database.  Cocktails also have tags to help users find flavor profiles they are interested in. The website was created using Django and PostgreSQL as the capstone project for my coding boot camp.
                </p> 
            <PourSwiper/>
            <h3>Reflections</h3>
            <p>   
                After finishing this version, I had many features I wanted to add.  My goal is that users can specify ingredients that must be in all recipies, or excluded ingredients from their search results.  I also want to create an option for users to find what ingredient they can add to their home bar that opens up the most new recipies for them, to add more functionality to cocktail tags, and to add a review element to the cocktail recipies.  I plan to recreate this project in React, as I think the flexibility of React would allow a lot more freedom in designing the website (though I did enjoy learning Django for this and plan to create further websites using it that are more suited to it).
            </p>

        </div>
      );
}

export default Pour;
