import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black w-full border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">😊</span>
            <span className="text-xl font-semibold">EduVision</span>
          </div>
        </div>

        {/* Learn more about us */}
        <div>
          <h3 className="font-semibold mb-2">Learn more about us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Media inquiries</a></li>
            <li><a href="#" className="hover:underline">Subscriptions</a></li>
          </ul>
        </div>

        {/* Get assistance */}
        <div>
          <h3 className="font-semibold mb-2">Get assistance</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Customer support</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Connect with us */}
        <div>
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Discord</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4 text-sm text-center flex flex-col md:flex-row justify-between items-center px-4 max-w-6xl mx-auto">
        <span className="font-bold">EduV</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
