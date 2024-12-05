'use client'

// data/orders.ts

import { Order } from "../types/order";

export const orders: Order[] = [
  {
    id: 1,
    projectName: "Camisas navideñas",
    dueDate: "8 de diciembre",
    designLink: "https://drive.google.com/drive/folders/1WqohOrBVryMpcVgDsuHeLjbVz0s6HJQU?usp=drive_link",
    designSize:"Por definir",
    quantities: {
      Blanco: {
        sizes: {
          S: 2,
          M: 5,
          L: 1,
        },
        ready: true,
      },
      Rojo: {
        sizes: {
          S: 63,
          M: 70,
          L: 31,
          XL: 9,
        },
        ready: true,
      },
      Verde: {
        sizes: {
          XS: 4,
          S: 6,
          M: 15,
          L: 11,
          XL: 1
        },
        ready: true,
      },
    },
    colors: ["Blanco", "Rojo", "Verde"],
    totalAmount: 217, // Sum of all sizes across all colors
  },
  {
    id: 2,
    projectName: "Camisas grises",
    dueDate: "Lo antes posible",
    designLink: "https://drive.google.com/drive/folders/15FU7zeXXu45nI425oKI4JsA9EHfgDA7X?usp=drive_link",
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
