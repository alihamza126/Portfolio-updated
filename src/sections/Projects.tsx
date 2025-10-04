"use client"
import { Tabs } from '@/components/anime/Tabs';
import Blurlight from '@/components/blurlight';
import TitleHeader from '@/components/TitleHeader';
import React from 'react'

const Projects = () => {
  const tabs = [
    {
      title: "Full Stack",
      value: "fullstack",
      content: (
        <>
          this is porject
        </>
      ),
    },
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <>
          this is porject
        </>
      ),
    }
  ];

  return (
    <div id='projects' className="section relative projects  ">
      <div className=" block px-1 max-w-6xl h-screen mx-auto md:mt-16">
        <TitleHeader title={'Recent Projects'} sub={'🧳 Solution that i built'} img={'/emojis/confetti.png'} />
        <Blurlight className="-bottom-60 -left-0  opacity-10! w-1/4! h-96!" />
        <Blurlight className="-bottom-100 -right-0  opacity-5! w-full! h-96!" />
        {/* <Blurlight className="-bottom-100 -right-100  opacity-5! w-full! h-96!" /> */}
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default Projects