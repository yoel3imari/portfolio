import { ChartScatter, Globe, Smartphone } from "lucide-react";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import ContactButton from "../ContactButton";

function HeroServices() {
  const services = [
    {
      title: "Web Developer",
      icon: <Globe className="size-8" />,
      details: [
        "Frontend & Backend",
        "Database Modeling",
        "Ecommerce Stores",
        "CRM Dashboards",
        "CMS Applications",
        "SEO & Performance in Mind",
      ],
    },
    {
      title: "Mobile Developer",
      icon: <Smartphone className="size-8" />,
      details: ["Cross-Platforme Developement", "Performance in Mind"],
    },
    {
      title: "Data Science",
      icon: <ChartScatter className="size-8" />,
      details: [
        "Machine Learning",
        "Deep Learning",
        "Image Processing",
        "Recommendation Systems",
        "Chatbots & Virtual Assistants",
        "Phenomena Prediction",
      ],
    },
  ];

  return (
    <div className="w-full pt-4">
      <div className="mb-6">
        <h2 className="text-5xl font-bold flex flex-col">
          <span>Services</span>
          <span className="text-gray-400 dark:text-secondary">
            & Expertises
          </span>
        </h2>
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <Card key={s.title} className="h-full flex flex-col">
              <CardHeader>
                <div className="text-center flex items-center flex-col">
                  <span className="mb-4">{s.icon} </span>
                  <h3 className="w-full text-lg">{s.title}</h3>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroServices;
