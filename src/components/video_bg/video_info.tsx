import { motion } from 'framer-motion';
import Button from '../buttons/Button';

export default function Video_info() {
  return (
    <div className="relative rounded-4xl mt-10 w-full h-screen overflow-hidden opacity-80 bg-[url('/logo.png')]
 ">
      {/* Background Video */}
      <video
        src="/bg_video.mp4"
        className="absolute rounded-4xl top-0 left-0 w-full h-full object-cover opacity-100"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-40"></div>

      {/* Overlay Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-6 max-w-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Temurbek School bilan orzularni maqsadga, <br />
          Maqsadlarni esa ro'yobga aylantiring!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="/contact"><Button data="Biz bilan bog'laning" /></a>
        </motion.div>
      </motion.div>
    </div>
  );
}
