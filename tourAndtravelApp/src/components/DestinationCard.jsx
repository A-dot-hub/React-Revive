import { MapPin, Star } from 'lucide-react';

export default function DestinationCard({ destination }) {
  return (
    <div className="border border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-black">{destination.name}</h3>
        <p className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin size={16} className="mr-1" /> {destination.location}
        </p>
        <p className="text-gray-800 text-sm mb-4">{destination.description}</p>
        <div className="flex justify-between items-center">
            <span className="font-bold text-black">{destination.price}</span>
            <span className="flex items-center text-black font-semibold">
                <Star size={16} className="text-yellow-500 mr-1 fill-yellow-500" /> {destination.reviews}
            </span>
        </div>
      </div>
    </div>
  );
}
