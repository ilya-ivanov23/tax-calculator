// taxCalculator.js
function calculateTax(income) {
    if (typeof income !== 'number' || income < 0) return 0;
    if (income <= 10000) return income * 0.1;
    if (income <= 50000) return 1000 + (income - 10000) * 0.2;
    return 9000 + (income - 50000) * 0.3;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateTax };
}
