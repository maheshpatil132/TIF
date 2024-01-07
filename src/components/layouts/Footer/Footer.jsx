import React from 'react'
import Logo from '../../../assets/Logo.png'
import {Instagram , Twitter,Facebook} from 'lucide-react'

const Footer = () => {
  return (
    <div className=' grid gap-14 grid-cols-1 lg:grid-cols-4 px-12 bg-gray-100 py-10 justify-between'>
      <div className=' my-auto lg:mx-0 mx-auto'>
        <img src={Logo} alt="Logo Img" />
      </div>
      <div className=' text-gray-500 space-y-4'>
        <h3 className=' text-primary font-bold lg:text-xl text-lg'>Contact Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facilis. Distinctio odit labore explicabo exercitationem vitae quod asperiores nemo nihil!</p>
        <p>example@gmail.com</p>
        <p>1234567890</p>
      </div>
      <div className=' lg:mx-auto mx-0'>
        <h3 className=' text-primary lg:text-xl  text-lg font-bold mb-4'>More</h3>
        <ul className=' flex flex-col gap-6 text-gray-500'>
          <li><a href="/">About</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Career</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
      <div className=' flex flex-col justify-between lg:ml-auto lg:mx-0 mx-auto'>
        <div className='space-y-4 mb-4'>
        <h1 className=' lg:text-xl text-lg font-bold text-primary'>Social Links</h1>
        <div className=' text-primary flex gap-8'>
          <Instagram size={'18px'} />
          <Twitter size={'18px'} fill='#0E2368'  />
          <Facebook size={'18px'}/>
        </div>
        </div>
       
        <p className=' mt-auto text-gray-500'>@ 2022 Food Example</p>
      </div>
    </div>
  )
}

export default Footer