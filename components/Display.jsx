import React from 'react'

const Display = ({ hours, minutes, seconds }) => {
  // to make a custom timer css in tailwind using custom utility classes 
  const formatTime = (unit) => String(unit).padStart(2, '0');
  const displayTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  return (
    <div className=''>{displayTime}</div>
  )
}

export default Display
