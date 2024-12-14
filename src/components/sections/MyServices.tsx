import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import ContactButton from "../ContactButton";
import { services } from "@/lib/data";
import HeroTitle from "../hero/HeroTitle";

function MyServices() {
  return (
    <div className="w-full pt-4">
      <HeroTitle title="Services" subtitle="Expertises" />

      <div className="flex items-center justify-center h-full">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="flex items-center justify-center flex-1 w-full">
              <Card key={s.title} className="h-full max-w-80 flex flex-col w-full">
                <CardHeader>
                  <div className="text-center flex items-center flex-col">
                    <s.icon className="mb-4 size-8" />
                    <h3 className="w-full text-lg font-bold">{s.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="list-disc ps-4">
                    {s.details.map((dtl) => (
                      <li className="" key={s.title}>
                        <span>{dtl}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <ContactButton className="w-full" />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyServices;
