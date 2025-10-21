import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Personal project
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Web E-Commerce'
            backgroundImg={"/assets/prj1.jpg"}
            projectUrl='/'
            tech='Laravel'
          />
          <ProjectItem
            title='Music player'
            backgroundImg={"/assets/prj3.jpg"}
            projectUrl='/'
            tech='React JS'
          />
          <ProjectItem
            title='Web app'
            backgroundImg={"/assets/prj_02.png"}
            projectUrl='https://quychan.com/'
            tech='Next JS'

          />
          <ProjectItem
            title='Blog'
            backgroundImg={"/assets/blog1.png"}
            projectUrl='/blog'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;