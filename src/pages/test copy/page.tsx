"use client";
import { useState } from "react";
import TestCard from "../../components/TestCard";
import ContactFormHandler from "../../components/Contact_form";
import TestComp from "./TestComp";
import MemberCertificate from "../../certificate/MembersOnly/certificate";
import Center_member_passwords from "../../certificate/MembersOnly/passwords";
import { Button } from "@mui/material";

const verifyIsMember = (): boolean => {
  const name = prompt("Ismingizni kiriting:");
  const password = prompt("Parolingizni kiriting:");
  return Center_member_passwords.some((i) => i.name === name && i.password === password);
};

type FormDataType = any;

export default function TestPage() {
  const [isTest, setIsTest] = useState<boolean>(false);
  const [testType, setTestType] = useState<string>("");
  const [isStartButton, setSIsStart] = useState<boolean>(false);
  const [isStartTest, setIsStartTest] = useState<boolean>(false);
  const [formData, setFormdata] = useState<FormDataType | null>(null);
  const [isMemberCertificate, setIsMemberCertificate] = useState<boolean>(false);

  const handleMemberCertificationPort = () => {
    const isVerified = verifyIsMember();
    if (isVerified) {
      setIsMemberCertificate(true);
    } else {
      alert("Siz Ravon Muloqot O'quv markazi a'zosi emassiz!");
    }
  };

  return !isMemberCertificate ? (
    !isStartTest ? (
      <section className="bg-gradient-to-br from-blue-700 via-green-600 to-cyan-400 mt-16 text-black min-h-screen flex flex-col">
        <div className="w-3/5 m-auto flex flex-col items-center justify-center py-10 sm:py-12  bg-gradient-to-b from-blue-800 to-orange-500 mt-16 bg-opacity-10 backdrop-blur-md rounded-md shadow-2xl shadow-green text-center">
          <img src="/TS_logo.png" width="80" alt="Logo" className="mb-6 animate-pulse rounded-3xl" />
          <h1 className="text-4xl sm:text-5xl text-white font-extrabold mb-4 tracking-tight drop-shadow-md">
           TEMURBEK EXAM CENTER
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-200 mb-6">Xush Kelibsiz</h2>
        </div>

        <nav className="px-6 shadow-xl shadow-blue-500 bg-gradient-to-top from-blue-500 via-fuchsia-400 to-white w-[90%] m-auto py-20 rounded-3xl mb-10  sm:px-10 mt-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">Test turini tanlang:</h1>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { type: "english", name: "Ingliz tili" },
              { type: "russian", name: "Rus tili" },
              { type: "arabic", name: "Arab tili" },
              { type: "korean", name: "Koreys tili" },
              { type: "mother_tongue_vs_literature", name: "Ona tili va adabiyot" },
              { type: "math", name: "Matematika" },
              { type: "history", name: "Tarix" },
            ].map((item) => (
              <div 
                key={item.type}
                onClick={() => {
                  setIsTest(true);
                  setTestType(item.type);
                }}
                className="cursor-pointer bg-opacity-20 backdrop-blur-lg p-6 rounded-xl text-black shadow-md hover:scale-105 transform transition-all duration-300"
              >
                <TestCard
                  title="Mavjud"
                  value={item.name}
                  setIsTest={setIsTest}
                  setTestType={setTestType}
                />
              </div>
            ))}

            <div
              onClick={handleMemberCertificationPort}
              className=" bg-opacity-20 backdrop-blur-lg text-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-medium">Xodimlar uchun</h3>
              <p className="text-2xl font-bold mt-2">CertiPort</p>
            </div>
          </ul>
        </nav>

        {isTest && (
          <section className="absolute flex flex-col top-0 py-20 left-0 w-full min-h-full    items-center justify-center bg-blue-700 bg-opacity-70 z-50">
            <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-2xl animate-fadeIn">
            <a href="/test"><Button type="reset" variant="contained" color="error" >X</Button></a>
              <ContactFormHandler
                setClicked={() => setIsTest(false)}
                setIsStart={setSIsStart}
                setData={setFormdata}
              />
              <button
                disabled={!isStartButton}
                onClick={() => setIsStartTest(true)}
                className={`w-full mt-6 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                  isStartButton ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Testni boshlash
              </button>
            </div>
          </section>
        )}
      </section>
    ) : (
      <TestComp
        testType={testType}
        stopTest={{ setIsStartTest, isStartTest, isTest, setIsTest }}
        data={formData}
      />
    )
  ) : (
    <MemberCertificate toggleCertificate={setIsMemberCertificate} />
  );
}