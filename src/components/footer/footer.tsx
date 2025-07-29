export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white rounded-t-3xl shadow-2xl overflow-hidden">
      
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + Brand */}
        <div>
          <div className="flex items-center space-x-3">
            <img src="/logo.png" width={60} alt="Temurbek School Logo" className="rounded-xl shadow-md" />
            <span className="text-xl font-bold tracking-wide">Temurbek School</span>
          </div>
          <p className="text-sm mt-4 text-gray-200">Ilmli avlod uchun zamonaviy ta'lim markazi.</p>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Biz haqimizda</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><a href="#" className="hover:text-white hover:underline">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Kurslar</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Ustozlar</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Aloqa</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Yordam</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><a href="tel:+998974088108" className="hover:text-white hover:underline">+998 97 408 81 08</a></li>
            <li><a href="https://instagram.com/temurbek_school" className="hover:text-white hover:underline" target="_blank">Instagram</a></li>
            <li><a href="https://t.me/TEMURBEK_SCHOOL" className="hover:text-white hover:underline" target="_blank">Telegram</a></li>
          </ul>
        </div>

        {/* Results Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Natijalar</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><a href="#" className="hover:text-white hover:underline">IELTS</a></li>
            <li><a href="#" className="hover:text-white hover:underline">CEFR</a></li>
            <li><a href="#" className="hover:text-white hover:underline">TKT</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Boshqalar</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA + Map */}
      <div className="bg-white/10 border-t border-white/20 py-10 px-6 md:px-12 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* CTA */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Kelajagingizga yo‘l tomon olg‘a yuring 🚀</h2>
            <p className="text-gray-200 text-sm">Biz bilan sizning maqsadlaringizga tezroq erishasiz!</p>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-auto">
            <iframe
              title="Temurbek School Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4134.15051560011!2d67.24227285328854!3d39.40009466860196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stemurbek%20school!5e0!3m2!1sen!2s!4v1753404589840!5m2!1sen!2s"
              width="320"
              height="200"
              allowFullScreen
              loading="lazy"
              className="rounded-lg border border-white shadow-md"
            ></iframe>
          </div>
        </div>
      </div>

    </footer>
  );
}
