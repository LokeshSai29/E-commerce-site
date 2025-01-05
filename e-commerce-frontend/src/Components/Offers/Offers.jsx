import React, { useState, useEffect } from "react";
import "./Offers.css";

const Offers = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-05-24T00:00:00"); // set the target date here
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>New Launches</h1>
        <p class="styled-text">ONLY ON BEST SELLERS COLLECTIONS, AVAILABLE FROM <span class="arrow">→</span></p>
      </div>
      <div className="offers-right">
        <div className="countdown">
          <div className="time">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="time">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="time">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="time">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
