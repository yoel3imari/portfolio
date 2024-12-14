import { DownloadIcon, EyeIcon } from "lucide-react";
import { Button } from "../ui/button";
import HeroTitle from "./HeroTitle";
import { FaGithub, FaHackerrank, FaLinkedinIn } from "react-icons/fa6";
import { FaKaggle } from "react-icons/fa";
import LeetcodeIcon from "../icons/LeetcodeIcon";
import SectionWrapper from "../SectionWrapper";

const HeroSummary = () => {
  return (
    <SectionWrapper className="w-full pt-4">
      <h1 className="text-3xl font-bold">
        Hi, I am <span className="text-primary">Youssef El Aimari</span>
      </h1>
      <HeroTitle
        title="Full-Stack Developer"
        subtitle="Data Science Student"
        center
      />
      <p className="text-justify">
        Hi, I am Youssef from Morocc, Currently following a Master&#39s degree in
        Data Science. I am a skilled full-stack developper proficient in Web
        Development, with a background in mobile development using Kotlin and
        React Native.
      </p>
      <div className="mt-4 flex items-center gap-4 font-semibold">
        <Button className="bg-purple-700 text-white hover:bg-purple-900">
          <a
            href="./cv_elaimari_youssef.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center"
          >
            <span>
              <EyeIcon className="size-16" />
            </span>
            <span>Read CV</span>
          </a>
        </Button>
        <Button>
          <a
            href="./cv_elaimari_youssef.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center"
          >
            <span>
              <DownloadIcon className="size-16" />
            </span>
            <span>Download CV</span>
          </a>
        </Button>
      </div>
      <div className="pt-8 flex items-center justify-between gap-8 w-min">
        <span>
          <a
            href="https://github.com/yoel3imari"
            className=" text-muted-foreground"
            target="_blank"
          >
            <FaGithub size={32} />
          </a>
        </span>
        <span>
          <a
            href="https://linkedin.com/in/yoel3imari"
            className=" text-muted-foreground"
            target="_blank"
          >
            <FaLinkedinIn size={32} />
          </a>
        </span>
        <span>
          <a
            href="https://kaggle.com/elaimariyoussef"
            className=" text-muted-foreground"
            target="_blank"
          >
            <FaKaggle size={32} />
          </a>
        </span>
        <span>
          <a
            href="https://hackerrank.com/youssef_elaimari"
            className=" text-muted-foreground"
            target="_blank"
          >
            <FaHackerrank size={32} />
          </a>
        </span>
        <span>
          <a
            href="https://leetcode.com/yoel3imari"
            className="text-muted-foreground"
            target="_blank"
          >
            <LeetcodeIcon className="text-muted-foreground" />
          </a>
        </span>
      </div>
    </SectionWrapper>
  );
};

export default HeroSummary;
