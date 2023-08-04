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
          // isIntrinsicHeight = {true}
          totalSlides={5}
        >
                    <div className="swipeButtons">
            <ButtonBack className="swipeB">Back</ButtonBack>
            <ButtonNext className="swipeB">Next</ButtonNext>
          </div>
          <div className="resSliderDiv">
            <Slider className="resSlider">
              <Slide index={0} className = 'slide'>
              <img className = 'resPic' src={require("../../Assets/ResumeImg/1.jpg")} />
              </Slide>
              <Slide index={1} className = 'slide'>
              <img className = 'resPic' src={require("../../Assets/ResumeImg/2.jpg")} />
              </Slide>
              <Slide index={2} className = 'slide'>
                <img className = 'resPic' src={require("../../Assets/ResumeImg/3.jpg")} />
                </Slide>
                <Slide index={2} className = 'slide'>
                <img className = 'resPic' src={require("../../Assets/ResumeImg/4.jpg")} />
                </Slide>
                <Slide index={2} className = 'slide'>
                <img className = 'resPic' src={require("../../Assets/ResumeImg/5.jpg")} />
                </Slide>
            </Slider>
          </div>

        </CarouselProvider>
        </div>

    </div>
  );
}

export default RecoSwiper;

