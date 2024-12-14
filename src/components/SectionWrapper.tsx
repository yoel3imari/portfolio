import React from "react";

const SectionWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <div className="my-8" {...rest}>
      {children}
    </div>
  );
};

export default SectionWrapper;
