import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black w-full border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl"><img src="/logo.png" width={100}></img></span>
            <span className="text-lg font-semibold">Temurbek School</span>
          </div>
        </div>

        {/* Learn more about us */}
        <div>
          <h3 className="font-semibold mb-2">Biz haqimizda ko'proq ma'lumot</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Biz haqimizda</a></li>
            <li><a href="#" className="hover:underline">Kurslar</a></li>
            <li><a href="#" className="hover:underline">Ustozlar</a></li>
            <li><a href="#" className="hover:underline">Aloqa</a></li>
          </ul>
        </div>

        {/* Get assistance */}
        <div>
          <h3 className="font-semibold mb-2">Yordam oling</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">+998974088108</a></li>
            <li><a href="https://www.instagram.com/temurbek_school/?hl=en" className="hover:underline">Instagram</a></li>
            <li><a href="https://t.me/TEMURBEK_SCHOOL" className="hover:underline">Telegram</a></li>
          </ul>
        </div>

        {/* Connect with us */}
        <div>
          <h3 className="font-semibold mb-2">Natijalarimiz ✅</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">IELTS</a></li>
            <li><a href="#" className="hover:underline">CEFR</a></li>
            <li><a href="#" className="hover:underline">TKT</a></li>
            <li><a href="#" className="hover:underline">boshqalar</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-500 text-white border-t border-gray-300 shadow-2xl shadow-gray-700 py-8 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
  <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
    Kelajagingizga yo'l tomon olg'a yuring
  </h1>

  <div className="w-full md:w-auto flex justify-center">
    <iframe
      title="Temurbek School Location"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4134.15051560011!2d67.24227285328854!3d39.40009466860196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stemurbek%20school!5e0!3m2!1sen!2s!4v1753404589840!5m2!1sen!2s"
      width="320"
      height="220"
      allowFullScreen
      loading="lazy"
      className="rounded-lg border-2 border-white shadow-md"
    ></iframe>
  </div>
</div>

    </footer>
  );
}
