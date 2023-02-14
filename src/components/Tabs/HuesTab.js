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
          Hues Adventure is awebsite designed to help users in their exploration of colors.  Users can use the site to find appealing colors to use in digital and other media, then use the tools to play with the color.  Users can lighten and darken the color, changing the tint and tone.  They can use a greyscale feature to both see more hues in the color family, and to emulate a colorblind view of the color.  They can also invert the color.  The Color swatch pages also have a dark mode to allow users to see the what the color looks like within a different background.  Hues Adventures was created with MERN stack.
        </p>
        <HuesSwiper />
        <h3 className="DescThree">Reflections</h3>
        <p className="Desc">
          If I were redoing this project, I would create a limit to how many hues are shown on a list page, as loading the main and list page take overly long to display.  I would also like to create a similar color finder that would use hex codes to recommend other similar colors to explore (and possibly complimentary colors).
        </p>
      </div>
    </div>
  );
}

export default Hues;
