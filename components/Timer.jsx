import React from 'react'
import Display from './Display';
import { useState, useEffect } from 'react';
import TimeChooser from './TimeChooser';

const Timer = ({ hours, minutes, seconds }) => {
  const [isPaused, setIsPaused] = useState(false);

  const [timer, setTimer] = useState(
    {
      hours,
      minutes,
      seconds,
    }
  )

  const isFinished = timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0;

  const toZero = () => {
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }

  const countdown = (timer) => {
    setTimer((prev) => {
      if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
      if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
      return prev; // Timer finished
    });
  }


  useEffect(() => {
    if (isPaused || isFinished) return;
    const timeoutId = setTimeout(() => {
      countdown(timer)
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [timer, isPaused]);

  return (
    <>
      <div className='MainDisplay'>
        <Display hours={timer.hours}
          minutes={timer.minutes}
          seconds={timer.seconds} />
      </div>
      <div className="Buttons">
        {!isFinished &&
          <button onClick={toZero}>Reset</button>}
        {!isFinished && <button onClick={
          () => {
            console.log(isPaused)
            setIsPaused(!isPaused)
          }
        }>{isPaused ? "Resume" : "Pause"}</button>}
      </div>
      <div className='TimeChooser'>
        <TimeChooser setTimer={setTimer}/>
      </div>
    </>
  )
}

export default Timer
