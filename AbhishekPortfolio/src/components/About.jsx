import React from 'react'

function About() {
  return (
    <>
    <div className='px-5 py-7 md:px-20 '>
        <div className=''>
            <h1 className='font-semibold text-[1.4rem]'>Abhout me <i class="ri-pen-nib-line font-thin text-[1rem] text-zinc-600"></i></h1>
            <p className='text-[1rem] tracking-wide text-zinc-400'>Passionate web developer with experience in front-end development. Expertise in HTML, CSS, JavaScript, React, Redux, and MongoDB. Proven ability to design, develop, and deploy high-quality web applications. 
Strong problem-solving and analytical skills. Committed to delivering high-quality work on time.</p>
        </div>
        <div className='py-7'>
            <h1 className='font-semibold'>Education <i class="ri-graduation-cap-fill text-zinc-600"></i></h1>
            <p className='text-[1rem] tracking-wide text-zinc-400'>Institute of Engineering and
Rural Technology, Prayagraj</p>
            <p className='text-[1rem] tracking-wide text-zinc-600'>Bachelor's Degree in Instrumentation Engineering
2020 – 2024</p>
           
        </div>
        
    </div>
    </>
  )
}

export default About
