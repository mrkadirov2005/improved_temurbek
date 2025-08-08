"use client";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./../certificate.css";

interface MemberCertificateProps {
  toggleCertificate: (val: boolean) => void;
}

export default function MemberCertificate({ toggleCertificate }: MemberCertificateProps) {
  const [isDataFilled, setIsDataFilled] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [score, setScore] = useState("");
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState<number | string>(0);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDataFilled(true);
    const member_name = (document.getElementById("member_name") as HTMLInputElement).value;
    const member_surname = (document.getElementById("member_surname") as HTMLInputElement).value;
    const member_subject = (document.getElementById("member_subject") as HTMLSelectElement).value;
    const member_grade = (document.getElementById("member_grade") as HTMLSelectElement).value;
    const member_score = (document.getElementById("member_score") as HTMLInputElement).value;

    setName(member_name);
    setSurname(member_surname);
    setGrade(member_grade);
    setScore(member_score);

    switch (member_subject) {
      case "english": return setSubject("Ingliz tili");
      case "russian": return setSubject("Rus tili");
      case "history": return setSubject("Tarix");
      case "arabic": return setSubject("Arab tili");
      case "korean": return setSubject("Koreys tili");
      case "mother_tongue_vs_literature": return setSubject("ONA TILI VA ADABIYOT");
      case "math": return setSubject("Matematika");
      default: return setSubject("SUBJECT");
    }
  };

  const generateImageDownload = () => {
    const element = certificateRef.current;
    if (!element) return;


    html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    }).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "certificate.png";
      link.click();
    });
  };

  const handleChange = () => {
    const font_input = (document.getElementById("font_size_certificate") as HTMLInputElement).value;
    const textEl = document.getElementById("certificate_member_name_surname") as HTMLHeadingElement;
    if (textEl) textEl.style.fontSize = `${font_input}px`;
  };

  const InputForm = () => (
    <section className="flex flex-col gap-10 items-center justify-center w-screen min-h-screen" style={{ backgroundColor: "#037764", color: "#000000" }}>
      <form
        className="w-96 flex flex-col gap-6 p-5"
        style={{ backgroundColor: "#60a5fa", boxShadow: "0 4px 6px #1e3a8a" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <h1 className="w-full text-2xl font-bold uppercase text-center" style={{ color: "#ffffff" }}>
          <b className="p-2 pb-1 mb-2 block line-clamp-6" style={{ backgroundColor: "#c2410c", boxShadow: "0 4px 6px #7c2d12" }}>
            TEMURBEK SCHOOL
          </b> MEMBERS
        </h1>
        <input id="member_name" required className="w-full px-2 py-1 rounded-md" type="text" placeholder="Ism kiriting: " />
        <input id="member_surname" required className="w-full px-2 py-1 rounded-md" type="text" placeholder="Familiya kiriting: " />
        <select id="member_subject" required>
          <option value="" disabled selected>--Tanlang--</option>
          {[
            { type: "english", name: "Ingliz tili" },
            { type: "russian", name: "Rus tili" },
            { type: "arabic", name: "Arab tili" },
            { type: "korean", name: "Koreys tili" },
            { type: "mother_tongue_vs_literature", name: "Ona tili va adabiyot" },
            { type: "math", name: "Matematika" },
            { type: "history", name: "Tarix" },
          ].map((item) => (
            <option key={item.type} value={item.type}>{item.name}</option>
          ))}
        </select>
        <select id="member_grade" required>
          <option value="" disabled selected>--Tanlang--</option>
          {["Starter", "A1", "A2", "A2+", "IELTS", "B1", "B2", "C1"].map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <input id="member_score" required className="w-full px-2 py-1 rounded-md" type="text" placeholder="Ball kiriting: " />
        {mode && (
          <select id="member_position" onChange={(e) => setPosition(e.target.value)}>
            {[1, 2, 3].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        )}
        <h2 onClick={() => setMode(!mode)} className="mr-auto py-2 px-5 text-white" style={{ backgroundColor: mode ? "#22c55e" : "#022c22" }}>
          Toggle level
        </h2>
        <button type="submit" className="w-fit py-2 px-5 mx-auto text-white" style={{ backgroundColor: "#86198f" }}>
          Submit
        </button>
        <button type="button" onClick={() => toggleCertificate(false)} className="px-6 py-2 text-white" style={{ backgroundColor: "#b91c1c" }}>
          Exit
        </button>
      </form>
    </section>
  );

  return isDataFilled ? (
    <div className="w-screen h-screen p-5 flex items-center justify-center" style={{ backgroundColor: "#f3f4f6" }}>
      <button
        onClick={generateImageDownload}
        className="absolute top-30 right-5 z-50 py-2 px-5 rounded-md shadow-lg text-white"
        style={{ backgroundColor: "#16a34a" }}
      >
        Download Image
      </button>
      <input
        onChange={handleChange}
        className="text-black absolute top-10 m-auto"
        type="number"
        id="font_size_certificate"
        placeholder="Enter font size:"
      />
      <button
        onClick={() => setIsDataFilled(false)}
        className="absolute top-30 left-5 z-50 py-2 px-5 rounded-md shadow-lg text-white"
        style={{ backgroundColor: "#16a34a" }}
      >
        Orqaga
      </button>
      <div
        ref={certificateRef}
        id="certificate_pdf"
        
        className="certificate_protected w-[300px] h-[425px] mt-5 shadow-xl p-10 relative"
      >
        <img src="/certificates/monthly.png" className="absolute w-full h-full top-0 left-0 z-[-1]"></img>
        <h1 className="absolute top-[500px] left-2 font-bold text-5xl text-center w-full" style={{ color: "#991b1b" }}>{mode ? position : ""}</h1>
        <h1 id="certificate_member_name_surname" className="absolute top-[220px] left-[-10%] uppercase font-bold w-96 text-center" style={{ color: "#450a0a" }}>
          {surname} {name}
        </h1>
        <h1 className="text-xl mt-[48px] text-center font-serif" style={{ color: "#000000" }}></h1>
        <h1 className="text-[10px] ml-[-130px] text-center font-serif mt-[215px]" style={{ color: "#000000" }}>{new Date().getMonth()}</h1>
        <h1 className="text-[8px] ml-[82px] mt-[-10px] italic " style={{ color: "#000000",fontFamily:"cursive"}}>{subject}</h1>
        <h1 className="absolute top-[260px] left-[55px] font-cursive italic  text-[10px] text-center w-full" style={{ color: "#000000" }}>{grade}</h1>
        <h1 className="absolute top-[270px] left-[18px] font-cursive italic  text-[10px] text-center w-full" style={{ color: "#000000" }}>{score}</h1>
      </div>
    </div>
  ) : <InputForm />;
}
