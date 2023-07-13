import React from 'react'


export const Button = ({setModal}) => {
  return (
    <button className='btn btn-primary btn-md'
    onClick={()=>setModal(true)}>View FMSB 2002</button>
  )
}