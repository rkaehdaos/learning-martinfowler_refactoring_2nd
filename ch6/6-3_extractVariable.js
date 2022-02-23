function price(order) {
    // 가격 = 기본 가격 - 수량 할인 + 배송비
    let basePrice = order.quantity * order.itemPrice;
    let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    return basePrice - quantityDiscount + Math.min(basePrice * 0.1, 100);
}