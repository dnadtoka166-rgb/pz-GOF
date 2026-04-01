// Старий касовий апарат — змінити не можемо
export class OldCashRegister {
    acceptOrder(item: string): void {
        console.log(`🖨️ Касовий апарат: прийнято замовлення — ${item}`);
    }
}
