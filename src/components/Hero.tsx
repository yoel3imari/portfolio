import HeroSummary from "./hero/HeroSummary";
import HeroServices from "./hero/HeroServices";
import MyCard from "./hero/MyCard";
import HeroStack from "./hero/HeroStack";


function Hero() {


  return (
    <div className="h-screen">
      <div className="px-4 md:px-16 pt-16">
        <div className="md:max-h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <MyCard />

          <div className="md:col-span-2 md:pt-8 pb-16 overflow-auto md:hide_scrollbar scroll-smooth">
            <HeroSummary />

            <HeroServices />

            {/* Main Stacks & technologies */}

            <HeroStack />

            {/* Programing Language I'm familiar with or currently learning  */}

            {/* Latest Projects */}

            {/* Latest Blogs */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
