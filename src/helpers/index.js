
export const getSuffixFromYear = (year) => {
    let suffix = "";
    const lastDigit = +`${year}`.slice(-1);
    if ([1, 4, 5, 9, 0].includes(lastDigit)) {
        suffix = "ый";
    } else if ([2, 6, 7, 8].includes(lastDigit)) {
        suffix = "ой";
    } else {
        suffix = "ий";
    }
    return suffix
}

export const getTaxRefunds = (salary) => {
    const yearlyTax = Math.round(salary * 12 * 0.13);
    const paymentsCount = Math.ceil(260000 / yearlyTax);

    const payments = [...Array(paymentsCount).keys()].map((_, index) => {
        const payment = {
            value: 0,
            year: index + 1,
            isSelected: false,
        }
        if (index < paymentsCount - 1) {
            payment.value = yearlyTax;
        } else {
            payment.value = 260000 - index * yearlyTax;
        }
        return payment;
    })
    return payments
}