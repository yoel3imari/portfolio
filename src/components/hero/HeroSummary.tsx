import HeroTitle from "./HeroTitle";

const HeroSummary = () => {
  return (
    <div className="w-full pt-4">
      <HeroTitle title="Full-Stack Developer" subtitle="Data Science Student" />
      <p className="text-sm text-justify">
        Skilled in full-stack web and mobile development, with a background in
        data analytics and AI. Proficient in Vue3, Nuxt3, React, NextJS,
        Laravel, and mobile development with React Native and Kotlin.
        Experienced in machine learning, deep learning using Python. Built
        various platforms, including e-learning and e-commerce sites.
      </p>
    </div>
  );
};

export default HeroSummary;
