import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
import '../../assets/css/main.css';
import '../../../src/App.css';
function Home() {
  document.title="خانه";
  const [index, setIndex] = useState(1);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='mediacarousel'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="samsung A12"
          src="A12.jpg"
          alt="samsung A12"
        />
        <Carousel.Caption>
          <h3>samsung A12</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="poco m3 "
          src="poco m3   02.jpg"
          alt="poco m3 "
        />
        <Carousel.Caption>
          <h3>poco m3</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="شیامی نوت 10"
          src="شیامی نوت 10.jpg "
          alt="شیامی نوت 10"
        />

        <Carousel.Caption>
          <h3>شیامی نوت 10</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
};
export default Home;
