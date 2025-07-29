"use client";
import React, { useState } from "react";

interface ContactFormHandlerProps {
  setClicked?: (value: boolean) => void;
  setIsStart?: (value: boolean) => void;
  setData?: (data: { name: string; surname: string }) => void;
}

const ContactFormHandler: React.FC<ContactFormHandlerProps> = ({
  setIsStart,
  setData,
}) => {
  const Schools = Array.from({ length: 150 }, (_, i) => i + 1);
  const Classes = Array.from({ length: 11 }, (_, i) => i + 1);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [Class, setClass] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsStart?.(true);
    setIsSent(true);
    setData?.({ name, surname });

    await fetch(
  "URL_TO_SEND_THE_DATA",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          school,
          class: Class,
          number: phone,
        }),
      }
    );
  };

  const isFormValid = name && surname && school && Class && phone;

  return (
     <div
      id="contact"
      className=" flex mt-5 mx-auto flex-col top-10 bg-gradient-to-tl from-blue-950 to-blue-100 text-black w-full max-w-md bg-white shadow-xl rounded-xl p-8 gap-6 border border-gray-200"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Aloqa Formasi
      </h2>

      <input
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 transition duration-300 hover:border-indigo-300"
        type="text"
        name="Name"
        placeholder="Ismingizni kiriting"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 transition duration-300 hover:border-indigo-300"
        type="text"
        name="Surname"
        placeholder="Familiyangizni kiriting"
        onChange={(e) => setSurname(e.target.value)}
      />

      <select
        className="w-full p-4 text-black border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:border-indigo-300"
        defaultValue=""
        onChange={(e) => setSchool(e.target.value)}
      >
        <option value="" disabled>
          --Maktabni tanlang--
        </option>
        {Schools.map((item) => (
          <option key={item} value={String(item)}>
            {item}-maktab
          </option>
        ))}
      </select>

      <select
        className="w-full p-4 text-black border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 hover:border-indigo-300"
        defaultValue=""
        onChange={(e) => setClass(e.target.value)}
      >
        <option value="" disabled>
          --Sinfingizni tanlang--
        </option>
        {Classes.map((item) => (
          <option key={item} value={String(item)}>
            {item}-sinf
          </option>
        ))}
      </select>

      <input
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500 transition duration-300 hover:border-indigo-300"
        type="tel"
        placeholder="Telefon raqam"
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        disabled={!isFormValid}
        type="submit"
        className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ease-in-out transform hover:scale-105 ${
          isFormValid
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={handleSubmit}
      >
        {isSent ? "Yuborildi" : "Yuborish"}
      </button>
    </div>
  );
};

export default ContactFormHandler;