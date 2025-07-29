import  { useState } from "react";

interface TestCardFormProps {
  level: string;
  test: string;
  options: string[];
  correct: string;
  setCount: (val: number) => void;
  count: number;
}

export default function TestCardForm({
  level,
  test,
  options,
  correct,
  setCount,
  count,
}: TestCardFormProps) {
  const [incorrect, setIncorrect] = useState<boolean | number>(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
console.log(incorrect)
  const handleAnswer = (item: string, index: number) => {
    if (item === correct) {
      setCount(count + 1);
      setIncorrect(1);
    } else {
      setIncorrect(true);
    }
    setIsAnswered(true);
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto border border-gray-300">
      <button className="mr-auto pl-5 w-fit px-5 py-2 bg-green-600 text-white">
        {count}
      </button>

      <h2 className="text-lg font-bold text-gray-700">Level: {level}</h2>
      <p className="text-gray-800 text-md my-4 font-medium">{test}</p>

      <div className="flex flex-col gap-4">
        {options.map((item, index) => {
          const isCorrect = item === correct;
          const isSelected = index === currentIndex;

          return (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => handleAnswer(item, index)}
              className={`w-full px-4 py-2 rounded-md text-white font-semibold transition-all duration-300
                ${
                  isAnswered && isSelected
                    ? isCorrect
                      ? "bg-green-600"
                      : "bg-red-500 hover:bg-red-900"
                    : "bg-blue-500 hover:bg-blue-600"
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
