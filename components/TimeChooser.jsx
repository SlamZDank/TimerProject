import React from 'react'

const TimeChooser = ({ setTimer }) => {
  let hours = 0
  let minutes = 0
  let seconds = 0

  return (
    <>
      <div className='time-chooser'>
        <input type='number'  min={0} max={24} step={1} placeholder='HH' onChange={(e) => { hours = (e.target.value) }} />
        <input type='number'  min={0} max={59} step={1} placeholder='MM' onChange={(e) => { minutes = (e.target.value) }} />
        <input type='number'  min={1} max={59} step={1} placeholder='SS' onChange={(e) => { seconds = (e.target.value) }} />
      </div>
      <button className="btn" onClick={() => {
        hours = hours ?? 0
        minutes = minutes ?? 0
        seconds = seconds ?? 1 
        setTimer({ hours, minutes, seconds})
      }}>Set Timer & Start</button>
    </>
  )
}

export default TimeChooser
