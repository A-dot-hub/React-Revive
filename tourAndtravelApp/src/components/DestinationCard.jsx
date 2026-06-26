export default function DestinationCard({ destination }) {
  return (
    <div className="border rounded shadow-lg p-4">
      <img src={destination.image} alt={destination.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-xl font-bold">{destination.name}</h3>
      <p className="text-gray-600">{destination.description}</p>
    </div>
  );
}
