export default function Typingbox() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Type here..."
        className="w-full h-14 rounded-2xl border-2 border-blue-500 bg-slate-50 ps-5 pe-14 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      
      <button 
        type="button" 
        className="absolute inset-e-3 top-7 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full transition cursor-pointer"
      >
        <img className="w-5 h-5" src="./Icons/sending.png" alt="sending" />
      </button>
    </div>
  );
}
