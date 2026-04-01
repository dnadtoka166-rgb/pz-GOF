import { Coffee } from './Coffee';

// Декоратор молока - загортає будь-яку каву і додає молоко зверху
export class MilkDecorator implements Coffee {
  // приймає будь-який об'єкт який реалізує Coffee
  constructor(private coffee: Coffee) {}

  // бере ціну попередньої кави і додає свою
  cost(): number {
    return this.coffee.cost() + 3;
  }

  // бере опис попередньої кави і додає свій
  description(): string {
    return this.coffee.description() + ' + молоко';
  }
}
