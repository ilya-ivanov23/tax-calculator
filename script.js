document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculate-btn");
    const incomeInput = document.getElementById("income");
    const resultBox = document.getElementById("result");

    calculateBtn.addEventListener("click", () => {
        const incomeValue = parseFloat(incomeInput.value);
        if (isNaN(incomeValue)) {
            resultBox.textContent = "Invalid input";
            resultBox.style.color = "red";
            return;
        }

        const tax = calculateTax(incomeValue);
        resultBox.textContent = "$" + tax.toFixed(2);
        resultBox.style.color = "#28a745";
    });
});
