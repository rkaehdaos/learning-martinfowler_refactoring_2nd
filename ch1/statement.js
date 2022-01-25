module.exports = {
    statement: (invoice, plays) => {
        return renderPlainText(createStatementData(invoice, plays));
    }
};
function renderPlainText(data) {

    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances)
        result += ` ${perf.play.name}: ${convertNumberToUSDFormat(perf.amount)} (${perf.audience}석)\n`;

    result += `총액: ${convertNumberToUSDFormat(data.totalAmount)}\n`;
    result += `적립 포인트: ${(data.totalVolumeCredits)}점\n`;
    return result;


}
function convertNumberToUSDFormat(aNumber) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format(aNumber / 100);
}
function createStatementData(invoice, plays){
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }
    function playFor(perf) {
        return plays[perf.playID];
    }
    function amountFor(aPerformance) {
        let result = 0;
        switch (aPerformance.play.type) {
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
                throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);

        }
        return result;
    }
    function volumeCreditsFor(aPerformance) {
        let result = 0;
        // 포인트 적립
        result += Math.max(aPerformance.audience - 30, 0);

        // 희극 관객 5명마다 추가 포인트 제공
        if ("comedy" === aPerformance.play.type) {
            result += Math.floor(aPerformance.audience / 5);
        }
        return result;
    }
    function totalVolumeCredits(data) {
        return data.performances
            .reduce((t, p) => t + p.volumeCredits, 0);
    }
    function totalAmount(data) {
        return data.performances
            .reduce((t, p) => t + p.amount, 0);
    }
}