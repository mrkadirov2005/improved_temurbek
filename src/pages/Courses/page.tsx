"use client";
import React, { useState } from "react";
import coursesData from "./ctg.json";
import subCourses from "./courses.json";
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
    <section className="flex flex-col w-full items-start justify-start   min-h-screen p-5">
      <h1 className="text-3xl font-bold text-blue-800 mb-5">Kurslar</h1>

      <div className="mb-5">
        <select
          onChange={filterCourses}
          className="w-60 p-2 border border-blue-300 bg-white text-blue-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="border border-blue-200 relative rounded-lg p-5 pb-0 bg-blue-50  text-blue-900 shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{course.nomi}</h2>
            <p className="mb-1"><strong>Ta'rif:</strong> {course.tarif}</p>
            <p className="mb-1"><strong>Darajalar:</strong> {course.darajalar.join(", ")}</p>
            <p className="mb-1"><strong>Davomiyligi:</strong> {course.davomiyligi}</p>
            <p className="mb-1"><strong>Xususiyatlar:</strong> {course.xususiyatlar.join(", ")}</p>
            <div className="bg-blue-600 bottom-0 w-full left-0 text-white text-center rounded-bl-lg rounded-br-lg absolute">Temurbek School</div>
          </div>
        ))}
      </div>

      {searchOption && (
        <div className="bg-white pt-7 rounded-sm pl-4 pr-4 z-50 overflow-y-auto right-0 top-0 w-full max-w-md h-screen fixed shadow-lg border-l border-blue-200">
          <Button variant="contained" color="warning" onClick={() => setSearchOption(null)}>
            X
          </Button>
          <h2 className="text-2xl text-blue-900 font-semibold mb-3">{searchOption.tarif}</h2>
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
                  className="w-full"
                  color="primary"
                  variant="contained"
                  key={item.level}
                >
                  {item.level}
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Malumot topilmadi</p>
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
                <p key={index} className="font-semibold rounded-md text-white bg-blue-600 p-2 m-2">
                  {cert}
                </p>
              ))}
              <a href="/contact">
                <Button variant="contained" color="primary" onClick={handleLeaveRequest}>
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
