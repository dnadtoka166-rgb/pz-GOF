import { SimpleCoffee } from './SimpleCoffee';
import { MilkDecorator } from './MilkDecorator';
import { SugarDecorator } from './SugarDecorator';

// базова кава
let coffee = new SimpleCoffee();
console.log(`${coffee.description()} — ${coffee.cost()} грн`);

// загортаємо в молоко - базова кава не змінюється
coffee = new MilkDecorator(coffee);
console.log(`${coffee.description()} — ${coffee.cost()} грн`);

// загортаємо в цукор - кожен декоратор додає своє зверху
coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} — ${coffee.cost()} грн`);
