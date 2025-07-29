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
  const [isTest, setIsTest] = useState(false);
  const [testType, setTestType] = useState("");
  const [isStartButton, setSIsStart] = useState(false);
  const [isStartTest, setIsStartTest] = useState(false);
  const [formData, setFormdata] = useState<FormDataType | null>(null);
  const [isMemberCertificate, setIsMemberCertificate] = useState(false);

  const handleMemberCertificationPort = () => {
    const isVerified = verifyIsMember();
    if (isVerified) {
      setIsMemberCertificate(true);
    } else {
      alert("Siz Ravon Muloqot O'quv markazi a'zosi emassiz!");
    }
  };

  if (isMemberCertificate) return <MemberCertificate toggleCertificate={setIsMemberCertificate} />;

  if (isStartTest) {
    return (
      <TestComp
        testType={testType}
        stopTest={{ setIsStartTest, isStartTest, isTest, setIsTest }}
        data={formData}
      />
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-700 via-green-600 to-cyan-400 mt-16 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto text-center py-12 px-4 bg-gradient-to-b from-blue-800 to-orange-500 bg-opacity-10 backdrop-blur-md rounded-md shadow-2xl">
        <img src="/TS_logo.png" width="80" alt="Logo" className="mb-6 animate-pulse rounded-3xl mx-auto" />
        <h1 className="text-4xl sm:text-5xl text-white font-extrabold mb-4 tracking-tight drop-shadow-md">
          TEMURBEK EXAM CENTER
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-200 mb-6">Xush Kelibsiz</h2>
      </div>

      <nav className="w-full max-w-6xl px-4 sm:px-6 py-10 bg-white/10 rounded-3xl mt-10 mb-16 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-8">Test turini tanlang:</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
              className="cursor-pointer bg-white/30 backdrop-blur-lg p-6 rounded-xl text-black shadow-md hover:scale-105 transition duration-300"
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
            className="bg-white/30 backdrop-blur-lg text-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-medium">Xodimlar uchun</h3>
            <p className="text-2xl font-bold mt-2">CertiPort</p>
          </div>
        </ul>
      </nav>

      {isTest && (
        <section className="fixed inset-0 flex flex-col items-center justify-center bg-blue-900/70 z-50 px-4 py-8">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-2xl">
            <a href="/test">
              <Button type="reset" variant="contained" color="error">
                X
              </Button>
            </a>

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
  );
}
