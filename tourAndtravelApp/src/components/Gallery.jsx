export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400',
  ];
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Travel" className="rounded shadow" />
        ))}
      </div>
    </div>
  );
}
