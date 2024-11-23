// app/orders/page.tsx
"use client";

import React, { useState } from "react";
import { orders } from "../data/orders";
import { Order } from "../types/order";
// Import Heroicons
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const OrdersPage = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-700 p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Pedidos</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-500 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-white">Pedido</th>
              <th className="py-2 px-4 border-b text-left text-white">Fecha de entrega</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr
                  className="cursor-pointer hover:bg-gray-400"
                  onClick={() => toggleRow(order.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleRow(order.id);
                    }
                  }}
                  aria-expanded={expandedRow === order.id}
                  aria-controls={`order-details-${order.id}`}
                >
                  <td className="py-2 px-4 border-b flex items-center justify-between text-white">
                    <span>{order.projectName}</span>
                    {/* Arrow Icon */}
                    {expandedRow === order.id ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </td>
                  <td className="py-2 px-4 border-b text-white">{order.dueDate}</td>
                </tr>
                {expandedRow === order.id && (
                  <tr>
                    <td colSpan={2} className="bg-gray-500">
                      <div className="p-4">
                        <p className="text-white">
                          <strong>Link del diseño:</strong>{" "}
                          <a
                            href={order.designLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 underline"
                          >
                            Ver diseño
                          </a>
                        </p>
                        <p className="text-white">
                          <strong>Tamaños del diseño:</strong>{" "}
                          <p
                            className="text-white"
                          >
                            {order.designSize}
                          </p>
                        </p>
                        <div className="mt-4">
                          <strong className="text-white">Cantidades:</strong>
                          {order.colors.map((color) => (
                            <div key={color} className="mt-2">
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-white">{color}:</p>
                                <span
                                  className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                                    order.quantities[color].ready
                                      ? "bg-green-200 text-green-800"
                                      : "bg-red-200 text-red-800"
                                  }`}
                                >
                                  {order.quantities[color].ready ? "Listo" : "Esperando que me digan el resto"}
                                </span>
                              </div>
                              <ul className="list-disc list-inside pl-4 text-white">
                                {Object.entries(order.quantities[color].sizes).map(
                                  ([size, qty]) => (
                                    <li key={size}>
                                      Tamaño {size}: {qty}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <strong className="text-cyan-300">Total de camisas:</strong>{" "}
                          <span className="text-white">{order.totalAmount}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
