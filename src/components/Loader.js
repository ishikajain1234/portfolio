export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-white mb-6"></div>
        <img
          src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="programmer icon"
          className="h-40 w-40 mb-6 rounded-full border-4 border-white shadow-xl"
        />
        <h1 className="text-white text-4xl font-bold animate-pulse">Loading Portfolio...</h1>
        <p className="text-white text-xl mt-2 animate-fadeIn">Please wait while we prepare your experience.</p>
      </div>
    </div>
  );
}
