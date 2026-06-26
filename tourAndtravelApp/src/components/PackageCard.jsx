export default function PackageCard({ pkg }) {
  return (
    <div className="border rounded shadow-lg p-4">
      <h3 className="text-xl font-bold">{pkg.title}</h3>
      <p className="text-gray-600">{pkg.price}</p>
      <p className="text-gray-500">{pkg.duration}</p>
    </div>
  );
}
