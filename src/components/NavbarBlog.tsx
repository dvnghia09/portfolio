/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiFillFacebook, AiOutlineGithub, AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Navbar: React.FC = ({page} : any) => {
  const { theme, setTheme } = useTheme()
  const [nav, setNav] = useState<boolean>(false)
  const [btn, setBtn] = useState<boolean>(false)

  useEffect(() => {
    if (theme == 'light') {
      setBtn(true)
    } else {
      setBtn(false)
    }
  }, [theme])

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className={`fixed w-full h-[60px] md:h-20 shadow-xl z-[100] dark:bg-[#2a2a2a] bg-white`}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 z-[90]'>
        <Link href='/blog' >
          <Image className='p-[10px] rounded-[8px] bg-white' src="/assets/logo.png" alt="logo" width='200' height='25'/>
        </Link>
        <div className=''>
          <ul className='hidden md:flex'>
            <Link href='/blog' >
              <li className='ml-10 text-sm uppercase hover:border-b font-bold'>Home</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>
      <div 
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#1e293b] p-[20px]  duration-500 flex flex-col justify-between '
              : 'fixed left-[-100%] top-0 p-[20px] duration-500 flex flex-col justify-between '
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image className='p-[10px] rounded-[8px] bg-white' src="/assets/logo.png" alt="logo" width='200' height='200'/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer'>
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className='mt-10'>
              <ul className=''>
                <Link href='/blog' >
                  <li className='ml-10 text-md font-[700] uppercase py-4'>Home</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='border-t-[1px] border-[#ccc]'>
            <p className='text-blue-600'>Connect with me:</p>
            <div>
              <a href='https://www.facebook.com/nghiadv1309' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer inline-block mr-4 dark:shadow-black'>
                <AiFillFacebook color="#1b74e4" size={20} />
              </a>
              <a href='https://github.com/dvnghia09' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer inline-block mr-4 dark:shadow-black'>
                <AiOutlineGithub color="black" size={20} />
              </a>
              <a href='mailto:nghiadv13@gmail.com' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer inline-block mr-4 dark:shadow-black'>
                <AiOutlineMail color="#34a853" size={20} />
              </a>
              <a href='tel:0919295123' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer inline-block mr-4 dark:shadow-black'>
                <AiFillPhone color="red" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
