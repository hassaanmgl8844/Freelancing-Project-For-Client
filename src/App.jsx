// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';
// import Hero from './components/Hero';
// import Categories from './components/Categories';
// import HolidayBanner from './components/HolidayBanner';
// import BlogPosts from './components/BlogPosts';
// import LovingDay from './components/LovingDay';
// import Artists from './components/Artists';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="bg-red-500 text-white p-4">
//           <div className="container mx-auto flex justify-between items-center">
//             <h1 className="text-xl font-bold">VenoArt</h1>
//             <nav>
//               <ul className="flex space-x-4">
//                 <li><a href="/" className="hover:underline">Home</a></li>
//                 <li><a href="/" className="hover:underline">Blog</a></li>
//                 <li><a href="#" className="hover:underline">Auction</a></li>
//                 <li><a href="#" className="hover:underline">Buy Now</a></li>
//                 <li><a href="#" className="hover:underline">Artists</a></li>
//                 <li><a href="#" className="hover:underline">Blogs</a></li>
//                 <li><a href="#" className="hover:underline">Services</a></li>
//                 <li><a href="#" className="hover:underline">About</a></li>
//               </ul>
//             </nav>
//           </div>
//         </header>
//         <main>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/blog" component={BlogPosts} />
//             <Route path='/hero' component={Hero} />
//             <Route path='/categories' component={Categories} />
//             <Route path='/holidaybanner' component={HolidayBanner} />
//             <Route path='/lovingday' component={LovingDay} />
//             <Route path='/artists' component={Artists} />
//             <Route path='/newsletter' component={Newsletter} />
//           </Switch>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import Hero from './components/Hero';
import Categories from './components/Categories';
import HolidayBanner from './components/HolidayBanner';
import BlogPosts from './components/BlogPosts';
import LovingDay from './components/LovingDay';
import Artists from './components/Artists';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="bg-red-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">VenoArt</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Auction</a></li>
              <li><a href="#" className="hover:underline">Buy Now</a></li>
              <li><a href="#" className="hover:underline">Artists</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Categories />
        <HolidayBanner />
        <BlogPosts />
        <LovingDay />
        <Artists />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

