import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-24 sm:py-32 px-4">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Entre em <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Contato</span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Tem dúvidas ou precisa de uma consultoria? Fale conosco!
        </p>
      </div>

      {/* Informações de Contato */}
      <Card className="shadow-lg max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Informações da Empresa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <p>Novo Hamburgo, RS - Brasil</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <p>(51) 99911-9011</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <p> diretoria.primeassessoria@gmail.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://wa.me/5551999119011" target="_blank" className="text-primary flex items-center gap-2">
              <Phone size={20} /> WhatsApp
            </a>
            {/* <a href="https://www.linkedin.com/" target="_blank" className="text-primary flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a> */}
            <a href="https://www.instagram.com/sst.prime" target="_blank" className="text-primary flex items-center gap-2">
              <Instagram size={20} /> Instagram
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
