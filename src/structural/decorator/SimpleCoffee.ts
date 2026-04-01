import { Coffee } from './Coffee';

// Базова кава - найпростіша реалізація
export class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }

  description(): string {
    return 'Проста кава';
  }
}
