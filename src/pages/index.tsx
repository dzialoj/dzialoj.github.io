import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '../styles/index.scss';
import SiteMenuButton from '../components/site-menu/site-menu';
import HomeSection from '../components/sections/home-section/home-section';

const IndexPage: React.FC<PageProps> = () => {
  return <main className='site-container'>
    <SiteMenuButton />
    <HomeSection />
  </main>;
};

export default IndexPage;
