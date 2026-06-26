import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Uses useState for mobile menu toggling.
  // Conditional rendering for mobile menu items.
  return (
    <nav className="p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TravelExplore</h1>
        
        <div className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#packages" className="text-gray-700 hover:text-blue-600">Packages</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 p-4 bg-white border-t">
          <a href="#" className="block py-2 text-gray-700">Home</a>
          <a href="#packages" className="block py-2 text-gray-700">Packages</a>
          <a href="#contact" className="block py-2 text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
}
