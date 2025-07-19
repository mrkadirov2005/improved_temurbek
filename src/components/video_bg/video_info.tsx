import React from 'react'
import Button from '../buttons/Button'

export default function Video_info() {
  return (
    <div className='relative'>

    
   <video src="public\bg_video.mp4 " className='opacity-30 w-full'  autoPlay muted loop controls>

   </video>
   <p className='absolute flex item-center flex-col gap-5  top-1/2 left-1/2 translate-[-50%] '>
        <h1 className='text-5xl'> Temurbek School bilan orzularni maqsadga, <br/>
         Maqsadlarni esa ro'yobga aylantiring!</h1>
         <Button data="Biz bilan bog'laning"></Button>
   </p>
   </div>
  )
}
