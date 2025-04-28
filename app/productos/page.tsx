import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";

// Datos de ejemplo para productos
const products = [
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

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-stone-800">
        Nuestros Productos
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <ProductFilter />
        </aside>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
