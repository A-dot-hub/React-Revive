export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${className}`}
    >
      {children}
    </button>
  );
}
