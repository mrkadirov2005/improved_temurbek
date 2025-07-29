"use client";
import React, { useState } from "react";
const coursesData  ={
    "kurslar": [
    
      {
        "id":"1",
        "nomi": "IELTS",
        "tarif": "Xalqaro Ingliz Tili Test Tizimiga tayyorgarlik kursi.",
        "darajalar": ["O'rta", "Yuqori"],
        "davomiyligi": "1-6 oy",
        "xususiyatlar": ["Amaliy testlar", "Yozish topshiriqlari", "Gapirish mashg'ulotlari", "Tinglash texnikasi"]
      },
      {
        "id":"2",
        "nomi": "CEFR",
        "tarif": "Yevropa Tillari Umumiy Tavsifiga moslashtirilgan kurs.",
        "darajalar": ["A1", "A2", "B1", "B2", "C1", "C2"],
        "davomiyligi": "3-12 oy",
        "xususiyatlar": ["Til bilimi", "Ko'nikmalarni baholash", "Imtihon tayyorlov"]
      },
      {
        "id":"3",
        "nomi": "TKT",
        "tarif": "O'qituvchilar uchun Teaching Knowledge Test tayyorlov kursi.",
        "darajalar": ["1-modul", "2-modul", "3-modul"],
        "davomiyligi": "1-3 oy",
        "xususiyatlar": ["O'qitish metodikasi", "Dars rejalash", "Sinfni boshqarish"]
      },
      {
        "id":"4",
        "nomi": "APTIS",
        "tarif": "APTIS - bu tashkilotlar uchun moslashtirilgan va ishonchli ingliz tili baholash vositasi bo'lib, u British Council ekspertlari tomonidan ishlab chiqilgan.",
        "darajalar": ["A1", "A2", "B1", "B2", "C"],
        "davomiyligi": "1-3 oy",
        "xususiyatlar": ["Test formatiga tayyorlanish", "O'qish va tinglash amaliyoti", "Yozish topshiriqlari", "Gapirish amaliyoti"]
      },
      {
        "id":"5",
        "nomi": "Multilevel",
        "tarif": "Bir xil guruhdagi turli darajadagi talabalar uchun moslashtirilgan kurslar.",
        "darajalar": ["Boshlang'ich", "O'rta", "Yuqori"],
        "davomiyligi": "Moslashuvchan",
        "xususiyatlar": ["Individual e'tibor", "Guruh mashg'ulotlari", "Ko'nikmalarni rivojlantirish"]
      },
      {
        "id":"6",
        "nomi": "Matematika kursi",
        "tarif": "Matematika kursi muammolarni hal qilish va tushunchalarni egallashga qaratilgan.",
        "darajalar": ["Asosiy", "O'rta", "Yuqori"],
        "davomiyligi": "3-12 oy",
        "xususiyatlar": ["Algebra", "Geometriya", "Hisoblash", "Imtihon tayyorlov"]
      },
      {
        "id":"7",
        "nomi": "Rus tili kurslari",
        "tarif": "Rus tilini turli darajalarda o'rganish uchun kurslar.",
        "darajalar": ["Boshlang'ich", "O'rta", "Yuqori"],
        "davomiyligi": "3-12 oy",
        "xususiyatlar": ["Grammatika", "Lug'at", "Gapirish amaliyoti", "Madaniy kontekst"]
      },
      {
        "id":"8",
        "nomi": "TOPIK asosidagi Koreys tili kurslari",
        "tarif": "Koreys tilini bilish darajasini aniqlash testi (TOPIK) uchun tayyorgarlik kurslari.",
        "darajalar": ["Boshlang'ich", "O'rta", "Yuqori"],
        "davomiyligi": "3-12 oy",
        "xususiyatlar": ["Grammatika", "Lug'at", "Tinglash", "O'qish", "Yozish"]
      },
      {
        "id":"9",
        "nomi": "Prezident maktabiga tayyorlov",
        "tarif": "Prezident maktablariga kirish uchun keng qamrovli tayyorgarlik.",
        "darajalar": ["Umumiy"],
        "davomiyligi": "3-12 oy",
        "xususiyatlar": ["Matematika", "Mantiq", "Fan", "Til ko'nikmalari"]
      }
    ]
  }
  ;
