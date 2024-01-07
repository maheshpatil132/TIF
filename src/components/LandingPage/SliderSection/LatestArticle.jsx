import React from 'react'
import Card from './Card';
import { useState } from 'react';
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react"


const LatestArticle = () => {

  const [page, setPage] = useState(1)
  let show = 3;
 


  const data = [

    {
      "title": "How to grill corn",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, rerum esse laudantium placeat sed veniam iure deserunt atque fugit facilis doloribus quis mollitia molestiae.",
      "img": require('../../../assets/tommato.png')
    },
    {
      "title": "Snacks For Travel",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, rerum esse laudantium placeat sed veniam iure deserunt atque fugit facilis doloribus quis mollitia molestiae.",
      "img":require('../../../assets/LattestArticle/img-2.png')
    },
    {
      "title": "Post workout Recipes",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, rerum esse laudantium placeat sed veniam iure deserunt atque fugit facilis doloribus quis mollitia molestiae.",
      "img":require('../../../assets/LattestArticle/img-4.png')
    },
    {
      "title": "How to grill corn",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, rerum esse laudantium placeat sed veniam iure deserunt atque fugit facilis doloribus quis mollitia molestiae.",
      "img":require('../../../assets/LattestArticle/img-5.png')
    },
    {
      "title": "crunchwrap supreme",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, rerum esse laudantium placeat sed veniam iure deserunt atque fugit facilis doloribus quis mollitia molestiae.",
      "img":require("../../../assets/LattestArticle/img-6.png")
    },
    {
      "title": "Broccoli cheeese Soup",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi, rerum esse laudantium placeat sed veniam iure deserunt atque fugit facilis doloribus quis mollitia molestiae.",
      "img":require("../../../assets/LattestArticle/img-7.png")
    },
  ]




  return (
    <div className=' px-4 lg:px-14 py-10'>
      <h1 className=' text-center lg:text-left capitalize font-bold text-4xl lg:text-5xl text-primary mb-16'>Lattest Articles</h1>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
        {data.slice((page - 1) * show, (page - 1) * show + show).map((elem, index) => {
          return (
            <Card key={index} title={elem.title} content={elem.content} img={elem.img} />
          )
        })}
      </div>

      <div className=' flex gap-3 justify-center items-center my-10 text-gray-500'>
        <ArrowLeftSquare onClick={() => { page - 1 > 0 && setPage(page - 1) }} className='cursor-pointer' />
        {page} / {Math.ceil(data.length / show)}
        <ArrowRightSquare onClick={() => { page < Math.ceil(data.length / show) && setPage(page + 1) }} className='cursor-pointer' />
      </div>

    </div>
  )
}

export default LatestArticle