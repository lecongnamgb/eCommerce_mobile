export function formatMoney(amount) {
    return new Intl.NumberFormat().format(amount);
}