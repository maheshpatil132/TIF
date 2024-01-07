import React from 'react'

import pizza from '../../assets/pizza.png'
import cover from '../../assets/bg.png'
import './Home.css'
import About from './AboutSection/About'
import LatestArticle from './SliderSection/LatestArticle'

const Home = () => {
    return (
        <>
        <section className=' w-full flex-col-reverse flex lg:flex-row items-start justify-start lg:justify-between'>
            <div className=' h-full my-auto  flex w-full px-4 lg:px-12'>
                <div className=' text-center mx-auto lg:text-start gap-7 flex lg:items-start items-center flex-col mt-14'>
                    <h1 className=' leading-tight text-3xl lg:text-[62px] font-bold text-primary'>Discover the <span className=' text-secondary'>Best</span> Food and Drinks</h1>
                    <p className=' text-gray-500'>Naturally made Healthcare Products for the better care & support of your body.</p>
                    <button className=' w-fit rounded-full py-3 px-6 bg-secondary font-semibold text-white'>Explore Now!</button>
                </div>
            </div>
            <div className='relative h-full w-full'>
                <img className='w-full z-30 absolute' src={cover} alt="" />
                <img className='w-full' src={pizza} alt="" />
            </div>
        </section>
        <About/>
        <LatestArticle/>
        </>
    )
}

export default Home