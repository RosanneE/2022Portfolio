function HuesCard(props) {
    return (
        <div className="card">
          <div className="cardFacts">
            <a classname = 'cardA' href = 'https://subtle-profiterole-48ae37.netlify.app/'><h1 className="card1 card1Link" >Hues Your Own Adventure</h1></a>
            <h3 className="card3">MERN Stack / API usage  </h3>
            <h4 className="card5">Hues Adventure is a website designed to help users in their exploration of colors. Users can use the site to find appealing colors to use in digital and other media, then use the tools to play with the color. Users can lighten and darken the color, changing the tint and tone. They can use a grayscale feature to both see more hues in the color family, and to emulate a colorblind view of the color. They can also invert the color. The Color swatch pages also have a dark mode to allow users to see what the color looks like within a different background. </h4>
          </div>
          <div className="cardImages">
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Hues/HuesHome.png")} 
              alt="Home Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Hues/HuesDetail.png")}
              alt="Detail Page"
            />
            <img
              className="pourPic cardImg"
              src={require("../../Assets/Hues/HuesDark.png")}
              alt="Detail Page: Dark Mode"
            />
          </div>
        </div>
      );
  }
  
  export default HuesCard;