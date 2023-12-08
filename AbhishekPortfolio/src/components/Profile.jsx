import React from 'react'

function Profile() {
  return (
    <>
    <div className='w-full h-80   relative  '>
        <div className='w-full h-40 bg-gradient-to-r from-fuchsia-500 to-cyan-500 overflow-hidden absolute top-10  '>
            <img className='' src="" alt="" />
        </div>
        <div className='w-36 h-36 border absolute left-20 rounded-full overflow-hidden bg-orange-500 top-24'>
            <img className='' src="https://avatars.githubusercontent.com/u/123270037?v=4" alt="" />
        </div>
        <div className=' absolute left-20  bottom-2'>
            <h1 className='text-[1.1rem] font-medium' >Abhishek Chauhan</h1>
            <p className='text-[.8rem] text-red-400'>Front-End Web Developer</p>
        </div>
    </div>
    </>
  )
}

export default Profile
