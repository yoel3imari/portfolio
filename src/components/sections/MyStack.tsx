import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import clsx from "clsx";
import { tabs } from "@/lib/data";
import HeroTitle from "../hero/HeroTitle";
import SectionWrapper from "../SectionWrapper";

function MyStack() {
  return (
    <SectionWrapper className="w-full pt-4">
      <HeroTitle title="Tools" subtitle="Technologies" />
      <Tabs defaultValue={tabs[0].name}>
        <div className="flex items-center w-full justify-center overflow-x-auto hide_scrollbar">
          <TabsList
            className={clsx(
              "flex items-center justify-between overflow-x-auto hide_scrollbar max-w-[720px]"
            )}
          >
            {tabs.map((t) => (
              <TabsTrigger className="" value={t.name} key={t.name}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {tabs.map((t) => (
          <TabsContent className="min-h-[300px]" value={t.name} key={t.name}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {t.items.map((i) => (
                <div
                  key={i.name}
                  className="p-4 flex flex-col items-center justify-center"
                >
                  <i.icon className="size-10" />
                  <span className="text-xl">{i.name} </span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}

export default MyStack;
