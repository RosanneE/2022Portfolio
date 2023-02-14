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
              <img className = 'pourPic' src={require("../../Assets/Pour/PourMyBar.png")} />
              </Slide>
              <Slide index={1} className = 'slide'>
              <img className = 'pourPic' src={require("../../Assets/Pour/PourCocktailCard.png")} />
              </Slide>
              <Slide index={2} className = 'slide'>
                <img className = 'pourPic' src={require("../../Assets/Pour/PourSearch.png")} />
                </Slide>
                <Slide index={3} className = 'slide'>
              <img className = 'pourPic' src={require("../../Assets/Pour/PourUserAccount.png")} />
              </Slide>
              <Slide index={4} className = 'slide'>
                <img className = 'pourPic' src={require("../../Assets/Pour/PourUpdate.png")} />
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

