import React from 'react'
import { useParams } from 'react-router-dom'

const  user = () => {
    const {userid} = useParams();
  return (
    <div className='text-5xl bg-gray-500 text-white p-3'>user : {userid} </div>
  )
}

export default user