const subCourses= {
    "1": [
      {
          "level": "Pre-IELTS",
          "course_length": "2-3",
          "target": "IELTS uchun tayyorgarlikning boshlang'ich bosqichi",
          "description": "Grammatik asoslarni mustahkamlash, so‘z boyligini oshirish va IELTS formatini tushunish uchun dastlabki tayyorgarlik.",
          "price": 375,
          "certificate": "Pre-IELTS kursini tugatganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
      },
      {
          "level": "IELTS",
          "course_length": "3-4",
          "target": "IELTS imtihoni uchun to‘liq tayyorgarlik",
          "description": "IELTS bo'yicha to'liq tayyorgarlik, shu jumladan barcha bo'limlar (Listening, Reading, Writing, Speaking) bo'yicha mashg'ulotlar.",
          "price": 375,
          "certificate": "IELTS tayyorgarlik kursini tugatganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
      },
      {
          "level": "Master IELTS",
          "course_length": "4-5",
          "target": "IELTS 7+ natijasiga erishish uchun chuqur tayyorgarlik",
          "description": "IELTS bo‘yicha yuqori natijalar olish uchun strategiyalar va intensiv mashg‘ulotlar.",
          "price": 375,
          "certificate": "Master IELTS kursini tugatganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / IELTS 7+ sertifikat"
      }
    ],    
    "2": [
             {
              "level": "Starter",
              "course_length": "1.5-3",
              "target": "Ingliz tiliga ilk qadam",
              "description": "Ingliz tilining asosiy qismlarini, jumladan, oddiy so'z boyligi, grammatika va kundalik iboralarni o'rganish.",
              "price": 250,
              "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
            },
      {
          "level": "a1",
          "course_length": "1.5-3",
          "target": "Ingliz tiliga ilk qadam",
          "description": "Ingliz tilining asosiy qismlarini, jumladan, oddiy so'z boyligi, grammatika va kundalik iboralarni o'rganish.",
          "price": 260,
          "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
      },
       {
          "level": "a2",
          "course_length": "2-3",
          "target": "Boshlang‘ich darajadagi ingliz tili",
          "description": "Oddiy suhbatlar va kundalik vaziyatlarda ishlash qobiliyatini shakllantirish.",
          "price": 270,
          "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
      },
      {
        
          "level": "a2+",
          "course_length": "2-3.5",
          "target": "Boshlang‘ich ko‘nikmalarni yaxshilash",
          "description": "Grammatik va so‘z boyligini takomillashtirib, oddiy vaziyatlarda o‘zingizni aniq ifodalash.",
          "price": 270,
          "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
      },
      {
        
          "level": "b1",
          "course_length": "3-4",
          "target": "O‘rta darajadagi muloqot ko‘nikmalari",
          "description": "Tanish mavzularda gapirish, o‘qish va yozish bo‘yicha ishonch hosil qilish.",
          "price": 300,
          "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge B1 sertifikat"
      },
      {
          "level": "b2",
          "course_length": "3.5-4.5",
          "target": "O‘rta-yuqori darajadagi bilim",
          "description": "Murakkab mavzularni muhokama qilish va batafsil matnlarni tushunish qobiliyatini oshirish.",
          "price": 350,
          "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge B2 sertifikat / Multilevel B2 sertifikat / IELTS 6+"
      },
      {
          "level": "c1",
          "course_length": "4-5",
          "target": "Ingliz tilida yuqori darajadagi bilim",
          "description": "Ingliz tilida ravon gapirishga erishish, keng so‘z boyligi va nozik muloqot ko‘nikmalariga ega bo‘lish.",
          "price": 375,
          "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge C1 sertifikat / Multilevel C1 sertifikat / IELTS 7+"
      }
    ],
    
    "3":[
        {
        "level": "TKT module-1",
          "course_length": "1-3",
          "target": "O'qitish metodikasiga doir bilimlarni egallash imkonini beradi.",
          "description": "TKTdan o'zingizga kerakli darajaga erishishingizga yordam beriladi va kursni tugatib, sertifikatni qo'lga kiritishingiz mumkin.",
          "price": 300,
          "certificate": "TKT certificate"
     
        },
        {
            "level": "TKT module-2",
              "course_length": "1-3",
              "target": "O'qitish metodikasiga doir bilimlarni egallash imkonini beradi.",
              "description": "TKTdan o'zingizga kerakli darajaga erishishingizga yordam beriladi va kursni tugatib, sertifikatni qo'lga kiritishingiz mumkin.",
              "price": 300,
              "certificate": "TKT certificate"
         
            },
            {
                "level": "TKT module-3",
                  "course_length": "1-3",
                  "target": "O'qitish metodikasiga doir bilimlarni egallash imkonini beradi.",
                  "description": "TKTdan o'zingizga kerakli darajaga erishishingizga yordam beriladi va kursni tugatib, sertifikatni qo'lga kiritishingiz mumkin.",
                  "price": 300,
                  "certificate": "TKT certificate"
             
                }
    ],
    "4":[
        {
            "level": "a1",
            "course_length": "1.5-3",
            "target": "Ingliz tiliga ilk qadam",
            "description": "Ingliz tilining asosiy qismlarini, jumladan, oddiy so'z boyligi, grammatika va kundalik iboralarni o'rganish.",
            "price": 260,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
        },
         {
            "level": "a2",
            "course_length": "2-3",
            "target": "Boshlang‘ich darajadagi ingliz tili",
            "description": "Oddiy suhbatlar va kundalik vaziyatlarda ishlash qobiliyatini shakllantirish.",
            "price": 270,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
        },
        {
          
            "level": "a2+",
            "course_length": "2-3.5",
            "target": "Boshlang‘ich ko‘nikmalarni yaxshilash",
            "description": "Grammatik va so‘z boyligini takomillashtirib, oddiy vaziyatlarda o‘zingizni aniq ifodalash.",
            "price": 270,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat"
        },
        {
          
            "level": "b1",
            "course_length": "3-4",
            "target": "O‘rta darajadagi muloqot ko‘nikmalari",
            "description": "Tanish mavzularda gapirish, o‘qish va yozish bo‘yicha ishonch hosil qilish.",
            "price": 300,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge B1 sertifikat"
        },
        {
            "level": "b2",
            "course_length": "3.5-4.5",
            "target": "O‘rta-yuqori darajadagi bilim",
            "description": "Murakkab mavzularni muhokama qilish va batafsil matnlarni tushunish qobiliyatini oshirish.",
            "price": 350,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge B2 sertifikat / Multilevel B2 sertifikat / IELTS 6+"
        },
        {
            "level": "c1",
            "course_length": "4-5",
            "target": "Ingliz tilida yuqori darajadagi bilim",
            "description": "Ingliz tilida ravon gapirishga erishish, keng so‘z boyligi va nozik muloqot ko‘nikmalariga ega bo‘lish.",
            "price": 375,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge C1 sertifikat / Multilevel C1 sertifikat / IELTS 7+"
        }
    ],
    "5":[
        {
          
            "level": "Boshlang'ich",
            "course_length": "3-4",
            "target": "Boshlangich darajadagi muloqot ko‘nikmalari",
            "description": "Tanish mavzularda gapirish, o‘qish va yozish bo‘yicha ishonch hosil qilish.",
            "price": 300,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge B1 sertifikat"
        },
        {
            "level": "O'rta",
            "course_length": "3.5-4.5",
            "target": "O‘rta-yuqori darajadagi bilim",
            "description": "Murakkab mavzularni muhokama qilish va batafsil matnlarni tushunish qobiliyatini oshirish.",
            "price": 350,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge B2 sertifikat / Multilevel B2 sertifikat / IELTS 6+"
        },
        {
            "level": "Yuqori bosqich",
            "course_length": "4-5",
            "target": "Ingliz tilida yuqori darajadagi bilim",
            "description": "Ingliz tilida ravon gapirishga erishish, keng so‘z boyligi va nozik muloqot ko‘nikmalariga ega bo‘lish.",
            "price": 375,
            "certificate": "Imtihondan o'tganlik to'g'risida TEMURBEK SCHOOL tomonidan taqdim etiladigan sertifikat / Cambridge C1 sertifikat / Multilevel C1 sertifikat / IELTS 7+"
        }
    ],
    "6": [
      {
          "level": "Boshlang'ich",
          "course_length": "1-3",
          "target": "Matematikaning asosiy ko'nikmalarini o'rganish",
          "description": "Oddiy arifmetika, asosiy algebra va kundalik matematik muammolarni yechish.",
          "price": 200,
          "certificate": "Matematika boshlang'ich kursini tugatganlik to'g'risida sertifikat"
      },
      {
          "level": "O'rta",
          "course_length": "2-4",
          "target": "O‘rta darajadagi matematik bilimlarni rivojlantirish",
          "description": "Geometriya, algebra, tenglamalar va murakkabroq masalalarni hal qilish ko'nikmalari.",
          "price": 300,
          "certificate": "Matematika o'rta daraja kursini tugatganlik to'g'risida sertifikat"
      },
      {
          "level": "Oliy",
          "course_length": "3-5",
          "target": "Matematikaning ilg‘or mavzulari bo‘yicha tajriba",
          "description": "Chuqur algebra, trigonometriya va matematik tahlil bo‘yicha bilimlar.",
          "price": 400,
          "certificate": "Matematika ilg'or daraja kursini tugatganlik to'g'risida sertifikat"
      }
    ],
    "7": [
      {
          "level": "A1",
          "course_length": "2-3",
          "target": "Rus tiliga ilk qadam",
          "description": "Oddiy so‘z boyligi va kundalik iboralarni o‘rganish.",
          "price": 200,
          "certificate": "Rus tili A1 darajasini tugatganlik to'g'risida sertifikat"
      },
      {
          "level": "A2",
          "course_length": "2.5-3.5",
          "target": "Boshlang‘ich darajadagi rus tili",
          "description": "Taniqli mavzularda gapirish va oddiy matnlarni tushunishni rivojlantirish.",
          "price": 250,
          "certificate": "Rus tili A2 darajasini tugatganlik to'g'risida sertifikat"
      },
      {
          "level": "B1",
          "course_length": "3-4",
          "target": "O‘rta darajadagi muloqot ko‘nikmalari",
          "description": "O‘qish, yozish va murakkabroq mavzularda muloqot qilish.",
          "price": 300,
          "certificate": "Rus tili B1 darajasini tugatganlik to'g'risida sertifikat"
      },
      {
        "level": "B2",
        "course_length": "3-4",
        "target": "O‘rta-yuqori darajadagi muloqot ko‘nikmalari",
        "description": "O‘qish, yozish va murakkabroq mavzularda muloqot qilish.",
        "price": 300,
        "certificate": "Rus tili B1 darajasini tugatganlik to'g'risida sertifikat"
    }
    ],
    "8": [
      {
          "level": "TOPIK I",
          "course_length": "2-4",
          "target": "Koreys tilining boshlang‘ich darajasini o‘rganish",
          "description": "So‘z boyligi va oddiy iboralarni o‘rganish.",
          "price": 250,
          "certificate": "TOPIK I kursini tugatganlik to'g'risida sertifikat"
      },
      {
          "level": "TOPIK II",
          "course_length": "4-6",
          "target": "Koreys tilining ilg‘or darajasini o‘rganish",
          "description": "Murakkab mavzular va til ko‘nikmalarini rivojlantirish.",
          "price": 400,
          "certificate": "TOPIK II kursini tugatganlik to'g'risida sertifikat"
      },
      {
          "level": "TOPIK III",
          "course_length": "4-6",
          "target": "Koreys tilining ilg‘or darajasini o‘rganish",
          "description": "Murakkab mavzular va til ko‘nikmalarini rivojlantirish.",
          "price": 400,
          "certificate": "TOPIK II kursini tugatganlik to'g'risida sertifikat"
      }
    ],
    "9":[
        {
            "level":"Prezident Maktabi",
            "course_length":"4-6",
            "target":"Prezident",
            "description":"Ushbu intensivlashtirilgan kursda, siz Prezident maktablariga samarali tashkillashtirilgan jadval asosida ta'lim olasiz.",
            "price":300,
            "certificate":"Prezident maktabiga tayyorlov kursini to'liq tugatganlik haqidagi sertifikat va Prezident maktabiga imtohon topshirish natijasi."
        }
    ]
  }
  
