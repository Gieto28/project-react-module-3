import React from 'react'
import { Roller } from 'react-spinners-css'

export default function Loading() {
  return (
    <div className='bodyHeight d-flex align-items-center justify-content-center'>
      <Roller color="#c7bb94" size={125}/>
      </div>
  )
}
