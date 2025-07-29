import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 text-blue-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Sahifa topilmadi</h2>
        <p className="mb-6 text-blue-700">
          Uzr, siz izlayotgan sahifa mavjud emas yoki ko‘chirilgan.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:bg-blue-800 transition"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
