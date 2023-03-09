import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-[90vh] p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 light:text-gray-600'>
            I started pursuing web programming from 2021 with the starting point of php laravel. 
            After a while working at Caerux Lab, I have learned a lot of experience and knowledge such as sass, 
            jquery ... After a while learned more react js to participate in company project
          </p>
          <p className='py-2 light:text-gray-600'>
            I started pursuing web programming from 2021 with the starting point of php laravel. After a while working at Caerux Lab,
            I have learned a lot of experience and knowledge such as sass, jquery ... After a while learned more react js to participate in company project
          </p>
          <Link href='/#projects'>
            <p className='py-2 light:text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:bg-white dark:shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src='/../public/assets/about.jpg' width='600' height='100' className='rounded-xl w-500' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;