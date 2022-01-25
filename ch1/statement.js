module.exports = {
    statement: (invoice, plays) => {
        const statementData = {};
        statementData.customer = invoice.customer;
        statementData.performances = invoice.performances.map(enrichPerformance);
        return renderPlainText(statementData,  plays);

        function enrichPerformance(aPerformance) {
            const result = Object.assign({}, aPerformance);
            return result;
        }
    }
};

function renderPlainText(data,  plays) {

    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances)
        result += ` ${playFor(perf).name}: ${convertNumberToUSDFormat(amountFor(perf))} (${perf.audience}석)\n`;

    result += `총액: ${convertNumberToUSDFormat(totalAmount())}\n`;
    result += `적립 포인트: ${(totalVolumeCredits())}점\n`;
    return result;

    function convertNumberToUSDFormat(aNumber) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }).format(aNumber / 100);
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch (playFor(aPerformance).type) {
            case "tragedy": // 비극
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;

            case "comedy": // 희극
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;

            default:
                throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);

        }
        return result;
    }

    function playFor(perf) {
        return plays[perf.playID];
    }

    function volumeCreditsFor(aPerformance) {
        let result = 0;
        // 포인트 적립
        result += Math.max(aPerformance.audience - 30, 0);

        // 희극 관객 5명마다 추가 포인트 제공
        if ("comedy" === playFor(aPerformance).type) {
            result += Math.floor(aPerformance.audience / 5);
        }
        return result;
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of data.performances)
            result += volumeCreditsFor(perf);
        return result;
    }

    function totalAmount() {
        let result = 0;
        for (let perf of data.performances)
            result += amountFor(perf);
        return result;
    }

}

