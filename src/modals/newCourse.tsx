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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="
          bg-gradient-to-b from-blue-500 to-white 
          rounded-2xl shadow-xl 
          w-full max-w-lg min-h-[200px] 
          p-6 relative
          animate-fade-in
          overflow-auto
          max-h-[90vh]
        "
      >
        <button
          className="absolute top-3 right-3 px-4 py-2 text-xl text-white bg-red-500 rounded-md hover:bg-red-600 transition"
          onClick={() => onClose(false)}
          aria-label="Close modal"
        >
          ×
        </button>
        <br></br>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
          📣 {courseTitle}
        </h2>

        <p className="text-gray-700 mb-5">{description}</p>

        {link && (
          <a
            onClick={() => onClose(false)}
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
