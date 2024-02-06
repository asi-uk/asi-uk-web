// components/Countdown.js

"use client";

import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days < 10 ? `0${days}` : days,
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4">
      <p className="text-center"><span className="font-bold text-3xl text-asi-blue">{timeRemaining.days}</span> <br/>days</p>
      <p className="text-center"><span className="font-bold text-3xl text-asi-blue">{timeRemaining.hours}</span> <br/>hours</p>
      <p className="text-center"><span className="font-bold text-3xl text-asi-blue">{timeRemaining.minutes}</span> <br/>min</p>
      <p className="text-center"><span className="font-bold text-3xl text-asi-blue">{timeRemaining.seconds}</span> <br/>sec</p>
    </div>  
  );
};

export default CountdownTimer;

