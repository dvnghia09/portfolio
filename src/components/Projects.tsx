import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Web E-Commerce'
            backgroundImg={"https://dvnghia09.github.io/info/front/img/prj1.JPG"}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Clone shopee'
            backgroundImg={"https://dvnghia09.github.io/info/front/img/prj2.JPG"}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Music player'
            backgroundImg={"https://dvnghia09.github.io/info/front/img/prj3.JPG"}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={"https://dvnghia09.github.io/info/front/img/prj4.JPG"}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;