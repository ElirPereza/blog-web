import { BookOpen, Shield, TrendingUp, Users } from "lucide-react";
import EthicsTemplate from "./template/topichiglight/template4";
import BusinessStrategyTemplate from "./template/topichiglight/template3";
import HumanResourcesTemplate from "./template/topichiglight/template2";
import FundamentalsTemplate from "./template/topichiglight/template1";

export const CardTextCenterData = [
  {
    icon: BookOpen,
    title: "Fundamentos de Administración",
    content: "Explora los conceptos básicos y la importancia de la administración en las organizaciones modernas.",
    fulltext: <FundamentalsTemplate />
  },
  {
    icon: Users,
    title: "Gestión de Recursos Humanos",
    content: "Aprende estrategias efectivas para liderar y desarrollar el talento en tu organización.",
    fulltext: <HumanResourcesTemplate />
  },
  {
    icon: TrendingUp,
    title: "Estrategia Empresarial",
    content: "Descubre cómo formular e implementar estrategias para el éxito a largo plazo.",
    fulltext: <BusinessStrategyTemplate />
  },
  {
    icon: Shield,
    title: "Ética en los Negocios",
    content: "Entiende la importancia de la ética en la toma de decisiones y la cultura organizacional.",
    fulltext: <EthicsTemplate />
  }
];