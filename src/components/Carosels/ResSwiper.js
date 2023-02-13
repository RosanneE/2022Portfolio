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
      <div className="resCarouselDiv">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          // isIntrinsicHeight = {false}
          totalSlides={3}
        >
          <div className="resSliderDiv">
            <Slider className="resSlider">
              <Slide index={0} className = 'slide'>
              <img className = 'resPic' src={require("../../Assets/Res1.png")} />
              </Slide>
              <Slide index={1} className = 'slide'>
              <img className = 'resPic' src={require("../../Assets/Res2.png")} />
              </Slide>
              <Slide index={2} className = 'slide'>
                <img className = 'resPic' src={require("../../Assets/Res3.png")} />
                </Slide>
            </Slider>
          </div>
          <div className="swipeButtons">
            <ButtonBack className="swipeB">Back</ButtonBack>
            <ButtonNext className="swipeB">Next</ButtonNext>
          </div>
        </CarouselProvider>
        </div>

    </div>
  );
}

export default RecoSwiper;

