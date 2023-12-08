import React from 'react'

function Skills() {
    
  return (
    <>
    <div className='px-20 py-7 '>
        <div className='flex  flex-col gap-6'>
            <div >
                <h1 className='font-semibold text-[1.4rem]'>What I know</h1>
            </div>
            <div className='px-10  flex justify-center flex-wrap gap-7'>
                <div className='px-5 py-5  rounded-md flex flex-col  bg-zinc-800'>
                    <div>
                        <h1 className='text-[1.3rem] font-semibold text-zinc-400  my-3 '>Basic</h1>
                    </div>
                    <div className='flex gap-5 flex-wrap'>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>HTML</h1>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>CSS</h1>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>JavaScript</h1>
                        
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>Responsive Design</h1>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>Git</h1>
                        
                    </div>
                </div>
                <div className='px-5 py-5  rounded-md flex flex-col  bg-zinc-800'>
                    <div>
                        <h1 className='text-[1.3rem] font-semibold text-zinc-400  my-3 '>CSS Frameworks</h1>
                    </div>
                    <div className='flex gap-5 flex-wrap'>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>Tailwind CSS</h1>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>Bootstap</h1>
                        
                    </div>
                </div>

                <div className='px-5 py-5 rounded-md flex flex-col bg-zinc-800'>
                    <div>
                        <h1 className='text-[1.3rem] font-semibold text-zinc-400  my-3 '>JavaScript Frameworks</h1>
                    </div>
                    <div className='flex gap-5 flex-wrap'>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>React Js</h1>
                        <h1 className='px-3 py-2 text-zinc-400 rounded-md  bg-zinc-900'>Redux Toolkit</h1>
                       
                        
                    </div>
                </div>

                
            </div>
        </div>
    </div>  
    </>
  )
}

export default Skills
