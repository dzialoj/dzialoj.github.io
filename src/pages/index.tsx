import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '../styles/index.scss';
import SiteMenuButton from '../components/site-menu/site-menu';
import HomeSection from '../components/sections/home-section/home-section';
import ProjectsSection from '../components/sections/projects-section/projects-section';

const IndexPage: React.FC<PageProps> = () => {
  return <main className='site-container'>
    <SiteMenuButton />
    <HomeSection />
    <ProjectsSection />
  </main>;
};

export default IndexPage;
