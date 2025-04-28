"use client";

import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">
        Carrito de Compras
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-blue-900/70 mb-4">Tu carrito está vacío</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="/productos">Ver Productos</a>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-blue-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900">{item.name}</h3>
                    <p className="text-sm text-blue-900/70">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="border-blue-200"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="border-blue-200"
                        >
                          +
                        </Button>
                      </div>
                      <span className="font-semibold text-blue-900">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Resumen del Pedido
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-blue-900/70">Subtotal</span>
                  <span className="font-semibold text-blue-900">
                    ${totalPrice()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-900/70">Envío</span>
                  <span className="font-semibold text-blue-900">Gratis</span>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-blue-900">Total</span>
                    <span className="font-bold text-blue-900">
                      ${totalPrice()}
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Proceder al Pago
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
