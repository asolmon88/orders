'use client'

// data/orders.ts

import { Order } from "../types/order";

export const orders: Order[] = [
  {
    id: 1,
    projectName: "Camisas navideñas",
    dueDate: "8 de diciembre",
    designLink: "https://docs.google.com/document/d/your-design-link",
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
    dueDate: "Sin definir",
    designLink: "https://docs.google.com/document/d/your-design-link",
    quantities: {
      Gris: {
        sizes: {
          S: 0,
          M: 0,
          L: 0,
        },
        ready: false,
      }
    },
    colors: ["Gris"],
    totalAmount: 50, // Sum of all sizes across all colors
  },
  // Add more orders as needed
];
