/* eslint-disable react/no-unescaped-entities */
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
            Hello! I'm a web developer with expertise in a variety of technologies. I'm proficient in backend frameworks like Laravel and Node.js, where I handle server-side logic and database interactions efficiently. On the frontend, I specialize in Vue.js, React.js, and Next.js, crafting interactive and responsive user interfaces.
          </p>
          <p className='py-2 light:text-gray-600'>
          My experience extends to cloud services as well, particularly AWS, where I've worked with EC2 instances, S3 for storage, and load balancers for distributing traffic efficiently. Additionally, I'm well-versed in setting up auto-scaling configurations to dynamically adjust resources based on demand, ensuring optimal performance and cost efficiency.
          </p>
          <p className='py-2 light:text-gray-600'>
          With a solid foundation in both frontend and backend development, coupled with cloud expertise, I thrive in architecting and building robust web applications from concept to deployment. Let's build something amazing together!
          </p>
          <Link href='/#projects'>
            <p className='py-2 light:text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:bg-white dark:shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src='/assets/about.jpg' width='600' height='100' className='rounded-xl w-500' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;