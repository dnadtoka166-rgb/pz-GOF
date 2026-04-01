import { DeliveryService } from './DeliveryService';
import { OldCashRegister } from './OldCashRegister';

// Адаптер для Bolt Food — перекладає order() → acceptOrder()
export class BoltFoodAdapter implements DeliveryService {
    private register = new OldCashRegister();

    order(item: string): void {
        console.log(` Bolt Food: отримано замовлення`);
        this.register.acceptOrder(item);
    }
}
