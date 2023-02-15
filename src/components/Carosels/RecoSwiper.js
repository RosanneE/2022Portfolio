import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function RecoSwiper(props) {
  return (
    <div>
      <h1 className="caroHeader">References:</h1>
      <div className="carouselDiv">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          // isIntrinsicHeight = {false}
          totalSlides={3}
        >
          <div className="sliderDiv">
            <Slider className="slider">
              <Slide index={0} className = 'slide'>
              <img className = 'recPic' src={require("../../Assets/Rec2.png")} />
              {/* /Users/rosanne/Portfolio-Update-1.23/frontend/src/Assets/Res3.png */}
              </Slide>
              <Slide index={1} className = 'slide'>
              <img className = 'recPic' src={require("../../Assets/Rec1.png")} />
              </Slide>
              <Slide index={2} className = 'slide'>
                <img className = 'recPic' src={require("../../Assets/Rec3.png")} />
                </Slide>
            </Slider>
          </div>
          <div className="swipeButtons">
            <ButtonBack className="swipeB">Back</ButtonBack>
            <ButtonNext className="swipeB">Next</ButtonNext>
          </div>
        </CarouselProvider>
        </div>
            <h4>Additional and full recomendations are available on request</h4>
    </div>
  );
}

export default RecoSwiper;

