import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };

  return (
    <div className='pt-[120px]' id="banner">
      <div className="relative w-full mx-auto max-w-8xl px-3 md:px-20 lg:px-40 xl:px-60">
        <div className="mx-auto max-w-8xl px-3 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
                <div className="col-span-2">
                    <h1 className="text-4xl font-extrabold text-slate-700 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">H</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">i</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">,</span><br />
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">M</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">ì</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">n</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">h</span>&nbsp;
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">l</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">à</span>&nbsp;
                        <span className="inline-block text-red-600 transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">N</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">g</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">h</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">ĩ</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">a</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">,</span><br />
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">w</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">e</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">b</span>&nbsp;
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">d</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">e</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">v</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">e</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">l</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">o</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">p</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">e</span>
                        <span className="inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-cyan-400">r</span>
                    </h1>
                    <p className="mt-10 text-slate-800 dark:text-slate-300">
                        <TypeAnimation
                            sequence={['PHP Laravel Developer', 2500, '']}
                            speed={40} 
                            wrapper="strong"
                            repeat={Infinity}
                            className={"boxText boxTextRed font-bold"}
                        />
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/nghiadv1309"
                        className="mt-10 block w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 sm:mr-5 sm:inline-block sm:w-auto"
                    >
                        Liên hệ Facebook
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://m.me/nghiadv1309"
                        className="mt-4 block w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 sm:mt-10 sm:inline-block sm:w-auto"
                    >
                        Nhắn messenger cho mình
                    </a>
                </div>
                <div className="col-span-1">
                    <div className="relative mt-16 h-[300px] md:h-full" >
                        <Slider {...settings}>
                            <div className='!flex justify-center'>
                                <Image className='w-[300px]' src="/assets/skills/html.png" alt="logo" width='300' height='200'/>
                            </div>
                            <div className='!flex justify-center'>
                                <Image className='w-[300px]' src="/assets/skills/css.png" alt="logo" width='300' height='200'/>
                            </div>
                            <div className='!flex justify-center'>
                                <Image className='w-[300px]' src="/assets/skills/javascript.png" alt="logo" width='300' height='200'/>
                            </div>
                            <div className='!flex justify-center'>
                                <Image className='w-[300px]' src="/assets/skills/react.png" alt="logo" width='300' height='200'/>
                            </div>
                            <div className='!flex justify-center'>
                                <Image className='w-[300px]' src="/assets/skills/node.png" alt="logo" width='300' height='200'/>
                            </div>
                            <div className='!flex justify-center'>
                                <Image className='w-[300px]' src="/assets/skills/nextjs.png" alt="logo" width='300' height='200'/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
