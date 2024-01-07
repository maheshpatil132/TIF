import React from 'react'
import AboutImg from '../../../assets/AboutImg.png'
const About = () => {
  return (
    <div className=' py-10 bg-gray-100   my-20 flex justify-between items-center lg:flex-row flex-col px-4 gap-10 lg:px-24'>
       <div className=' w-full'>
        <img className=' mx-auto' src={AboutImg} alt="" />
       </div>
       <div className=' px-5 md:px-12 lg:text-left text-center items-center lg:items-start w-full flex flex-col gap-6'>
          <h1 className=' font-bold text-primary text-4xl lg:text-5xl'>About Us</h1>
          <p className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem, nobis minima dolor incidunt nisi, qui quos fugit corporis ad quam architecto deleniti expedita dolore nemo omnis necessitatibus, repellendus maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis.</p>
          <button className=' w-fit bg-secondary py-2 px-6 rounded-full text-white font-semibold'>Read More</button>
       </div>
    </div>
  )
}

export default About