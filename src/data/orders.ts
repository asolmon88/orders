'use client'

// data/orders.ts

import { Order } from "../types/order";

export const orders: Order[] = [
  {
    id: 1,
    projectName: "Camisas NCSC",
    dueDate: "14 de diciembre",
    designLink: "https://drive.google.com/drive/folders/1WqohOrBVryMpcVgDsuHeLjbVz0s6HJQU?usp=drive_link",
    designSize:"Por definir",
    quantities: {
      Blanco: {
        sizes: {
          S: 48,
          M: 48,
          L: 48,
          XL: 1
        },
        ready: true,
      }
    },
    colors: ["Blanco"],
    totalAmount: 145, // Sum of all sizes across all colors
  }
  // {
  //   id: 2,
  //   projectName: "Camisas grises",
  //   dueDate: "Lo antes posible",
  //   designLink: "https://drive.google.com/drive/folders/15FU7zeXXu45nI425oKI4JsA9EHfgDA7X?usp=drive_link",
  //   designSize: "10x10 adelante; 30x30 atrás",
  //   quantities: {
  //     Gris: {
  //       sizes: {
  //         M: 20,
  //         L: 28,
  //         XXL: 2,
  //       },
  //       ready: true,
  //     }
  //   },
  //   colors: ["Gris"],
  //   totalAmount: 50, // Sum of all sizes across all colors
  // },
  // Add more orders as needed
];
