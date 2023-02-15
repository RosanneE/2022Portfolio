import HuesSwiper from "../Carosels/HuesSwiper";
function Hues(props) {
  return (
    <div className="myTabsDiv">
      <div className="divCenter">
        <h2>
          <a href="https://subtle-profiterole-48ae37.netlify.app/">
            Hues Adventure
          </a>
        </h2>
        <h3 className="DescThree">About</h3>
        <p className="Desc">
        Hues Adventure is a website designed to help users in their exploration of colors. Users can use the site to find appealing colors to use in digital and other media, then use the tools to play with the color. Users can lighten and darken the color, changing the tint and tone. They can use a grayscale feature to both see more hues in the color family, and to emulate a colorblind view of the color. They can also invert the color. The Color swatch pages also have a dark mode to allow users to see what the color looks like within a different background. Hues Adventures was created with MERN stack.
        </p>
        <HuesSwiper />
        <h3 className="DescThree">Reflections</h3>
        <p className="Desc">
        R&D Bookstore was the first website I created. It was a partnered project I worked on with a classmate, Dylan. The goal of the project was to create a website that emulated an existing website (in the most basic possible way), and explored relationships between objects. We chose Amazon, but took it back to the day's they sold books. The site has user authentication (by Devon), as well as full CRUD for users and books. Users can add and 'sell' books, search books by author name, title or genre, and review their purchases.
        </p>
      </div>
    </div>
  );
}

export default Hues;
