'use client'
import React from 'react'

//TODO need to have carousel ability to swipe on last slide to first slide 

const Carousel = () => {
  return (
    <div className="hero-content bg-primary w-full h-5/6">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full ">
            <img src="assets/images/IMG_8934.jpeg" className="w-full h-full object-cover " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-opacity-80 hidden sm:flex">❮</a>
              <a href="#slide2" className="btn btn-circle bg-opacity-80 hidden sm:flex">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="assets/images/IMG_2926.jpeg" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-opacity-80 hidden sm:flex">❮</a>
              <a href="#slide3" className="btn btn-circle bg-opacity-80 hidden sm:flex">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="assets/images/IMG_0477.jpeg" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-opacity-80 hidden sm:flex">❮</a>
              <a href="#slide4" className="btn btn-circle bg-opacity-80 hidden sm:flex">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="assets/images/DSCN0488.jpeg" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle bg-opacity-80 hidden sm:flex">❮</a>
              <a href="#slide5" className="btn btn-circle bg-opacity-80 hidden sm:flex">❯</a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src="assets/images/R6II9589.jpg" className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-opacity-80 hidden sm:flex">❮</a>
              <a href="#slide1" className="btn btn-circle bg-opacity-80 hidden sm:flex">❯</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Carousel