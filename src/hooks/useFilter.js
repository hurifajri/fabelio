import { useSearch } from '../hooks';
import { useState } from 'react';

export default data => {
  // Use search custom hook
  const [searchTerm, handleChangeSearch] = useSearch();

  // Store the selected furniture style and delivery time from the filters and get only the label and value
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const getItem = (array, callback) => array.map(callback);
  const labelCallback = item => item.label;
  const valueCallback = item => item.value;
  const selectedStyleLabel = getItem(selectedStyle, labelCallback);
  const selectedTimeValue = getItem(selectedTime, valueCallback);

  // Determines whether filter for furniture style is selected
  const filterStyle = data.filter(({ furniture_style }) =>
    selectedStyleLabel.some(item => furniture_style.indexOf(item) >= 0)
  );

  // Determines whether filter for exact delivery time is selected
  const filterTime = data.filter(({ delivery_time }) =>
    selectedTimeValue.includes(parseInt(delivery_time))
  );

  // Determines whether filter for non-exact delivery time is selected
  const filterTimeMore = selectedTimeValue.includes(0)
    ? data.filter(({ delivery_time }) => parseInt(delivery_time) % 7 !== 0)
    : [];

  // Filter products by search term, furniture style and delivery time
  const joinedFilteredProducts = [
    ...filterStyle,
    ...filterTime,
    ...filterTimeMore,
  ];

  // Remove duplicate element
  const rawFilteredProducts = joinedFilteredProducts.filter(
    (item, index) => joinedFilteredProducts.indexOf(item) === index
  );

  // Determines whether search term is match to product name
  const search = searchTerm => ({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  const isEmpty = array => array.length === 0;

  const filteredProducts =
    // Initial load page, show all products
    !searchTerm && isEmpty(selectedStyle) && isEmpty(selectedTime)
      ? data
      : // if only search bar is used
      searchTerm && isEmpty(selectedStyle) && isEmpty(selectedTime)
      ? data.filter(search(searchTerm))
      : // Otherwise, filter bar is also used
        rawFilteredProducts.filter(search(searchTerm));

  return [
    searchTerm,
    handleChangeSearch,
    selectedStyle,
    setSelectedStyle,
    selectedTime,
    setSelectedTime,
    filteredProducts,
  ];
};
