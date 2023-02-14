import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function PourSwiper(props) {
  return (
    <div>
      <div className="pourCarouselDiv">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          // isIntrinsicHeight = {false}
          totalSlides={5}
        >
          <div className="pourSliderDiv">
            <Slider className="pourSlider">
              <Slide index={0} className = 'slide'>
              <img className = 'pourPic' src={require("../../Assets/RandD/RDHome.png")} />
              </Slide>
              <Slide index={1} className = 'slide'>
              <img className = 'pourPic' src={require("../../Assets/RandD/RDGenreSections.png")} />
              </Slide>
              <Slide index={2} className = 'slide'>
                <img className = 'pourPic' src={require("../../Assets/RandD/RDsearch.png")} />
                </Slide>
                <Slide index={3} className = 'slide'>
              <img className = 'pourPic' src={require("../../Assets/RandD/RDUser.png")} />
              </Slide>
              <Slide index={4} className = 'slide'>
                <img className = 'pourPic' src={require("../../Assets/RandD/RDAccountCreate.png")} />
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

export default PourSwiper;
