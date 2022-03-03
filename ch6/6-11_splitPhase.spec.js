import {expect} from "chai";
import {priceOrder} from "./6-11_splitPhase.js";

describe('6-11단계 쪼개기', () => {
    it('1', () => {
        const product1 = {
            prodName: "상품이름",
            basePrice: 10000,
            discountThreshold: 5,
            discountRate: 0.15
        };
        const shippingMethod1 = {
            shippingMethodTitle: "쉬핑방법1",
            discountedFee: 500,
            feePerCase: 3000,
            discountThreshold: 0.15
        };

        expect(priceOrder(product1, 1, shippingMethod1)).equals(10500);
        expect(priceOrder(product1, 5, shippingMethod1)).equals(52500);
        expect(priceOrder(product1, 6, shippingMethod1)).equals(61500);

        // console.log(priceOrder(product1, 5, shippingMethod1));
        // console.log(priceOrder(product1, 6, shippingMethod1));

    });
});