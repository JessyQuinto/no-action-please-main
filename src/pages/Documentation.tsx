import React from "react";
import { Card } from "@/components/ui/card";

export default function Documentation() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        Niveles de Accesibilidad Web
      </h1>
      
      <div className="space-y-8">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Nivel A (Básico)</h2>
          <div className="prose dark:prose-invert">
            <p className="mb-4">
              El nivel más básico de accesibilidad web. Los criterios de este nivel abordan las barreras más significativas para los usuarios con discapacidades.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alternativas textuales para contenido no textual</li>
              <li>Subtítulos para videos</li>
              <li>Adaptabilidad de la presentación</li>
              <li>Accesibilidad por teclado</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Nivel AA (Intermedio)</h2>
          <div className="prose dark:prose-invert">
            <p className="mb-4">
              Este nivel aborda barreras significativas adicionales y es el nivel comúnmente requerido por organizaciones y gobiernos.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contraste de colores mejorado</li>
              <li>Redimensionamiento del texto</li>
              <li>Múltiples formas de navegación</li>
              <li>Etiquetas y encabezados consistentes</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Nivel AAA (Avanzado)</h2>
          <div className="prose dark:prose-invert">
            <p className="mb-4">
              El nivel más alto de accesibilidad web. Proporciona mejoras adicionales para la accesibilidad.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lenguaje de señas para contenido multimedia</li>
              <li>Audio descripción extendida</li>
              <li>Contraste mejorado</li>
              <li>Control de audio de fondo</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}