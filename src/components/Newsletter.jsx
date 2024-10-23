
function Newsletter() {
  return (
    <section className="bg-gray-200 p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-4">Subscribe to our newsletter for updates on exhibitions, news, programs, and special offers.</p>
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="px-4 py-2 rounded border border-gray-400 mb-4" 
      />
      <button className="bg-red-500 text-white px-4 py-2 rounded">Join</button>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
        <a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="/path/to/pinterest-icon.png" alt="Pinterest" /></a>
        <a href="#"><img src="/path/to/youtube-icon.png" alt="YouTube" /></a>
      </div>
    </section>
  );
}

export default Newsletter;
