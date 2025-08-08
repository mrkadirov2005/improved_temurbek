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

  const [loading,setIsloading]=useState<boolean>(false)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      setIsloading(true)
    try {
      await fetch('https://script.google.com/macros/s/AKfycbx09SRA9pH-1GDU809UsKNX8LUxFp_bXxhjlmk5EVpclOLOgcqOXBIcc5bpeNRZsTDnYg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      alert("Ma'lumotlar muvaffaqiyatli yuborildi!");
      setIsloading(false)
      console.log('Submitted:', formData);

      setFormData({
        ism: '',
        familiya: '',
        kurs: '',
        yosh: '',
        maktab: '',
        telefon: ''
      });

    } catch (error) {
      console.error('Xatolik:', error);
      alert("Xatolik yuz berdi. Qayta urinib ko‘ring.");
      setIsloading(false)
    }
  };

  return (
    <div className="max-w-[500px] w-full mx-auto !bg-white shadow-xl rounded-xl mt-20 p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Biz bilan bog'laning</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <InputField label="Ism" name="ism" value={formData.ism} onChange={handleChange} required />
        <InputField label="Familiya" name="familiya" value={formData.familiya} onChange={handleChange} required />

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
            <option value="Arab tili">Arab tili</option>
            <option value="Ona tili">Ona tili va Adabiyot</option>
            <option value="Rus tili">Rus tili</option>
            <option value="IELTS">IELTS</option>
            <option value="SAT">SAT</option>
            <option value="Koreys tili">Koreys tili</option>
          </select>
        </div>

        <InputField label="Yosh" name="yosh" type="number" value={formData.yosh} onChange={handleChange} required />
        <InputField label="Maktab" name="maktab" value={formData.maktab} onChange={handleChange} />

        <InputField
          label="Telefon raqam"
          name="telefon"
          type="tel"
          value={formData.telefon}
          onChange={handleChange}
          placeholder="+998 90 123 45 67"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"

        >
         {loading?"Yuborilmoqda":"Yuborish"}
        </button>
      </form>
    </div>
  );
}

// Reusable input component
type InputFieldProps = {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false
}: InputFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-4 py-2"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
