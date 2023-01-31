{
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.3556;
        const rateCAD = 3.2445;
        const rateEUR = 4.6888;
        const rateGBP = 5.3035;
        switch (currency) {
            case "USD":
                return amount / rateUSD;
            case "CAD":
                return amount / rateCAD;
            case "EUR":
                return amount / rateEUR;
            case "GBP":
                return amount / rateGBP;
        }
    };
    const updateResultValue = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };
    const onFormCheck = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount, currency);
        updateResultValue(amount, result, currency);
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormCheck);
    };
    init();
}