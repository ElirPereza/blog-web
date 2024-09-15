import React from 'react'
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
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center text-center justify-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Transformando Organizaciones desde el Interior</h1>
                <p className="text-xl mb-6">Descubre las claves de la administración moderna y lleva tu organización al siguiente nivel.</p>
                <Button size="lg">Explorar Artículos</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Temas Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <BookOpen className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Fundamentos de Administración</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Explora los conceptos básicos y la importancia de la administración en las organizaciones modernas.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Gestión de Recursos Humanos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Aprende estrategias efectivas para liderar y desarrollar el talento en tu organización.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Estrategia Empresarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Descubre cómo formular e implementar estrategias para el éxito a largo plazo.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>Ética en los Negocios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Entiende la importancia de la ética en la toma de decisiones y la cultura organizacional.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Artículos Recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <Image 
                  src="/placeholder.svg?height=200&width=400" 
                  alt="Análisis del Entorno" 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Análisis del Entorno Organizacional</CardTitle>
                  <CardDescription>Publicado el 25 de mayo, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Aprende a utilizar herramientas como FODA y PESTEL para analizar el entorno de tu organización y tomar decisiones informadas.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Leer Más</Button>
                </CardFooter>
              </Card>
              <Card>
                <Image 
                  src="/placeholder.svg?height=200&width=400" 
                  alt="Proceso Administrativo" 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>El Proceso Administrativo</CardTitle>
                  <CardDescription>Publicado el 22 de mayo, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Descubre las cuatro etapas clave del proceso administrativo y cómo implementarlas efectivamente en tu organización.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Leer Más</Button>
                </CardFooter>
              </Card>
              <Card>
                <Image 
                  src="/placeholder.svg?height=200&width=400" 
                  alt="Áreas Funcionales" 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Áreas Funcionales de la Organización</CardTitle>
                  <CardDescription>Publicado el 18 de mayo, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Explora las principales áreas funcionales de una organización y cómo contribuyen al logro de los objetivos empresariales.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Leer Más</Button>
                </CardFooter>
              </Card>
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
  )
}

export default Index