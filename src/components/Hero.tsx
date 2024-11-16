import HeroSummary from "./hero/HeroSummary";
import MyCard from "./hero/MyCard";

function Hero() {
  return (
    <div className="min-h-screen">
      <div className="px-4 md:px-16 pt-16">
        <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <MyCard />

          <div className="md:col-span-2 md:pt-8 pb-16">
            <HeroSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
