'use client'

// data/orders.ts

import { Order } from "../types/order";

export const orders: Order[] = [
  {
    id: 1,
    projectName: "Camisas navideñas",
    dueDate: "8 de diciembre",
    designLink: "https://docs.google.com/document/d/your-design-link",
    designSize:"Por definir",
    quantities: {
      Blanco: {
        sizes: {
          S: 50,
          M: 100,
          L: 150,
        },
        ready: false,
      },
      Rojo: {
        sizes: {
          S: 39,
          M: 36,
          L: 18,
          XL: 3,
        },
        ready: false,
      },
      Verde: {
        sizes: {
          XS: 1,
          S: 3,
          M: 5,
          L: 1,
          XL: 1
        },
        ready: true,
      },
    },
    colors: ["Blanco", "Rojo", "Verde"],
    totalAmount: 120, // Sum of all sizes across all colors
  },
  {
    id: 2,
    projectName: "Camisas grises",
    dueDate: "Lo antes posible",
    designLink: "https://docs.google.com/document/d/your-design-link",
    designSize: "10x10 adelante; 30x30 atrás",
    quantities: {
      Gris: {
        sizes: {
          M: 20,
          L: 28,
          XXL: 2,
        },
        ready: true,
      }
    },
    colors: ["Gris"],
    totalAmount: 50, // Sum of all sizes across all colors
  },
  // Add more orders as needed
];
