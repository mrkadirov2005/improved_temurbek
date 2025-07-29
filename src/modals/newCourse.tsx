import React from "react";

interface NewCourseModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  courseTitle: string;
  description: string;
  link?: string;
}

const NewCourseModal: React.FC<NewCourseModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
  description,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed min-w-[100vw]  inset-0  bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-gradient-to-b from-blue-500 to-white rounded-2xl shadow-xl min-w-[100vw] min-h-[200px] max-w-[800px] w-full p-6 relative animate-fade-in">
        <button
          className="absolute  px-10 py-2 text-xl text-center flex items-center justify-center text-white bg-red-500 top-2 right-2 rounded-md "
          onClick={()=>onClose(false)}
        >
                x
        </button>
<br></br>

        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          📣 {courseTitle}
        </h2>

        <p className="text-gray-700 mb-5">{description}</p>

        {link && (
          <a onClick={()=>onClose(false)}
            href={link}
            className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Batafsil Ko'rish
          </a>
        )}
      </div>
    </div>
  );
};

export default NewCourseModal;
