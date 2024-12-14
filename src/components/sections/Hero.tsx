import HeroSummary from "../hero/HeroSummary";

function Hero() {
  return (
    <div className="">
      <div className="px-4 md:px-16 pt-16 h-full">
        <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-2 md:pt-8 pb-16 flex items-center  justify-center">
            <HeroSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
