import Hero from "@/components/Hero";
import MovieRow from "@/components/MovieRow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trending, action, comedy, series } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen text-white">
      <Navbar />
      <Hero movie={trending[0]} />
      <div className="relative z-10 -mt-32 pb-20">
        <MovieRow title="🔥 پرطرفدار این هفته" movies={trending} />
        <MovieRow title="🎬 اکشن و هیجان" movies={action} />
        <MovieRow title="😂 کمدی و درام" movies={comedy} />
        <MovieRow title="📺 سریال‌های جدید" movies={series} />
      </div>
      <Footer />
    </main>
  );
}
