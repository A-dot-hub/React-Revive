export default function ServiceCard({ title, desc }) {
  return (
    <div className="border border-black p-8 rounded-lg text-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
      <h3 className="font-bold text-xl mb-4 text-black">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
