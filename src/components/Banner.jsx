const Banner = () => {
  return (
    <div className="relative">
      <img
        src="gojo.jpg"
        alt="Auction"
        className="w-full h-80 object-cover md:h-screen"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-3xl md:text-5xl">Summer Late Auction</h1>
          <p className="mt-2">5% To charities by your choice!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
