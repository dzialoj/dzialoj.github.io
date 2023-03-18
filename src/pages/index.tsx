import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '../styles/index.scss';
import SiteMenuButton from '../components/site-menu/site-menu';

const IndexPage: React.FC<PageProps> = () => {
  return <main className='site-container'>
    <SiteMenuButton />
  </main>;
};

export default IndexPage;
