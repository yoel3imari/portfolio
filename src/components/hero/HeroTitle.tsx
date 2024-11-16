import clsx from "clsx";
import React from "react";

function HeroTitle(props: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className="mt-12 mb-8">
      <h2
        className={clsx(
          "text-5xl font-bold",
          props.center ? "text-start" : "text-center"
        )}
      >
        <span className="mr-3">{props.title}</span>
        {props.subtitle && (
          <span className="text-gray-400 dark:text-secondary">
            {"& " + props.subtitle}{" "}
          </span>
        )}
      </h2>
    </div>
  );
}

export default HeroTitle;
