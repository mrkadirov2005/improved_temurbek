import { FaUserFriends, FaGift, FaMedal, FaBullhorn } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaUserFriends className="text-4xl text-cyan-400 drop-shadow-md" />,
    title: '1000+',
    subtitle: "O'quchilar",
  },
  {
    icon: <FaGift className="text-4xl text-pink-400 drop-shadow-md" />,
    title: '5+',
    subtitle: '7 yillik tajriba',
  },
  {
    icon: <FaMedal className="text-4xl text-yellow-400 drop-shadow-md" />,
    title: "IELTS qo'lga kiritganlar",
    subtitle: '30+',
  },
  {
    icon: <FaBullhorn className="text-4xl text-purple-400 drop-shadow-md" />,
    title: '200+',
    subtitle: 'CEFR',
  },
];

const AchievementsSection = () => {
  return (
    <section
      className="py-20 text-center rounded-3xl mt-5 bg-gradient-to-br text-blue-500 from-blue-100 via-white to-blue-900 transition-all duration-500"
      id="results"
    >
      <h2 className="text-3xl font-bold mb-14   tracking-wide">
        🎉 Bizning Natijalar
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white/60  text-blue-500 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10 rounded-xl p-6 flex flex-col items-center justify-center space-y-3 transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-gray-800 e">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-blue-800 tracking-wide uppercase">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
