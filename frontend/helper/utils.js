export function formatMoney(amount) {
  return new Intl.NumberFormat().format(amount);
}

export function getBodyError(err) {
  return JSON.parse(err.response.request._response);
}
