import React from 'react'

const Reset = ({toZero}) => {
  return (
    <button onClick={() => {
      toZero()
    }}>Reset</button>
  )
}

export default Reset
