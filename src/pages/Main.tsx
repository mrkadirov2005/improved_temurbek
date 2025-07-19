import React from 'react'
import Video_info from '../components/video_bg/video_info'
import AchievementsSection from '../components/achievements/achievements'
import CourseComponent from './Courses/page'
import Teachers from './teachers/Teachers'

export default function Main() {
  return (
    <div>
        
        <Video_info></Video_info>
        <AchievementsSection/>
      <h1 className='text-center text-3xl bg-blue-400 py-2 px-0'>
  Bizning sizga taklif qiladigan kurslarimiz ✅
</h1>

  <CourseComponent />
  <Teachers></Teachers>

    </div>
  )
}
