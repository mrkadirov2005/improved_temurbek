// Results.tsx
import { Button } from "@mui/material";
import { useState } from "react";

const images = import.meta.glob("/src/assets/results/ielts/*.{jpg,jpeg,png,gif}", {
  eager: true, // Import all immediately
  import: "default", // Use default export (image URL)
});

const cefr_images = import.meta.glob("/src/assets/results/*.{jpg,jpeg,png,gif}", {
  eager: true, // Import all immediately
  import: "default", // Use default export (image URL)
});

const Results = () => {
  const imagePaths = Object.values(images) as string[];
  const cefr_images_path = Object.values(cefr_images) as string[];

  const [option, setOption] = useState<boolean | number>(1)

  return (
    <section className="mt-10 gap-10 text-white flex w-[100%] px-24 flex-col items-center justify-center">
      <div className="flex bg-white w-[200px] rounded-2xl items-center gap-5 mr-auto px-5 py-2">
        <Button onClick={() => setOption(true)} variant="contained" color={option ? "success" : "info"}>IELTS</Button>
        <Button onClick={() => setOption(false)} variant="contained" color={!option ? "success" : "info"}>CEFR</Button>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-between">
        {option != false && imagePaths.map((src, index) => (
          <div className="w-64 h-[400px] flex flex-col items-center justify-between bg-gradient-to-bl from-blue-600 via-green-500 to-white bg-white py-4 rounded-xl px-5">
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-56 h-80"
            />
            <Button variant="contained" color="primary" fullWidth>TEMURBEK SCHOOL</Button>
          </div>
        ))}
        {option != true && cefr_images_path.map((src, index) => (
          <div className="w-64 h-[400px] flex flex-col items-center justify-between bg-gradient-to-bl from-blue-600 via-green-500 to-white bg-white py-4 rounded-xl px-5">
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-56 h-80"
            />
            <Button>{src.split("_")[src.split("_").length - 1].split(".")[0]}</Button>
            <Button variant="contained" color="primary" fullWidth>TEMURBEK SCHOOL</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
