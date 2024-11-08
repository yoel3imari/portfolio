import React from "react";

function HeroTitle(props: {title: string, subtitle: string}) {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-5xl font-bold flex flex-col">
        <span>{props.title}</span>
        <span className="text-gray-400 dark:text-secondary">& {props.subtitle} </span>
      </h2>
    </div>
  );
}

export default HeroTitle;