import { Button } from "@mui/material";

// Define Course Type
interface Course {
  id: string;
  nomi: string;
  tarif: string;
  darajalar: string[];
  davomiyligi: string;
  xususiyatlar: string[];
}

// Define SubCourse Type
type SubCourse = {
  level: string;
  course_length: string;
  target: string;
  description: string;
  price: number;
  certificate: string;
};

const CourseComponent: React.FC = () => {
  const [searchOption, setSearchOption] = useState<Course | null>(null);
  const [searchId, setSearchId] = useState<SubCourse[] | null>(null);
  const [courses, setCourses] = useState<Course[]>(coursesData.kurslar);
  const [course, setCourse] = useState<SubCourse | null>(null);

  const filterCourses = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCourses = coursesData.kurslar.filter(
      (item) => item.nomi === e.target.value
    );
    setCourses(e.target.value === " " ? coursesData.kurslar : selectedCourses);
  };

  const handleSelectCourse = (course: Course) => {
    setSearchOption(course);
    const id = course.id;
    const filteredData = subCourses[id as keyof typeof subCourses] || [];
    setSearchId(Object.values(filteredData));
  };

  const handleLeaveRequest = () => {
    document.querySelector("#form_container")?.classList.toggle("hidden");
    setSearchOption(null);
  };

  return (
    <section className="flex flex-col rounded-4xl w-full items-start justify-start min-h-screen p-10 my-10 bg-gradient-to-b from-[#fdfcfb] via-[#02cceb] to-[#f5f7fa]">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">📘 Kurslar</h1>

      <div className="mb-8">
        <select
          onChange={filterCourses}
          className="w-60 p-3 border border-blue-300 bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        >
          <option value=" ">--Kursni tanlang--</option>
          {coursesData.kurslar.map((course) => (
            <option key={course.nomi} value={course.nomi}>
              {course.nomi}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleSelectCourse(course)}
            className="relative rounded-xl p-5 pb-0 bg-blue-50 text-blue-900 border border-blue-100 shadow-md hover:shadow-2xl hover:bg-white transform hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{course.nomi}</h2>
            <p className="mb-1"><strong>Ta'rif:</strong> {course.tarif}</p>
            <p className="mb-1"><strong>Darajalar:</strong> {course.darajalar.join(", ")}</p>
            <p className="mb-1"><strong>Davomiyligi:</strong> {course.davomiyligi}</p>
            <p className="mb-1"><strong>Xususiyatlar:</strong> {course.xususiyatlar.join(", ")}</p>
            <div className="bg-blue-600 bottom-0 w-full left-0 text-white text-center rounded-bl-lg rounded-br-lg absolute py-2">
              Temurbek School
            </div>
          </div>
        ))}
      </div>

      {/* Side Drawer */}
      {searchOption && (
        <div className="bg-white pt-7 rounded-sm pl-4 pr-4 z-50 overflow-y-auto py-5 right-0 top-0 w-full max-w-md h-screen fixed shadow-2xl border-l border-blue-200 transition-all">
          <Button variant="contained" color="warning" onClick={() => setSearchOption(null)}>
            X
          </Button>
          <h2 className="text-2xl text-blue-900 font-semibold mt-4 mb-3">{searchOption.tarif}</h2>
          <p className="text-lg font-medium mb-2 text-blue-700">{searchOption.darajalar.join(", ")}</p>
          <p className="mb-3 text-sm text-gray-700">{searchOption.xususiyatlar.join(", ")}</p>
          <p className="text-gray-600 mb-3">
            <strong>Kurs davomiyligi:</strong> {searchOption.davomiyligi}
          </p>

          {searchId ? (
            <div className="courses text-black grid grid-cols-2 gap-4">
              {searchId.map((item) => (
                <Button
                  onClick={() => setCourse(item)}
                  className="w-full hover:scale-105 transition-transform duration-300"
                  color="primary"
                  variant="contained"
                  key={item.level}
                >
                  {item.level}
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Ma'lumot topilmadi</p>
          )}

          {course && (
            <div className="bg-white pt-7 rounded-sm pl-4 pr-4 mt-6">
              <h2 className="text-2xl text-blue-900 font-semibold mb-3">{course.level.toUpperCase()}</h2>
              <p className="text-lg font-medium mb-2 text-blue-700">{course.target}</p>
              <p className="mb-3 text-sm text-gray-700">{course.description}</p>
              <p className="text-gray-600 mb-3">
                <strong>Kurs davomiyligi:</strong> {course.course_length}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Narxi:</strong> {course.price.toLocaleString()} so'm
              </p>
              {course.certificate.split("/").map((cert, index) => (
                <p key={index} className="font-semibold rounded-md text-white bg-blue-600 p-2 my-2">
                  📜 {cert}
                </p>
              ))}
              <a href="/contact">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLeaveRequest}
                  className="mt-4"
                >
                  Aloqaga Chiqish
                </Button>
              </a>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CourseComponent;
