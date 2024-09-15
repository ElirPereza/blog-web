import FulltextTemplate from "./template/recent/fulltext.template";
import ProcessStagesTemplate from "./template/recent/fulltext.template2";
import FunctionalAreasTemplate from "./template/recent/fulltext.template3";

export const DataCardInfo = [
  {
    title: "Análisis del Entorno Organizacional",
    description: "Publicado el 9 de septiembre, 2024",
    content:
      "Aprende a utilizar herramientas como FODA y PESTEL para analizar el entorno de tu organización y tomar decisiones informadas.",
    fulltext: <FulltextTemplate/>, // Renderiza el componente aquí
    image: "/foda.jpg"
  } ,
  {
    title: "El Proceso Administrativo",
    description: "Publicado el 9 de septiembre, 2024",
    content:
      "Descubre las cuatro etapas clave del proceso administrativo y cómo implementarlas efectivamente en tu organización.",
    fulltext:<ProcessStagesTemplate/>,
    image:"/adminprocess.jpg"
    },
  {
    title: "Áreas Funcionales de la Organización",
    description: "Publicado el 9 de septiembre, 2024",
    content:
      "Explora las principales áreas funcionales de una organización y cómo contribuyen al logro de los objetivos empresariales.",
    fulltext:<FunctionalAreasTemplate/>,
    image:"/funcional.jpg"
    },
];
