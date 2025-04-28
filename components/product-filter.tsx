"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "velas", name: "Velas" },
  { id: "platos", name: "Platos" },
  { id: "vasos", name: "Vasos" },
  { id: "decoración", name: "Decoración" },
];

export default function ProductFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">Filtros</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-blue-900 mb-3">Categorías</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <Label htmlFor={category.id} className="text-blue-900/70">
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium text-blue-900 mb-3">Rango de Precio</h3>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100}
            step={1}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-blue-900/70">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => {
            setSelectedCategories([]);
            setPriceRange([0, 100]);
          }}
        >
          Limpiar Filtros
        </Button>
      </div>
    </div>
  );
}
