import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white border-b border-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">TravelExplore</h1>
        
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-black font-semibold">Home</a>
          <a href="#packages" className="text-gray-700 hover:text-black font-semibold">Packages</a>
          <a href="#contact" className="text-gray-700 hover:text-black font-semibold">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 p-4 bg-white border-t border-black">
          <a href="#" className="block py-2 text-gray-700">Home</a>
          <a href="#packages" className="block py-2 text-gray-700">Packages</a>
          <a href="#contact" className="block py-2 text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}
