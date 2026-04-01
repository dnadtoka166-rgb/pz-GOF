import { BoltFoodAdapter } from './BoltFoodAdapter';
import { DeliveryService } from './DeliveryService';
import { GlovoAdapter } from './GlovoFoodAdpter';
// Кав'ярня приймає замовлення через будь-яку службу доставки
function placeOrder(service: DeliveryService, item: string): void {
    service.order(item);
}

const bolt = new BoltFoodAdapter();
placeOrder(bolt, 'Капучино');
placeOrder(bolt, 'Латте');


const glovo = new GlovoAdapter();
placeOrder(glovo, 'Американо');
placeOrder(glovo, 'Еспресо');