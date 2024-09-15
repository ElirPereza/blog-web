import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";


export type CardTextType = {
  title: string;
  description: string;
  content: string;
  fulltext: JSX.Element;  // Cambiado de string a JSX.Element
  image: string;
};

const CardText = (props: CardTextType) => {
  const { title, description, image, content, fulltext } = props;
  return (
    <Card>
      <Image
        src={image}
        alt="Análisis del Entorno"
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Dialog >
          <DialogTrigger asChild>
            <Button>Leer Más</Button>
          </DialogTrigger>
          <DialogContent className="bg-white max-w-3xl max-h-[60vh] overflow-y-auto p-4">
            <DialogHeader>
              <DialogDescription>
                {fulltext} 
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default CardText;
