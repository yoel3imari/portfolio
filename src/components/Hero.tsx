import Image from "next/image";
import Header from "./Header";
import HeroSummary from "./hero/HeroSummary";
import HeroServices from "./hero/HeroServices";

function Hero() {

  return (
    <div className="h-screen">
      
      <Header />

      <div className="px-4 md:px-16 pt-16">
        <div className="md:max-h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-3 gap-16">
           
          <div className="md:max-h-[calc(100vh-64px)] w-full">
            <div className=" w-full flex flex-col px-2 md:px-4 py-8 items-center justify-center">
              <Image
                src="/profile_picture.png"
                width={360}
                height={720}
                alt="yoel3imari profile picture"
                className="w-full rounded-3xl mb-4 border-4"
              />
              <div className="w-full flex flex-col">
                <p className="text-3xl font-bold text-primary-foreground">
                  Youssef El AIMARI
                </p>
                <p className="text-xl">
                  Full-Stack developer
                </p>
                <p className="text-xl">
                  Data Science Student
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between gap-4">
                <span>some stats</span>
                <span>some stats</span>
                <span>some stats</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:pt-8 pb-16 overflow-auto md:hide_scrollbar scroll-smooth">

            <HeroSummary />

            <HeroServices />

            {/* Main Stacks & technologies */}

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
