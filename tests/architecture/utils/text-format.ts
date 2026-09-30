// Returns true if the text looks like a US dollar price, e.g. '$29.99'.
// The pattern means: a '$', one or more digits, a '.', then exactly two digits.
export const isCurrencyFormat = (text: string): boolean => {
  return /^\$\d+\.\d{2}$/.test(text);
};

// TODO: add an isPriceInRange(price: string, min: number, max: number)
// function that returns true if the price is between min and max, including
// min and max themselves. e.g. isPriceInRange('$29.99', 10, 50) -> true.
// Hint: remove the '$' and convert the rest to a number first.
