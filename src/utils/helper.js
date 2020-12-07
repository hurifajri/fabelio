/**
 * Format the given number to IDR currency
 * @param {Number} number
 * @return {String} The formatted number
 */
export const formatCurrency = number => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(number)
    .replace(/(\.|,)00$/g, '');
};

/**
 * Limit the given string to specific total characters
 * @param {String} chars The given string to limit
 * @param {Number} limit Defined number of characters
 * @return {String} The limitted characters
 */
export const limitChars = (chars, limit) => chars.substr(0, limit) + '...';

/**
 * Optionally put colon to not the last and not a single item in an array
 * @param {String} item The given item of list
 * @param {Number} i Index to compare the item
 * @return {String} Colon, otherwise empty string
 */
export const colonable = (item, i) =>
  item.length - i !== i && item.length !== 1 ? ',' : '';
