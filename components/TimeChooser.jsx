import React from 'react'

const TimeChooser = ({setTimer}) => {

  const handleChange = ({hours, minutes, seconds}) => {
  }

  return (
    <>
      <input type='number' min={0} max={59} step={1} placeholder='SS' onChange={() => {handleChange()}} />
      <input type='number' min={0} max={59} step={1} placeholder='MM' onChange={handleChange} />
      <input type='number' min={0} max={24} step={1} placeholder='HH' onChange={handleChange} />
    </>
  )
}

export default TimeChooser
