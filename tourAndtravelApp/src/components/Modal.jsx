export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}
