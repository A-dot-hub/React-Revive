import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

export default function PackageCard({ pkg }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border border-black rounded-lg p-6 hover:bg-black hover:text-white transition-colors flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
        <p className="text-2xl font-bold mb-1">{pkg.price}</p>
        <p className="text-sm opacity-80 mb-4">{pkg.duration}</p>
      </div>
      <Button onClick={() => setIsModalOpen(true)} className="bg-black text-black hover:bg-gray-200 w-full">Book Now</Button>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-black">Booking Inquiry: {pkg.title}</h2>
        <form className="flex flex-col gap-4 text-black">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded"></textarea>
          <Button>Send Inquiry</Button>
        </form>
      </Modal>
    </div>
  );
}
