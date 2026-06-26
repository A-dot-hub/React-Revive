import Button from './Button';

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white p-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h2>
      <p className="mb-8">Explore the most beautiful places in the world with us.</p>
      <Button>Book Now</Button>
    </div>
  );
}
