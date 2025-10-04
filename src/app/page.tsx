import Header from '@/components/header/Header';
import NavBar from '@/components/nav/Navbar';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import SkillsSection from '@/sections/Skills';
import { useTranslations } from 'next-intl';



const page = () => {
  const t = useTranslations('HomePage');
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <SkillsSection />
      <Experience />
      <Projects />
      <div className='h-screen'></div>
    </>
  )
}

export default page