import React from 'react'
import '../Programs/Programs.css'

export function Title({subtitle, title}) {
  return (
    <div className='programsStyle'>
      <h4>{subtitle}</h4>
      <h2>{title}</h2>
    </div>
  )
}

export function ProgramsAbout({subtitle, title}) {
  return (
    <div className='aboutStyle'>
      <h4>{subtitle}</h4>
      <h2>{title}</h2>
    </div>
  )
}