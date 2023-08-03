function HuesCard(props) {
    return (
      <div className="Card">
        <div className="cardFacts">
            <h1>Title</h1>
            <h3>Technologies</h3>
            <h4>About</h4>
        </div>
        <div className="cardImages">
            <img src={require("../../Assets/Pour/PourUpdate.png")}/>
        </div>
      </div>
    );
  }
  
  export default HuesCard;