import Hero from '../components/Hero';
import Categories from '../components/Categories';
import HolidayBanner from '../components/HolidayBanner';
import BlogPosts from '../components/BlogPosts';
import LovingDay from '../components/LovingDay';
import Artists from '../components/Artists';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <HolidayBanner />
      <BlogPosts />
      <LovingDay />
      <Artists />
      <Newsletter />
    </main>
  );
}

export default Home;
