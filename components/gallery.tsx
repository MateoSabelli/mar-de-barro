import Image from "next/image";

// Datos de ejemplo para la galería
const galleryImages = [
  "/bowl1.jpeg?height=600&width=600",
  "/bowl2.jpeg?height=600&width=600",
  "/bowl.jpeg?height=600&width=600",
  "/platoGrulla.jpeg?height=600&width=600",
  "/vasoShot.jpeg?height=600&width=600",
  "/florero.jpeg?height=600&width=600",
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <Image
            src={image || "/logo.JPG"}
            alt={`Galería Mar de Barro ${index + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
