export const currencyFormatter = (
  lang: string,
  currency: string,
  balance: number
): string =>
  Intl.NumberFormat(lang, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(balance);
