import RandDSwiper from "../Carosels/RandDSwiper";
function RandD(props) {
    return (
        <div className="myTabsDiv">
            <h2>R&D Books</h2>
            <h3 className="DescThree">About</h3>
            <p className="Desc">
                R&D
                </p> 
            <RandDSwiper/>  
            <h3 className="DescThree">Reflections</h3>
            <p className="Desc"> 
            R&D
            </p> 

        </div>
      );
}

export default RandD;