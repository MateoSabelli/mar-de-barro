import ProductCard from "@/components/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Datos de ejemplo para productos destacados
const featuredProducts = [
  {
    id: 1,
    name: "Bowl vela",
    description: "Bowl con un vela hecho a mano y un diseño original",
    price: 25,
    image: "/bowl1.jpeg?height=500&width=500",
    category: "velas",
  },
  {
    id: 2,
    name: "Bowl vela",
    description: "Bowl con vela y un diseño con relieve alrededor del bowl",
    price: 30,
    image: "/bowl2.jpeg?height=500&width=500",
    category: "velas",
  },
  {
    id: 3,
    name: "Bowl",
    description: "Bowl para ensaladas con colores oceanicos",
    price: 45,
    image: "/bowl.jpeg?height=500&width=500",
    category: "platos",
  },
  {
    id: 4,
    name: "Plato grulla",
    description:
      "Un plato de ceramica con un diseño de una grulla y ramas con flores",
    price: 35,
    image: "/platoGrulla.jpeg?height=500&width=500",
    category: "platos",
  },
  {
    id: 5,
    name: "Shot de expresso",
    description: "Vaso de tamaño pequeño usado para pequeños shots de cafe",
    price: 40,
    image: "/vasoShot.jpeg?height=500&width=500",
    category: "vasos",
  },
  {
    id: 6,
    name: "Florero",
    description: "Florero de color gris de ceramica",
    price: 22,
    image: "/florero.jpeg?height=500&width=500",
    category: "decoración",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
