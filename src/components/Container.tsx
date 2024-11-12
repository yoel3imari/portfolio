import React, { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16">{children}</div>
  );
}

export default Container;
