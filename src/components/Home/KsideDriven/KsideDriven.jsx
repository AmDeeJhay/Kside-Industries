import React, { useEffect, useRef } from 'react';
import './KsideDriven.scss';
import { FaUserAlt, FaPaintBrush, FaBrain, FaClock } from 'react-icons/fa';

const KsideDriven = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add forward animation
          entry.target.classList.add(entry.target.dataset.animation);
          entry.target.classList.remove(entry.target.dataset.reverseAnimation);
        } else {
          // Add reverse animation
          entry.target.classList.remove(entry.target.dataset.animation);
          entry.target.classList.add(entry.target.dataset.reverseAnimation);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Assign animations and observe elements
    if (h2Ref.current) {
      h2Ref.current.dataset.animation = 'animate-slide-up';
      h2Ref.current.dataset.reverseAnimation = 'reverse-slide-down';
      observer.observe(h2Ref.current);
    }

    if (pRef.current) {
      pRef.current.dataset.animation = 'animate-slide-in-right';
      pRef.current.dataset.reverseAnimation = 'reverse-slide-out-left';
      observer.observe(pRef.current);
    }

    // eslint-disable-next-line no-unused-vars
    boxesRef.current.forEach((box, index) => {
      if (box) {
        box.dataset.animation = 'animate-slide-in-diagonal';
        box.dataset.reverseAnimation = 'reverse-slide-out-diagonal';
        observer.observe(box);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="kside-driven">
      <div className="kside-content">
        <h2 ref={h2Ref}>
          We have Driven<br /> innovators, creators,<br /> and visionaries.
        </h2>
        <p ref={pRef}>
          We are the go-to company for handling various<br /> frameworks. Our journey is
          defined by<br /> commitment to excellence and passion for<br /> delivering outstanding
          results.
        </p>
      </div>
      <div className="info-boxes">
        {['Client-centric Approach', 'Creative Excellence', 'Strategic Thinking', 'Timely Delivery'].map(
          (title, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
              className="box"
            >
              {index === 0 && <FaUserAlt className="icon" />}
              {index === 1 && <FaPaintBrush className="icon" />}
              {index === 2 && <FaBrain className="icon" />}
              {index === 3 && <FaClock className="icon" />}
              {title}
              <p>
                We put you in the drivers seat, making sure everything we build fits your
                needs perfectly.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default KsideDriven;
