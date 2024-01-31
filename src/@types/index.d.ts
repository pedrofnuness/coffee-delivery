/* eslint-disable prettier/prettier */

export type CoffeeTypes = 'REGULAR' | 'ICED' | 'WITH_MILK' | 'SPECIALTY' | 'ALCOHOLIC';

export interface Coffee {
  image: string;
  type: CoffeeTypes[];
  title: string;
  description: string;
  price: number;
}
