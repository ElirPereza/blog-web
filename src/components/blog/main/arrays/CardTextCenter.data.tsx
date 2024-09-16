import { BookOpen, Building2, Shield, TrendingUp, Users } from "lucide-react";
import EthicsTemplate from "./template/topichiglight/template4";
import BusinessStrategyTemplate from "./template/topichiglight/template3";
import HumanResourcesTemplate from "./template/topichiglight/template2";
import FundamentalsTemplate from "./template/topichiglight/template1";
import BusinessConceptTemplate from "./template/topichiglight/template2";
import BusinessTypesTemplate from "./template/topichiglight/template2.5";

export const CardTextCenterData = [
  {
    icon: BookOpen,
    title: "Fundamentos de Administración",
    content: "Explora los conceptos básicos y la importancia de la administración en las organizaciones modernas.",
    fulltext: <FundamentalsTemplate />,
  },
  {
    icon: Users,
    title: "Concepto de Empresa",
    content: "Aprende el concepto básico de una empresa y las diferentes clasificaciones según su tipo.",
    fulltext: <BusinessConceptTemplate />, // Aquí integramos el template de concepto de empresa
  },
  {
    icon: Building2,
    title: "Tipos de Empresas",
    content: "Conoce las diferentes clases de empresas según su tamaño, actividad económica y forma jurídica.",
    fulltext: <BusinessTypesTemplate />, // Aquí integramos el template de tipos de empresas
  },
  {
    icon: TrendingUp,
    title: "Estrategia Empresarial",
    content: "Descubre cómo formular e implementar estrategias para el éxito a largo plazo.",
    fulltext: <BusinessStrategyTemplate />,
  },
];
