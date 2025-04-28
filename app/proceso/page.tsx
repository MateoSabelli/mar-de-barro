"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const processSteps = [
  {
    title: "El Barro y la Materia Prima",
    description:
      "Seleccionamos cuidadosamente la arcilla local, asegurándonos de su calidad y pureza. Este es el primer paso crucial en nuestro proceso artesanal.",
    image: "/arcilla.jpeg",
  },
  {
    title: "El Proceso de Amasado",
    description:
      "El amasado es un proceso fundamental que elimina las burbujas de aire y prepara la arcilla para el modelado. Cada pieza comienza con este ritual ancestral.",
    image: "/moldes.jpeg",
  },
  {
    title: "El Torneado",
    description:
      "En el torno, damos vida a cada pieza. Es un momento de conexión entre el artesano y el material, donde la experiencia y la intuición se unen.",
    image: "/torneador.jpeg",
  },
  {
    title: "El Secado",
    description:
      "El secado natural es esencial. Cada pieza necesita su tiempo para perder la humedad gradualmente, asegurando su integridad estructural.",
    image: "/tazasDentroDeHorno.jpeg",
  },
  {
    title: "La Primera Cocción",
    description:
      "La primera cocción transforma la arcilla en cerámica. Controlamos cuidadosamente la temperatura para lograr la consistencia perfecta.",
    image: "/taza.jpeg",
  },
  {
    title: "El Esmaltado",
    description:
      "Aplicamos esmaltes naturales que hemos desarrollado a lo largo de los años. Cada pieza recibe su toque único de color y textura.",
    image: "/proceso/esmaltado.jpg",
  },
  {
    title: "La Segunda Cocción",
    description:
      "La cocción final es donde la magia sucede. Los esmaltes se funden y las piezas adquieren su brillo y durabilidad característicos.",
    image: "/proceso/coccion2.jpg",
  },
  {
    title: "El Toque Final",
    description:
      "Cada pieza es revisada minuciosamente, pulida y preparada con cuidado para su envío. El resultado es una obra única y duradera.",
    image: "/proceso/acabado.jpg",
  },
];

export default function ProcessPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + processSteps.length) % processSteps.length
    );
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
          Nuestro Proceso Artesanal
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={processSteps[currentStep].image}
              alt={processSteps[currentStep].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevStep}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextStep}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              {processSteps[currentStep].title}
            </h2>
            <p className="text-blue-900/70 mb-8">
              {processSteps[currentStep].description}
            </p>
            <div className="flex justify-center gap-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep
                      ? "bg-blue-600"
                      : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  aria-label={`Ir al paso ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-200"
            >
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-900">
                {step.title}
              </h3>
              <p className="text-sm text-blue-900/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
