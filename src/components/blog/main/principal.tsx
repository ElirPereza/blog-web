import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import IntroductionTemplate from "./arrays/template/introduccion";

const Principal = () => {
  return (
    <section
      className="flex  py-20 bg-cover h-[600px] items-center  "
      style={{
        backgroundImage: "url('title.gif')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center text-center justify-center brightness-100 filter	">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transformando Organizaciones desde el Interior
            </h1>
            <p className="text-2xl mb-6 fontse text-gray-700">
              Descubre las claves de la administración moderna y lleva tu
              organización al siguiente nivel.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Introduccion</Button>
              </DialogTrigger>
              <DialogContent className="bg-white max-w-3xl max-h-[60vh] overflow-y-auto p-4">
                <DialogHeader>
                  <DialogDescription>
                    <IntroductionTemplate />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
