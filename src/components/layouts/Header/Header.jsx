import React from 'react'
import Logo from '../../../assets/Logo.png'

const Header = () => {
  return (
    <div>
        <div className=' z-50 fixed top-0 w-full flex items-center py-2 lg:px-12 px-4 justify-between'>
                <div className=' hidden lg:block'>
                    <img className=' h-14' src={Logo} alt="Logo Img" />
                </div>
                <button className=' bg-secondary ml-auto border py-2 px-4 rounded-full text-white'>Get In Touch</button>
            </div>
    </div>
  )
}

export default Header