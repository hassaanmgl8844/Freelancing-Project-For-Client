function Categories() {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4 text-center">
        <h3 className="text-xl font-bold mb-2">Past Auctions</h3>
        <img src="/gojo.jpg" alt="Rose" />
      </div>
      <div className="bg-gray-200 p-4 text-center">
        <h3 className="text-xl font-bold mb-2">Painting</h3>
        <img src="/gojo.jpg" alt="Painting" />
      </div>
      <div className="bg-gray-200 p-4 text-center">
        <h3 className="text-xl font-bold mb-2">Photography</h3>
        <img src="/gojo.jpg" alt="Photography" />
      </div>
      <div className="bg-gray-200 p-4 text-center">
        <h3 className="text-xl font-bold mb-2">Sculpture</h3>
        <img src="/gojo.jpg" alt="Sculpture" />
      </div>
    </section>
  );
}

export default Categories;
