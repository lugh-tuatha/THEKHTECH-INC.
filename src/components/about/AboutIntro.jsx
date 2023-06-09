import React from 'react'
import './about.css'

import Image from 'next/image'

function AboutIntro() {
  return (
    <div>
      <div >
        <Image  
          src="/assets/svg/about-us.svg"
          alt='About Banner'
          width={400}
          height={300}
          className='w-full'/>
      </div>

      <div className='block lg-flex-between mt-4'>
        <div className='w-full lg:w-1/2 desc flex flex-col gap-3 text-justify self-center'>
          <h1 className="heading-3 text-left font-bold text-secondary">Empower Your Business with Know How Tech&apos;s Digital Transformation Solutions</h1>
          <p>In recent years, companies have been transitioning to more modern methods of marketing. We offer a digital solution to help traditional businesses make the switch to a more innovative approach. You may think this is just a fantasy, but it is actually a reality. We are here to prove that it is not only possible, but it is happening.</p>
          <p>At Know How Tech, we have experts who can assist you in transforming your outdated business strategies into a successful one. Our services enable you to quickly develop your business goals and practices. Just think about it – you can have your own business running in a few weeks!</p>
        </div>

        <div className='w-full lg:w-1/2'>
          <Image  
            src="/assets/illustration/ai8.jpeg"
            alt='About hero'
            width={400}
            height={300}
            className='about-img w-full ml-auto hidden lg:flex'/>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro