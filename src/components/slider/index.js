import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "./styles.css";
import data from '../../JSON/slide.json'

export default function Carrousel() {
  const [current, setCurrent] = useState(0);
  const [x, setX] = useState(0);
  
const images = data[0].imagens
  function nextImage() {
    x === -100 * (images.length - 1) ? setCurrent(0) : setCurrent(current + 1);
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  }

  function previousImage() {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
    x === 0 ? setCurrent(1 * (images.length - 1)) : setCurrent(current - 1);
  }
  
  function renderSpans() {
    let spans = [];
    for (let i = 0; i < images.length; i++) {
      if (current === i) {
        spans.push(<span key={i} id={i} className="selected-image active" />);
      } else {
        spans.push(<span key={i} id={i} className="selected-image" />);
      }
    }
    return spans;
  }
  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="slide"
          style={{
            backgroundImage: `url('/Slide/${image}')`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: `translateX(${x}%)`
          }}
        />
      ))}
      <span className="current-image">{renderSpans()}</span>
      <button className="backArrow" onClick={nextImage}>
        <NavigateNextIcon style={{ fontSize: 30 }} />
      </button>
      <button className="nextArrow" onClick={previousImage}>
        <NavigateBeforeIcon style={{ fontSize: 30 }} />
      </button>
    </div>
  );
}

    