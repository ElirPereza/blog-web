import React from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Shield, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <main className="flex-grow">
      <section className="flex py-20 bg-cover h-[600px] items-center" style={{ backgroundImage: "url('title.gif')" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center text-center justify-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transformando Organizaciones desde el Interior
              </h1>
              <p className="text-2xl mb-6 text-gray-600">
                Descubre las claves de la administración moderna y lleva tu
                organización al siguiente nivel.
              </p>
              <Button size="lg">Explorar Artículos</Button>
            </div>
          </div>
        </div>
      </section>

      <Topics />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Temas Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CardTextCenterData.map((x: any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <x.icon className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>{x.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{x.content}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link">Leer Más</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle>{x.title}</DialogTitle>
                        <DialogDescription>{x.content}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Artículos Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DataCardInfo.map((x: CardTextType) => (
              <CardText {...x} key={x.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
            <p className="mb-6">Recibe los últimos artículos y recursos sobre administración moderna directamente en tu bandeja de entrada.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
              <Button type="submit">Suscribirse</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
