
function Artists() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Meet the Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-4 text-center">
          <h3 className="text-xl font-bold mb-2">Olga Merrill</h3>
          <p>USA</p>
          <img src="/gojo.jpg" alt="Olga Merrill" />
        </div>
        <div className="bg-gray-200 p-4 text-center">
          <h3 className="text-xl font-bold mb-2">Raliza Georgieva</h3>
          <p>Italy</p>
          <img src="/gojo.jpg" alt="Raliza Georgieva" />
        </div>
        <div className="bg-gray-200 p-4 text-center">
          <h3 className="text-xl font-bold mb-2">Enrique Flores</h3>
          <p>Mexico</p>
          <img src="/gojo.jpg" alt="Enrique Flores" />
        </div>
        <div className="bg-gray-200 p-4 text-center">
          <h3 className="text-xl font-bold mb-2">Wilhem Von Kalisz</h3>
          <p>Belgium</p>
          <img src="/gojo.jpg" alt="Wilhem Von Kalisz" />
        </div>
      </div>
    </section>
  );
}

export default Artists;
