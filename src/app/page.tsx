import Header from '@/components/header/Header';
import NavBar from '@/components/nav/Navbar';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import SkillsSection from '@/sections/Skills';
import { useTranslations } from 'next-intl';
import React from 'react'

const page = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Experience />
      <SkillsSection />
      <div className='h-screen'></div>
    </>
  )
}

export default page