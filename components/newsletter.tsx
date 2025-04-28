"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para suscribir al usuario
    toast({
      title: "¡Gracias por suscribirte!",
      description: "Pronto recibirás nuestras novedades.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Suscríbete a Nuestro Newsletter
          </h2>
          <p className="text-blue-100 mb-8">
            Recibe actualizaciones sobre nuevos productos, eventos y ofertas
            especiales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-blue-400 text-white placeholder:text-blue-200"
            />
            <Button
              type="submit"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Suscribirse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
