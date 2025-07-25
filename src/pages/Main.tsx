import React, { useEffect, useState } from 'react';
import Video_info from '../components/video_bg/video_info';
import AchievementsSection from '../components/achievements/achievements';
import CourseComponent from './Courses/page';
import Teachers from './teachers/Teachers';

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2 sec load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center  bg-blue-400">
       <div className='border-white border-4 rounded-3xl p-5'> <img
          src="/logo.png" // Make sure this is your uploaded logo path
          alt="Loading..."
          className="w-36 h-36 animate-pulse rounded-4xl"
        />
        <p className="mt-4 text-white text-lg font-semibold">Xush kelibsiz</p></div>
      </div>
    );
  }

  return (
    <div>
      <Video_info />
      <AchievementsSection />
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-blue-400 py-4 px-2 font-semibold text-white">
  Bizning sizga taklif qiladigan kurslarimiz ✅
</h1>

      <CourseComponent />
      <Teachers />
    </div>
  );
}
