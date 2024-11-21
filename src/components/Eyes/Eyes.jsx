import { useState, useEffect, useRef } from "react";
import "./Eyes.scss";

function Eyes() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef();
  const eyeRight = useRef();

  const eyeBrowLeft = useRef();
  const eyeBrowRight = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    const rect = element.current.getBoundingClientRect();
    let elX = rect.left + rect.width / 2;
    let elY = rect.top + rect.height / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + 360;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

    eyeBrowLeft.current.style.transform = `translateY(${event.clientY / 50}px)`;
    eyeBrowRight.current.style.transform = `translateY(${event.clientY / 50}px)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <h1 className="text-7xl font-bold text-white mb-20">Someone Is Staring At You</h1>
      <div className="eyebrow_container">
        <div ref={eyeBrowLeft} className="eye_brow left"></div>
        <div ref={eyeBrowRight} className="eye_brow right"></div>
      </div>
      <div className="eye_container">
        <div
          ref={eyeLeft}
          style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`,
          }}
          className="eye "
        ></div>
        <p className="text-[5px] text-white -mx-10">Click Hold</p>
        <div
          ref={eyeRight}
          style={{
            transform: `rotate(${calcAngle(eyeRight)}deg)`,
          }}
          className="eye "
        ></div>
      </div>
    </div>
  );
}

export default Eyes;
