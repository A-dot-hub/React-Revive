import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", // Maldives Beach
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", // Mountains
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80", // Santorini
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80", // Road Trip
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80", // Travel Adventure
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", // Beach
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80", // City
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", // Lake & Mountains
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80", // Waterfall
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", // Forest
];
  
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="container mx-auto p-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-black border-l-4 border-black pl-4">Gallery</h2>
      <div className="relative flex items-center justify-center">
        <button onClick={prev} className="absolute left-2 p-2 bg-white rounded-full shadow border"><ChevronLeft /></button>
        
        <div className="w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-xl shadow-lg border">
          <img
            src={images[index]}
            alt={`Travel ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        <button onClick={next} className="absolute right-2 p-2 bg-white rounded-full shadow border"><ChevronRight /></button>
      </div>
    </div>
  );
}
