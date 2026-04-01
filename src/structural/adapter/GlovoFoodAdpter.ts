import { DeliveryService } from './DeliveryService';
import { OldCashRegister } from './OldCashRegister';

// Адаптер для Glovo — перекладає order() → acceptOrder()
export class GlovoAdapter implements DeliveryService {
    private register = new OldCashRegister();

    order(item: string): void {
        console.log(` Glovo: отримано замовлення`);
        this.register.acceptOrder(item);
    }
}
