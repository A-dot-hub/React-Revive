import DestinationCard from './DestinationCard';

export default function DestinationSection({ destinations }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {destinations.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}
