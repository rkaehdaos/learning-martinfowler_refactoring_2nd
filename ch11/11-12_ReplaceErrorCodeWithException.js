let countryData = {};
countryData.shippingRules = {};
countryData.shippingRules["서울"] = "퀵";
countryData.shippingRules["인천"] = "퀵";
countryData.shippingRules["수원"] = "퀵";
countryData.shippingRules["부산"] = "택배";
countryData.shippingRules["제주"] = "택배";


function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
    // 관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    //더 관련 없는 룰
}

export function calcaulateTop(orderData, errorList) {
    let status;
    try {
        status = calculateShippingCosts(orderData);
    } catch (e) {
        if (e instanceof OrderProcessingError)
            errorList.push({order: orderData, errorCode: e.code});
        else
            throw e;
    }
    if (status < 0) throw new Error("오류 코드가 다 사라지지 않음");
}

class ShippingRules {
    constructor(data) {
    }
}

class OrderProcessingError extends Error {

    constructor(errorCode) {
        super(`주문처리 오류: ${errorCode}`);
        this.code = errorCode;
    }

    get name() {
        return "OrderProcessingError";
    }
}