// components/Countdown.tsx

"use client";

import React, { useState, useEffect } from 'react';

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface CountdownTimerProps {
  targetDate: Date;
  // Styling props
  containerClassName?: string;
  numberClassName?: string;
  labelClassName?: string;
  gridClassName?: string;
  itemClassName?: string;
  // Text customization
  daysLabel?: string;
  hoursLabel?: string;
  minutesLabel?: string;
  secondsLabel?: string;
}

const calculateTimeRemaining = (targetDate: Date): TimeRemaining => {
  if (!targetDate || !(targetDate instanceof Date) || isNaN(targetDate.getTime())) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  // Handle case where target date is in the past
  if (difference < 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: days < 10 ? `0${days}` : days.toString(),
    hours: hours < 10 ? `0${hours}` : hours.toString(),
    minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
    seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
  };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({
                                                         targetDate,
                                                         // Default styling and text values
                                                         containerClassName = "",
                                                         numberClassName = "font-bold text-3xl text-asi-blue",
                                                         labelClassName = "text-sm",
                                                         gridClassName = "grid grid-cols-4 gap-2",
                                                         itemClassName = "text-center",
                                                         daysLabel = "days",
                                                         hoursLabel = "hours",
                                                         minutesLabel = "min",
                                                         secondsLabel = "sec"
                                                       }) => {

  // Initialize with real time - suppressHydrationWarning on display spans handles the minor server/client mismatch
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
      <div className={`${containerClassName}`}>
        <div className={`${gridClassName}`}>
          <div className={`${itemClassName}`}>
            <span suppressHydrationWarning className={`${numberClassName}`}>{timeRemaining.days}</span>
            <br/><span className={`${labelClassName}`}>{daysLabel}</span>
          </div>
          <div className={`${itemClassName}`}>
            <span suppressHydrationWarning className={`${numberClassName}`}>{timeRemaining.hours}</span>
            <br/><span className={`${labelClassName}`}>{hoursLabel}</span>
          </div>
          <div className={`${itemClassName}`}>
            <span suppressHydrationWarning className={`${numberClassName}`}>{timeRemaining.minutes}</span>
            <br/><span className={`${labelClassName}`}>{minutesLabel}</span>
          </div>
          <div className={`${itemClassName}`}>
            <span suppressHydrationWarning className={`${numberClassName}`}>{timeRemaining.seconds}</span>
            <br/><span className={`${labelClassName}`}>{secondsLabel}</span>
          </div>
        </div>
      </div>
  );
};

export default CountdownTimer;