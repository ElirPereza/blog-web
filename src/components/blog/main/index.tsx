import React from "react";
import { Button } from "@/components/ui/button";
import Topics from "./topics";
import { DataCardInfo } from "./arrays/CardText.info";
import CardText, { CardTextType } from "./CardText";
import Principal from "./principal";

const Index = () => {
  return (
    <main className="flex-grow">
      <Principal />
      <Topics />
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Artículos Recientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DataCardInfo.map((x: CardTextType) => (
              <CardText {...x} key={x.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
