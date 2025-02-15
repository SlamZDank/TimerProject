import React from 'react'

const TimeChooser = ({ setTimer, setIsPaused }) => {
  let hours = 0
  let minutes = 0
  let seconds = 0

  return (
    <>
      <div className="time-chooser flex flex-col md:flex-row gap-4 w-full max-w-md">
        <input
          type="number"
          min={0}
          max={24}
          step={1}
          placeholder="HH"
          onChange={(e) => { hours = e.target.value }}
          className="flex-1 bg-gray-700 text-white text-center px-4 py-3 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400
               appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />

        <input
          type="number"
          min={0}
          max={59}
          step={1}
          placeholder="MM"
          onChange={(e) => { minutes = e.target.value }}
          className="flex-1 bg-gray-700 text-white text-center px-4 py-3 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400
               appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />

        <input
          type="number"
          min={1}
          max={59}
          step={1}
          placeholder="SS"
          onChange={(e) => { seconds = e.target.value }}
          className="flex-1 bg-gray-700 text-white text-center px-4 py-3 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400
               appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />
      </div>

      <button
        className="btn w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 
             rounded-lg text-lg font-medium transition-colors duration-200 shadow-md
             transform active:scale-95 mt-4"
        onClick={() => {
          hours = hours ?? 0
          minutes = minutes ?? 0
          seconds = seconds ?? 1
          setTimer({ hours, minutes, seconds })
          setIsPaused(false)
        }}
      >
        ⏲️ Set Timer & Start
      </button>
    </>
  )
}

export default TimeChooser
