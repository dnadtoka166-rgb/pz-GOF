// Інтерфейс який очікують нові служби доставки
export interface DeliveryService {
    order(item: string): void;
}
