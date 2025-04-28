"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-blue-200">
      <Link href={`/productos/${product.id}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={product.image || "/logo.JPG"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/productos/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-blue-900/70 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-600">${product.price}</span>
          <Button
            onClick={() => addItem(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar al carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
