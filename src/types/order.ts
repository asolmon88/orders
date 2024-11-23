'use client'

// types/quantitiesPerColor.ts

export interface QuantitiesPerColor {
  sizes: {
    [size: string]: number;
  };
  ready: boolean;
}

// types/order.ts

export interface Order {
  id: number;
  projectName: string;
  dueDate: string;
  designLink: string;
  designSize: string;
  quantities: {
    [color: string]: QuantitiesPerColor;
  };
  colors: string[];
  totalAmount: number; // New property
}
