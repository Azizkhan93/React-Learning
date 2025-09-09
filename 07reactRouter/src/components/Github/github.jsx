import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const github = () => {
      const data = useLoaderData()
  //     const [data , setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then( response=> response.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4'>github Followers:{data.followers}
    <img src={data.avatar_url} alt="" width={300} />
    </div>
    
  )
}

export default github


export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}