import React from 'react';

const teachers = [
  { name: 'Shahobov Temurbek', role: 'Asoschi', image: '/teachers/shakhobov.jpg' },
  { name: 'Ramziddin', role: 'Ustoz', image: '/teachers/ramziddin.jpg' },
  { name: 'Yorqin', role: 'Ustoz', image: '/teachers/yorqin.jpg' },
  { name: 'Xurshid', role: 'Ustoz', image: '/teachers/xurshid.jpg' },
  { name: 'Erkin', role: 'Ustoz', image: '/teachers/erkin.jpg' },
  { name: 'Javhar', role: 'Ustoz', image: '/teachers/javhar.jpg' },
  { name: 'Mubina', role: 'Ustoz', image: '/teachers/Mubina.jpg' },
  { name: 'Zarina', role: 'Ustoz', image: '/teachers/zarina.jpg' },
  { name: 'Aminjon', role: 'Ustoz', image: '/teachers/aminjon.jpg' },
  { name: 'Samandar', role: 'Ustoz', image: '/teachers/samandar.jpg' },
  { name: 'Ibrohim', role: 'Ustoz', image: '/teachers/ibrohim.jpg' },
  { name: 'Farzona', role: 'Ustoz', image: '/teachers/farzona.jpg' },
  { name: 'Shohjahon', role: 'Ustoz', image: '/teachers/shohjahon.jpg' },
  { name: 'Muhammad', role: 'Ustoz', image: '/teachers/muhammad.jpg' },
  { name: 'Ramziddin', role: 'Ustoz', image: '/teachers/ramziddin.jpg' },
  { name: 'Anvar', role: 'Ustoz', image: '/teachers/anvar_jalolov.jpg' },
];

export default function Teachers() {
  return (
    <section className="bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Bizning ustozlar</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-blue-50 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-100 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-blue-800">{teacher.name}</h3>
              <p className="text-blue-600">{teacher.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
