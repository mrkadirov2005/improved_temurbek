"use client";
import { useState,  useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./../certificate.css";

interface MemberCertificateProps {
  toggleCertificate: (val: boolean) => void;
}

export default function MemberCertificate({ toggleCertificate }: MemberCertificateProps) {
  const [isDownload, setIsDownload] = useState(false);
  const [isDataFilled, setIsDataFilled] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [score, setScore] = useState("");
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState<number | string>(0);
  const certificateRef = useRef<HTMLDivElement>(null);
console.log(isDownload)
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
      case "english":
        return setSubject("CAMBRIDGE ENGLISH SCALE");
      case "russian":
        return setSubject("RUSSIAN");
      case "history":
        return setSubject("HISTORY");
      case "arabic":
        return setSubject("ARABIC LANGUAGE");
      case "korean":
        return setSubject("KOREAN LANGUAGE");
      case "mother_tongue_vs_literature":
        return setSubject("ONA TILI VA ADABIYOT");
      case "math":
        return setSubject("MATHEMATICS");
      default:
        return setSubject("SUBJECT");
    }
  };

  const generatePDF = () => {
    setIsDownload(true);
    setTimeout(() => setIsDownload(false), 1000);

    const element = certificateRef.current;
    if (!element) return;

    setTimeout(() => {
      html2canvas(element, { scale: 3 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "mm", "a4");
        const imgWidth = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("certificate.pdf");
      });
    }, 500);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date().toLocaleDateString();
  const month = new Date().getMonth();


  const handleChange = () => {
    const font_input = (document.getElementById("font_size_certificate") as HTMLInputElement).value;
    const textEl = document.getElementById("certificate_member_name_surname") as HTMLHeadingElement;
    if (textEl) {
      textEl.style.fontSize = `${font_input}px`;
    }
  };

  const InputForm = () => (
    <section className="bg-[rgb(3,119,100)] flex flex-col gap-10 items-center justify-center w-screen min-h-screen text-black">
      <form
        className="w-96 flex flex-col gap-6 shadow-md shadow-blue-950 bg-blue-400 p-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <h1 className="w-full text-white text-2xl font-bold uppercase text-center">
          <b className="bg-orange-700 p-2 pb-1 shadow-md line-clamp-6 shadow-orange-900 mb-2">TEMURBEK SCHOOL</b> MEMBERS
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
        {mode && <select id="member_position" onChange={(e) => setPosition(e.target.value)}>{[1, 2, 3].map((item) => (<option key={item} value={item}>{item}</option>))}</select>}
        <h2 onClick={() => setMode(!mode)} className={`mr-auto py-2 px-5 ${!mode ? "bg-green-950" : "bg-green-500"} text-white`}>Toggle level</h2>
        <button type="submit" className="w-fit py-2 px-5 mx-auto bg-fuchsia-800">Submit</button>
        <button type="button" onClick={() => toggleCertificate(false)} className="px-6 py-2 bg-red-700 text-white">Exit</button>
      </form>
    </section>
  );

  return isDataFilled ? (
    <div className="w-screen h-screen  p-5 flex items-center justify-center bg-gray-100">
      <button onClick={generatePDF} className="absolute top-30 right-5 z-50 bg-green-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-700">Download PDF</button>
      <input onChange={handleChange} className="text-black absolute top-10 m-auto" type="number" id="font_size_certificate" placeholder="Enter font size:" />
      <button onClick={() => setIsDataFilled(false)} className="absolute top-30 left-5 z-50 bg-green-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-green-700">Orqaga</button>
      <div
        ref={certificateRef}
        id="certificate_pdf"
        style={{ backgroundImage: "url(certificate.png)" }}
        className="certificate_protected w-[600px] h-[425px] mt-5 bg-white shadow-xl p-10 relative"
      >
        <h1 className="text-black text-center mt-10 text-4xl font-serif">CERTIFICATE</h1>
        <p className="text-red-800 text-center text-xl font-bold">proudly presented to</p>
        <h1 className="absolute top-[500px] left-2 font-bold text-5xl text-red-800 text-center w-full">{mode ? position : ""}</h1>
        <h1
          id="certificate_member_name_surname"
          className={`absolute top-[160px] left-[18%] uppercase text-red-950 font-bold border-b-2 border-black w-96 border-dashed text-center`}
        >
          {surname} {name}
        </h1>
        <h1 className="text-black text-xl mt-[48px] text-center font-serif">
          For {!mode ? "taking Assessment Test based on " : "performing well in the month of "}<br />
          {mode && <strong>{months[month]}</strong>} {mode && "in "}<strong>{grade}</strong> {mode && `level of ${subject}`}
        </h1>
        {!mode && <h1 className="absolute top-[222px] text-gray-800 text-lg left-0 text-center font-bold w-full">{subject || "Test Name"}</h1>}
        <h1 className={`text-black text-2xl ${mode ? "mt-0" : "mt-[15px]"} text-center font-serif`}>
          {mode ? "by" : "and"} reaching the {mode ? "score" : "level"} of
        </h1>
        <h1 className="absolute top-[300px] left-0 font-bold text-3xl text-red-800 text-center w-full">
          {!mode ? `${grade}-` : ""}{score}
        </h1>
        <p className="absolute uppercase text-md left-[-110px] bottom-[50px] underline text-gray-800 font-bold text-center w-full">{date}</p>
        <h1 className="absolute text-black bottom-[90px] right-[100px] text-lg">Shakhobov.T</h1>
        <h1 className="absolute text-black bottom-[70px] right-[110px] text-lg">director</h1>
      </div>
    </div>
  ) : (
    <InputForm />
  );
}
