import Button from './Button';

export default function Hero() {
  return (
    <div className="bg-black text-white p-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h2>
      <p className="mb-8 text-gray-300">Explore the most beautiful places in the world with us.</p>
      <Button className="bg-black text-black hover:bg-gray-800">Book Now</Button>
    </div>
  );
}
