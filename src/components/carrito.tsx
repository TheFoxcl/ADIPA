"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";

export const CartDrawer = () => {
  const { carrito, isCartOpen, setIsCartOpen, eliminarDelCarrito, total } =
    useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-bold text-secondary">
                Tu Carrito ({carrito.length})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {carrito.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <p className="text-lg">Tu carrito está vacío</p>
                </div>
              ) : (
                carrito.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 border rounded-xl hover:shadow-sm transition-shadow"
                  >
                    <img
                      src={item.imagen}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-secondary font-extrabold mt-1">
                        ${" "}
                        {(
                          item.precio -
                          (item.descuento ?? 0) * item.precio
                        ).toLocaleString("es-CO")}
                      </p>
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {carrito.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                  <span>Total:</span>
                  <span className="text-number">
                    $ {total.toLocaleString("es-CO")} COP
                  </span>
                </div>
                <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary transition-all active:scale-95 shadow-lg shadow-secondary/20">
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
