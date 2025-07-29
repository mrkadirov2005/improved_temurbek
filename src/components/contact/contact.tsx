import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  ism: string;
  familiya: string;
  kurs: string;
  yosh: string;
  maktab: string;
  telefon: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    ism: '',
    familiya: '',
    kurs: '',
    yosh: '',
    maktab: '',
    telefon: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Submit to API or Google Sheets logic here
  };

  return (
    <div className="max-w-2xl mx-auto !bg-white shadow-xl rounded-xl my-44 p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Biz bilan bog'laning</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-semibold">Ism</label>
          <input
            type="text"
            name="ism"
            value={formData.ism}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Familiya</label>
          <input
            type="text"
            name="familiya"
            value={formData.familiya}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Kursni tanlang</label>
          <select
            name="kurs"
            value={formData.kurs}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="">Tanlang...</option>
            <option value="Ingliz tili">Ingliz tili</option>
            <option value="Matematika">Matematika</option>
            <option value="IT">IT</option>
            <option value="Robototexnika">Robototexnika</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Yosh</label>
          <input
            type="number"
            name="yosh"
            value={formData.yosh}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Maktab</label>
          <input
            type="text"
            name="maktab"
            value={formData.maktab}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold">Telefon raqam</label>
          <input
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="+998 90 123 45 67"
            required
          />
        </div>

        <button onClick={()=>console.log(formData)}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}
