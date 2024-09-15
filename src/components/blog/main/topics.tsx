import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Shield, TrendingUp, Users } from "lucide-react";
import { CardTextCenterData } from "./arrays/CardTextCenter.data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Topics = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Temas Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CardTextCenterData.map((x: any, index: number) => (
            <Card key={index}>
              <CardHeader className="flex items-center gap-2">
                <x.icon className="w-10 h-10 text-primary" />
                <CardTitle>{x.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col">
                <p className="text-center">{x.content}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="font-bold pt-4">
                      Leer Más
                    </Button>
                  </DialogTrigger>
                  <DialogContent  className="bg-white max-w-3xl max-h-[60vh] overflow-y-auto p-4">
                    <DialogHeader>
                      <DialogDescription className="">{x.fulltext}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
