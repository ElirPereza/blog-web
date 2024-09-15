import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Shield, TrendingUp, Users } from "lucide-react";

const Topics = () => {
  return (
    <section className="py-12 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Temas Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card>
          <CardHeader>
            <BookOpen className="w-10 h-10 mb-2 text-primary" />
            <CardTitle>Fundamentos de Administración</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Explora los conceptos básicos y la importancia de la
              administración en las organizaciones modernas.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="w-10 h-10 mb-2 text-primary" />
            <CardTitle>Gestión de Recursos Humanos</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Aprende estrategias efectivas para liderar y desarrollar el
              talento en tu organización.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUp className="w-10 h-10 mb-2 text-primary" />
            <CardTitle>Estrategia Empresarial</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Descubre cómo formular e implementar estrategias para el éxito
              a largo plazo.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 mb-2 text-primary" />
            <CardTitle>Ética en los Negocios</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Entiende la importancia de la ética en la toma de decisiones y
              la cultura organizacional.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Topics