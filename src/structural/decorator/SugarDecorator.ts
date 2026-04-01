import { Coffee } from './Coffee';

// Декоратор цукру - загортає будь-яку каву і додає цукор зверху
export class SugarDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ' + цукор';
  }
}
