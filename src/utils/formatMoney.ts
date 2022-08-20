export const formatMoney = (value: number, locale: string, currency: string) => {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};
