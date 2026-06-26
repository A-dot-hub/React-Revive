import DestinationCard from './DestinationCard';

export default function DestinationSection({ destinations }) {
  return (
    <div className="container mx-auto p-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-black border-l-4 border-black pl-4">Popular Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}
