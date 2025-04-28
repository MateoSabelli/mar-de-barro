import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

// Esta función sería reemplazada por una llamada a tu base de datos
const getProductById = (id: string) => {
  return {
    id: Number.parseInt(id),
    name: "Taza Oceánica",
    description:
      "Taza de cerámica con tonos azules inspirada en el mar. Cada pieza es única y hecha a mano, por lo que puede haber ligeras variaciones en color y textura.",
    price: 25,
    image: "/placeholder.svg?height=600&width=600",
    category: "vajilla",
    details: [
      "Material: Arcilla de alta calidad",
      "Dimensiones: 10cm x 8cm",
      "Capacidad: 350ml",
      "Apta para lavavajillas y microondas",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/productos" className="flex items-center text-amber-700 mb-8 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a productos
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-4">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((img, index) => (
              <div key={index} className="relative h-[100px] rounded-lg overflow-hidden">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${product.name} - vista ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-stone-800">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6 text-amber-700">${product.price}</p>

          <p className="text-stone-600 mb-6">{product.description}</p>

          <div className="mb-8">
            <h3 className="font-semibold mb-2 text-stone-800">Detalles:</h3>
            <ul className="list-disc pl-5 text-stone-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <Button className="w-full mb-4 bg-amber-700 hover:bg-amber-800">Añadir al Carrito</Button>

          <p className="text-sm text-stone-500 mt-4">
            Cada pieza es única y hecha a mano. Envío gratuito en pedidos superiores a $100.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-stone-800">También te puede gustar</h2>
        {/* Aquí iría un componente de productos relacionados */}
      </div>
    </div>
  )
}
