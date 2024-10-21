import Image from "next/image";
import Header from "./Header";

function Hero() {
  return (
    <div className="h-screen">
      <Header />
      <div className="px-16">
      <div className="mt-12 mb-12 flex items-center justify-center w-full">
        <h1 className="w-fit text-6xl font-bold after:place-content-center after:block after:w-32 after:h-[3px] after:bg-primary relative after:absolute after:-bottom-4" id="mynameis">
          Youssef Elaimari
        </h1>
      </div>
      <div className="flex items-start justify-evenly gap-2">

        <div className="w-full pt-16">
          <h3>Serices</h3>
          <ul>
            <li>
              {/* icon + title*/}
               {/* desc */}
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        
        <div id="mypicture" className="relative w-full">
          <Image
            src="/profile_picture.png"
            width={360}
            height={720}
            alt="yoel3imari profile picture"
            className="border-4 grayscale rounded-full"
          />
        </div>

        <div className="w-full pt-16">
          <h3>Full-Stack Developer & Data Science Student</h3>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Hero;
