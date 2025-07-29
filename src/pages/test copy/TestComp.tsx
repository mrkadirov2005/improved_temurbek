"use client";
import  { useState, useEffect } from "react";
import Tests_english from "./source/english/english";
import Tests_russian from "./source/Russian/Russian";
import history from "./source/history/history";
import arabic_tests from "./source/arabic/arabic";
import korean_tests from "./source/korean/korean";
import math_tests from "./source/Math/Math";
import uzbek_ona_tili from "./source/uzbek/uzbek";
import Certificate from "../../certificate/MembersOnly/certificate";
import TestCardForm from "./TestCard";
import "./test.css";

// Define the structure of a single test
interface TestItem {
  level: string;
  test: string;
  options: string[];
  correct: string;
}

interface TestCompProps {
  testType: string | false;
  stopTest: {
    isStartTest: boolean;
    isTest: boolean;
    setIsStartTest: (val: boolean) => void;
    setIsTest: (val: boolean) => void;
  };
  data: {
    name?: string;
    surname?: string;
    [key: string]: any;
  };
}

export default function TestComp({
  testType = false,
  stopTest,
  data = {},
}: TestCompProps) {
  console.log(testType)
  const [currentTest, setCurrentTest] = useState<TestItem[] | false>(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isCertified, setIsCertified] = useState(false);

  useEffect(() => {
    switch (testType) {
      case "english":
        setCurrentTest(Tests_english);
        break;
      case "russian":
        setCurrentTest(Tests_russian);
        break;
      case "arabic":
        setCurrentTest(arabic_tests);
        break;
      case "korean":
        setCurrentTest(korean_tests);
        break;
      case "mother_tongue_vs_literature":
        setCurrentTest(uzbek_ona_tili);
        break;
      case "math":
        setCurrentTest(math_tests);
        break;
      case "history":
        setCurrentTest(history);
        break;
      default:
        setCurrentTest(false);
    }
  }, [testType]);

  const handleStopTest = () => {
    stopTest.setIsStartTest(false);
    stopTest.setIsTest(false);
  };

  const handleCertification = () => {
    setIsCertified(true);

    fetch(
      "URL HERE",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          subject: testType || "",
          correct: correctCount,
          isCertified: correctCount > 4 ? "yes" : "no",
          level:
            correctCount > 15
              ? "B2"
              : correctCount > 11
              ? "B1"
              : correctCount > 7
              ? "A2"
              : correctCount > 4
              ? "A1"
              : "undefined",
        }),
      }
    );
  };

  if (isCertified) {
    return <Certificate toggleCertificate={setIsCertified} />;
  }

  console.log( "current test",currentTest)
  if (!currentTest) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-red-600">
        Test topilmadi yoki mavjud emas
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {currentTest.map((testItem, index) => (
        <TestCardForm
          key={index}
          level={testItem.level}
          test={testItem.test}
          options={testItem.options}
          correct={testItem.correct}
          setCount={setCorrectCount}
          count={correctCount}
        />
      ))}

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <button
          onClick={handleStopTest}
          className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700"
        >
          Bekor qilish
        </button>
        <button
          onClick={handleCertification}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-800"
        >
          Sertifikatni ko‘rish
        </button>
      </div>
    </div>
  );
}
