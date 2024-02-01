/* eslint-disable prettier/prettier */
import { Coffee } from '../@types';
import * as coffeImage from '../assets';

export const coffeeListMock: Coffee[] = [
  {
    image: coffeImage.espresso,
    type: ['REGULAR'],
    title: 'Traditional Espresso',
    description: 'The traditional coffee made with hot water and ground beans',
    price: 9.90,
  },
  {
    image: coffeImage.americanEspresso,
    type: ['REGULAR'],
    title: 'American Espresso',
    description: 'Diluted espresso, less intense than the traditional ones',
    price: 9.90,
  },
  {
    image: coffeImage.creamyEspresso,
    type: ['REGULAR'],
    title: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    price: 9.90,
  },
  {
    image: coffeImage.icedEspresso,
    type: ['REGULAR', 'ICED'],
    title: 'Iced Espresso',
    description: 'Beverage prepared with espresso and ice cubes',
    price: 9.90,
  },
  {
    image: coffeImage.coffeWithMilk,
    type: ['REGULAR', 'WITH MILK'],
    title: 'Coffee with Milk',
    description: 'Half - and - half of traditional espresso with steamed milk',
    price: 9.90,
  },
  {
    image: coffeImage.latte,
    type: ['REGULAR', 'WITH MILK'],
    title: 'Latte',
    description: 'A shot of espresso with double the amount of milk and creamy foam',
    price: 9.90,
  },
  {
    image: coffeImage.cappuccino,
    type: ['REGULAR', 'WITH MILK'],
    title: 'Cappuccino',
    description: 'Beverage with cinnamon made from equal parts of coffee, milk, and foam',
    price: 9.90,
  },
  {
    image: coffeImage.macchiato,
    type: ['REGULAR', 'WITH MILK'],
    title: 'Macchiato',
    description: 'Espresso mixed with a little hot milk and foam',
    price: 9.90,
  },
  {
    image: coffeImage.mocaccino,
    type: ['REGULAR', 'WITH MILK'],
    title: 'Mocaccino',
    description: 'Espresso with chocolate syrup, little milk, and foam',
    price: 9.90,
  },
  {
    image: coffeImage.hotChocolate,
    type: ['SPECIALTY', 'WITH MILK'],
    title: 'Hot Chocolate',
    description: 'Beverage made with chocolate dissolved in hot milk and coffee',
    price: 9.90,
  },
  {
    image: coffeImage.cuban,
    type: ['SPECIALTY', 'ALCOHOLIC', 'ICED'],
    title: 'Cuban Coffee',
    description: 'Cold drink made from espresso, rum, cream, and mint',
    price: 9.90,
  },
  {
    image: coffeImage.hawaiian,
    type: ['SPECIALTY'],
    title: 'Hawaiian Coffee',
    description: 'Sweetened drink prepared with coffee and coconut milk',
    price: 9.90,
  },
  {
    image: coffeImage.arabic,
    type: ['SPECIALTY'],
    title: 'Arabic Coffee',
    description: 'Beverage prepared with Arabian coffee beans and spices',
    price: 9.90,
  },
  {
    image: coffeImage.irish,
    type: ['SPECIALTY', 'ALCOHOLIC'],
    title: 'Irish Coffee',
    description: 'Coffee - based drink with Irish whiskey, sugar, and whipped cream',
    price: 9.90,
  },
];
