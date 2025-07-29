import { useEffect, useState } from 'react';
import Video_info from '../components/video_bg/video_info';
import AchievementsSection from '../components/achievements/achievements';
import CourseComponent from './Courses/page';
import Teachers from './teachers/Teachers';
import { Link } from 'react-router-dom';

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 w-[100vw] h-[100vh] !bg-[url('/modal_bg.png')] !bg-no-repeat  !bg-cover flex items-center justify-center bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-400">
        <div className="relative w-40 h-40">
          {/* Spinning Ring */}
          <div className="absolute inset-0 border-8 border-t-white border-b-transparent border-l-white border-r-transparent rounded-full animate-spin-slow" />

          {/* Glowing logo */}
          <div className="absolute inset-4 flex items-center justify-center bg-white rounded-full shadow-xl animate-pulse">
            <img
              src="/logo.png"
              alt="Loading..."
              className="w-20 h-20 object-contain rounded-full shadow-md"
            />
          </div>
        </div>

        {/* Welcome text */}
        <div className="absolute bottom-20 text-white text-xl font-semibold animate-fade-in">
          Xush kelibsiz!
        </div>
      </div>
    );
  }

  return (
    <div className='relative'>
     <Link to="/contact"> <button className='fixed right-0 text-3xl hover:text-7xl hover:opacity-100 bg-blue-500 z-20 p-5 rounded-full rounded-br-2xl bottom-5 opacity-40'>📞</button></Link>
     <Link to="/temurbek_ai"> <button className='fixed right-0 text-3xl top-[200px] active:opacity-100 bg-blue-500 z-20 p-5 rounded-full rounded-br-2xl  opacity-40'>👩‍💻</button></Link>
      <Video_info />
      <AchievementsSection />
      <h1 className="text-center rounded-4xl max-w-[700px] my-8 mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-blue-400 py-4 px-2 font-semibold text-white">
       Kurslarimiz bilan tanishing
      </h1>
      <CourseComponent />
      <Teachers />
    </div>
  );
}
