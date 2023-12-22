type CoffeeTypes = 'REGULAR' | 'ICED' | 'LATTE' | 'SPECIALTY' | 'ALCOHOLIC';

interface Coffee {
  image: string,
  type: CoffeeTypes,
  title: string,
  description: string,
  price: number,
}

export const coffeeList: Coffee[] = [

];