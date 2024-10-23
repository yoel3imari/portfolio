import Image from "next/image";
import Header from "./Header";
import { ChartScatter, Globe, Smartphone } from "lucide-react";

function Hero() {

  return (
    <div className="h-screen">
      <Header />
      <div className="px-16 mt-16">
        <div className="min-h-screen grid grid-cols-3 gap-16 px-16">
          <div className="sticky top-8 h-fit">
            <div className="bg-primary w-full flex flex-col px-4 py-8 items-center rounded-t-3xl">
              <Image
                src="/profile_picture.png"
                width={280}
                height={720}
                alt="yoel3imari profile picture"
                className="border-4 w-full border-primary-foreground rounded-t-3xl mb-4"
              />
              <div className="w-full flex flex-col">
                <span className="text-3xl font-bold text-primary-foreground text-start">
                  Youssef El AIMARI
                </span>
                <p>
                  Full-Stack developer and Data Science student at{" "}
                  <a
                    className="underline"
                    href="https://www.uiz.ac.ma/"
                    target="_blank"
                  >
                    Ibn Zohr University, Agadir Morocco
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="w-full pt-4">
              <div className="mb-6">
                <h2 className="text-5xl font-bold flex flex-col">
                  <span className="">Full-Stack Developer</span>
                  <span className="text-gray-400 dark:text-secondary">
                    & Data Science Student
                  </span>
                </h2>
              </div>
              <p className="text-sm text-justify mb-4">
                Skilled in full-stack web and mobile development, with a
                background in data analytics and AI. Proficient in Vue3, Nuxt3,
                React, NextJS, Laravel, and mobile development with React Native and
                Kotlin. Experienced in machine learning, deep learning using Python. Built various platforms, including
                e-learning and e-commerce sites.
              </p>
            </div>

            <div className="w-full pt-4">
              <div className="mb-6">
                <h2 className="text-5xl font-bold flex flex-col">
                  <span>Services</span>
                  <span className="text-gray-400 dark:text-secondary">
                    & Expertises
                  </span>
                </h2>
              </div>
              <ul>
                <li className="mb-5 pe-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span>
                      <Globe size={24} />
                    </span>
                    <h3 className="text-lg font-semibold">
                      Full-Stack Developer
                    </h3>
                  </div>
                  {/* <p className="text-sm font-light text-justify">
                  I offer Full-Stack Development services using to build
                  dynamic, scalable web applications. My expertise covers both
                  frontend and backend development, with a focus on creating
                  responsive, efficient, and user-friendly platforms.
                </p> */}
                </li>
                <li className="mb-5 pe-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span>
                      <Smartphone size={24} />
                    </span>
                    <h3 className="text-lg font-semibold">Mobile Developer</h3>
                  </div>
                  {/* <p className="text-sm font-light text-justify">
                  enthusiastic mobile developer driven with the evolution of
                  native development and the integration of web technologies in
                  development of mobile apps, I specialize in React Native for
                  cross-platform apps and Kotlin for Android. I create seamless,
                  high-performance mobile experiences tailored to your business
                  needs.
                </p> */}
                </li>
                <li className="mb-5 pe-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span>
                      <ChartScatter size={24} />
                    </span>
                    <h3 className="text-lg font-semibold">
                      Data Analytics and AI
                    </h3>
                  </div>
                  {/* <p className="text-sm font-light text-justify">
                  I provide Data Analytics and AI services, specializing in
                  machine learning (scikit-learn) and deep learning
                  (TensorFlow). My work includes data preprocessing, time series
                  analysis, and visualizations. I help businesses extract
                  insights and build predictive models for smarter
                  decision-making.
                </p> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
