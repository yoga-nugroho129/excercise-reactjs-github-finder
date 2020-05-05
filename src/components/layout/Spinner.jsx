import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ display: 'block', width: '200px', margin: 'auto' }}
      />
    </div>
  )
}

export default Spinner
