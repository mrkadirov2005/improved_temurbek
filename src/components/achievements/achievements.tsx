import React from 'react';
import { FaUserFriends, FaGift, FaMedal, FaBullhorn } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaUserFriends className="text-3xl text-blue-500" />,
    title: '1000+',
    subtitle: 'Students',
  },
  {
    icon: <FaGift className="text-3xl text-blue-500" />,
    title: '5+',
    subtitle: 'Years Experience',
  },
  {
    icon: <FaMedal className="text-3xl text-blue-500" />,
    title: 'Top',
    subtitle: 'IELTS Scorers',
  },
  {
    icon: <FaBullhorn className="text-3xl text-blue-500" />,
    title: '20+',
    subtitle: 'Events',
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-10">Our Achievements</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border rounded-lg p-6 flex flex-col items-center justify-center space-y-2"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
