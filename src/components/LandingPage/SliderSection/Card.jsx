import React from 'react'

const Card = ({title , content , img}) => {
  return (
    <div className=' border p-6 space-y-4 rounded-2xl flex flex-col items-center justify-center'>
        <img src={img} alt="Food" />
        <div className=' flex flex-col gap-4 px-2'>
        <h1 className=' mt-5 capitalize text-2xl font-bold text-primary'>{title}</h1>
        <p className=' text-gray-700'>{content}</p>
        <button className=' font-semibold w-fit border py-2 px-6 rounded-full text-gray-700 border-gray-700'>Read More</button>
        </div>
    </div>
  )
}

export default Card