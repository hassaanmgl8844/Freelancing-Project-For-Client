function BlogPosts() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          <img src="/gojo.jpg" alt="Self Portrait with Daughter Julie" />
          <h3 className="text-xl font-bold mb-2">Self Portrait with Daughter Julie</h3>
          <p>By Erin Jones, 18th-century selfie...</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">Read More</button>
        </div>
        <div className="bg-gray-200 p-4">
          <img src="/gojo.jpg" alt="Liberty Leading the People" />
          <h3 className="text-xl font-bold mb-2">Liberty Leading the People</h3>
          <p>By Erin Jones, depicting Liberty in human form...</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">Read More</button>
        </div>
        <div className="bg-gray-200 p-4">
          <img src="/gojo.jpg" alt="Crowns" />
          <h3 className="text-xl font-bold mb-2">Crowns</h3>
          <p>By Judy Furnish, ornate jeweled crown...</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
