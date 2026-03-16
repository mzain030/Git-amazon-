import React, { useState } from 'react'

const LearnAOS = () => {
    const [color,setColor]=useState('red')
  return (
    <div>
      <button type='button' style={{ backgroundColor: color }} onClick={() => setColor('blue')}>
        click me
      </button>
    </div>
  )
}

export default LearnAOS
