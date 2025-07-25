import React from 'react';
import Button from '../buttons/Button';

export default function Video_info() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/bg_video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay Text + Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg mb-6">
          Temurbek School bilan orzularni maqsadga, <br />
          Maqsadlarni esa ro'yobga aylantiring!
        </h1>
        <Button data="Biz bilan bog'laning" />
      </div>
    </div>
  );
}
