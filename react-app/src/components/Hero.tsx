import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-20 gap-10">
      <div className="text-center lg:text-start space-y-6">

        <Badge variant="outline" className="text-sm py-2">
          <span className="mr-2 text-primary">
            <Badge variant="live">Sede em</Badge>
          </span>
          Novo Hamburgo
        </Badge>

        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Nós somos
          </h1>{" "}
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#20492c] to-primary text-transparent bg-clip-text">
              Prime
            </span>{" "}
          </h2>
          <h3 className="text-4xl">
            Acessoria {" "}
            <span className="inline bg-clip-text">
              Inteligente
            </span>{" "}
          </h3>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Segurança e Saúde no Trabalho: {" "}
            <span className="inline bg-clip-text">
              Protegendo sua Empresa e seus Colaboradores
            </span>{" "} 
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="#about" className="w-full md:w-1/3">
            <Button className="w-full md:w-1/3">Sobre Nós</Button>
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
