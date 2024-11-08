import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import clsx from "clsx";
import { tabs } from "@/lib/data";
import HeroTitle from "./HeroTitle";

function HeroStack() {
  return (
    <div className="w-full pt-4">
      <HeroTitle title="Tools" subtitle="Technologies" />
      <Tabs defaultValue={tabs[0].name}>
        <TabsList
          className={clsx(
            "grid overflow-x-auto hide_scrollbar grid-cols-6"
          )}
        >
          {tabs.map((t) => (
            <TabsTrigger className="" value={t.name} key={t.name}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((t) => (
          <TabsContent value={t.name} key={t.name}>
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
    </div>
  );
}

export default HeroStack;
