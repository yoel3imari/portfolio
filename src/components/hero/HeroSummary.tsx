import { PaperclipIcon } from "lucide-react";
import { Button } from "../ui/button";
import HeroTitle from "./HeroTitle";

const HeroSummary = () => {
  return (
    <div className="w-full pt-4">
      <HeroTitle
        title="Full-Stack Developer"
        subtitle="Data Science Student"
        center
      />
      <p className="text-sm text-justify">
        Skilled in full-stack web and mobile development, with a background in
        data analytics and AI. Proficient in Vue3, Nuxt3, React, NextJS,
        Laravel, and mobile development with React Native and Kotlin.
        Experienced in machine learning, deep learning using Python. Built
        various platforms, including e-learning and e-commerce sites.
      </p>
      <div className="mt-4">
        <Button>
          <span>
            <PaperclipIcon className="size-16"/>
          </span>
          <span>Download CV</span>
        </Button>
      </div>
      <div className="pt-8 flex items-center justify-between gap-4 w-96">
        <span>some stats</span>
        <span>some stats</span>
        <span>some stats</span>
      </div>
    </div>
  );
};

export default HeroSummary;
