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
    else return -23;
}

function calculateShippingCosts(anOrder) {
    // 관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    if (shippingRules < 0) return shippingRules;
    //더 관련 없는 룰
}

export function calcaulateTop(orderData, errorList) {
    let status;
    try {
        status = calculateShippingCosts(orderData);
    } catch (e) {
        throw e;
    }
    if (status < 0) errorList.push({order: orderData, errorCode: status});
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