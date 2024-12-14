import React from "react";
import HeroTitle from "../hero/HeroTitle";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { languages } from "@/lib/data";
import SectionWrapper from "../SectionWrapper";

function Languages() {
  return (
    <SectionWrapper className="">
      <HeroTitle title="Programming Languages" />
      <div className="flex items-center justify-center">
        <ScrollArea className="w-full md:w-[720px] lg:w-[1200px] whitespace-nowrap rounded-md">
          <div className="flex w-full space-x-12 p-4 justify-center">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center justify-center gap-4"
              >
                <span>
                  <lang.icon className="size-16" />{" "}
                </span>
                <span className="text-xl font-bold">{lang.name} </span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </SectionWrapper>
  );
}

export default Languages;
