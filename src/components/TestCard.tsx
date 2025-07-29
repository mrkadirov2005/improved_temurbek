import React from "react";

interface TestCardProps {
  title: string;
  value: string;
  setIsTest: (val: boolean) => void;
  setTestType: (val: string) => void;
}

const TestCard: React.FC<TestCardProps> = ({
  title,
  value,
  setIsTest,
  setTestType,
}) => {
  const handleClick = () => {
    setIsTest(true);
    setTestType(value);
  };

  return (
    <section
      onClick={handleClick}
      className="  p-4 rounded-lg hover:bg-blue-600   shadow-md hover:shadow-xl hover:scale-95 sm:hover:scale-100 transition duration-300 cursor-pointer text-white"
    >
      <h3 className="text-lg  sm:text-xl md:text-2xl font-medium">{title}</h3>
      <p className="text-2xl  sm:text-3xl md:text-4xl font-bold mt-2">{value}</p>
    </section>
  );
};

export default TestCard;
