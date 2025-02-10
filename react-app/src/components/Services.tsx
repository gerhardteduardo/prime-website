import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "./ui/card";

import { 
  ShieldCheckIcon,
  BookOpenIcon,
  FileTextIcon,
  StethoscopeIcon,
  BadgeCheckIcon
} from "lucide-react"; 

interface ServicesProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: ServicesProps[] = [
  {
    icon: <ShieldCheckIcon size={48} className="text-primary" />,
    title: "Consultoria em Segurança do Trabalho",
    description:
      "Implementação de medidas preventivas para minimizar acidentes e garantir conformidade com as normas regulamentadoras (NRs).",
  },
  {
    icon: <BookOpenIcon size={48} className="text-primary" />,
    title: "Treinamentos e Capacitações",
    description:
      "Cursos presenciais e online sobre segurança e operação, incluindo CIPA, EPI, Empilhadeiras, Máquinas, Construção Civil e Trabalho em Altura.",
  },
  {
    icon: <FileTextIcon size={48} className="text-primary" />,
    title: "Laudos e Documentações",
    description:
      "Elaboração de PPRA, PCMSO, LTCAT, PPP e demais exigências legais.",
  },
  {
    icon: <StethoscopeIcon size={48} className="text-primary" />,
    title: "Gestão Ocupacional",
    description:
      "Exames médicos ocupacionais e monitoramento da saúde dos trabalhadores.",
  },
  {
    icon: <BadgeCheckIcon size={48} className="text-primary" />,
    title: "Licenciamento e Regularização",
    description:
      "Auxiliamos empresas na adequação às normas de segurança do trabalho e obtenção de certificações.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        O Que{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nós Fazemos{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Atendemos empresas de diversos setores com soluções personalizadas, incluindo:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map(({ icon, title, description }: ServicesProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
