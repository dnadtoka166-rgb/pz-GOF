// Інтерфейс - визначає що кожна кава повинна мати ціну і опис
export interface Coffee {
  cost(): number;
  description(): string;
}

export { SimpleCoffee } from './SimpleCoffee';
export { MilkDecorator } from './MilkDecorator';
export { SugarDecorator } from './SugarDecorator';