export default function ServiceCard({ title, desc }) {
  return (
    <div className="border p-4 rounded text-center">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
