import PropTypes from 'prop-types';
import { useSearch } from '../hooks';
import { useState } from 'react';

const UseFilter = function (data) {
  // Determines whether search term is match to product name
  const search = searchTerm => ({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase());

  // Use search custom hook
  const [searchTerm, handleChangeSearch] = useSearch();

  // Helper function to determine the given array is empty
  const isEmpty = array => array.length === 0;

  // Store selected furniture style and delivery time from filters and get only label and value
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const getItem = (array, callback) => array.map(callback);
  const label = item => item.label;
  const value = item => item.value;
  const styleLabel = getItem(selectedStyle, label);
  const timeValue = getItem(selectedTime, value);

  // Determines whether filter for furniture style is selected
  const hasStyle = ({ furniture_style }) =>
    styleLabel.some(item => furniture_style.indexOf(item) >= 0);
  const filterStyle = data.filter(hasStyle);

  // Determines whether filter for exact delivery time is selected
  const hasTime = ({ delivery_time }) =>
    timeValue.includes(parseInt(delivery_time));
  const filterTime = data.filter(hasTime);

  // Determines whether filter for non-exact delivery time is selected
  const isNotMatchTime = ({ delivery_time }) =>
    parseInt(delivery_time) % 7 !== 0;
  const filterTimeMore = timeValue.includes(0)
    ? data.filter(isNotMatchTime)
    : [];

  // Join the filtered result products by furniture style and delivery time
  const joinedFilter = [...filterStyle, ...filterTime, ...filterTimeMore];

  // Merge duplicate elements of the joined filter
  const isUnique = (item, index) => joinedFilter.indexOf(item) !== index;

  const rawFilteredProducts =
    // If filter furniture style and delivery time are being use, find the specific ones
    !isEmpty(selectedStyle) && !isEmpty(selectedTime)
      ? joinedFilter.filter(isUnique)
      : joinedFilter; // Otherwise, joined regular filter

  const filteredProducts =
    // Initial load page, show all products
    isEmpty(selectedStyle) && isEmpty(selectedTime)
      ? data.filter(search(searchTerm))
      : rawFilteredProducts.filter(search(searchTerm)); // Otherwise

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

export default UseFilter;

UseFilter.propTypes = {
  data: PropTypes.array.isRequired,
};
