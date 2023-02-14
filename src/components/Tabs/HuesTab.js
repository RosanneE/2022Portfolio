import HuesSwiper from "../Carosels/HuesSwiper";
function Hues(props) {
    return (
        <div className="myTabsDiv">
            <h2><a href = 'https://subtle-profiterole-48ae37.netlify.app/'>Hues Adventure</a></h2>
            <h3 className="DescThree">About</h3>
            <p className="Desc">
                Hues Adventure
                </p> 
            <HuesSwiper/>
            <h3 className="DescThree">Reflections</h3>
            <p className="Desc">   
                Hues
            </p>

        </div>
      );
}

export default Hues;