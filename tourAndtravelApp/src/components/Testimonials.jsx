import { useState } from 'react';

export default function Testimonials({ testimonials }) {
  const [index, setIndex] = useState(0);
  // Uses useState for simple slider/carousel toggling.
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="p-6 border rounded shadow-lg bg-gray-50">
        <p className="italic text-lg mb-2">"{testimonials[index].text}"</p>
        <p className="font-bold text-blue-600">- {testimonials[index].name}</p>
      </div>
      <button 
        onClick={() => setIndex((index + 1) % testimonials.length)} 
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next Testimonial
      </button>
    </div>
  );
}
