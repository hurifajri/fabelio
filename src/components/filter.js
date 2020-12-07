import Filter from 'react-multiselect-checkboxes';
import PropTypes from 'prop-types';
import React from 'react';

const FilterComponent = function ({
  placeholderButtonLabel,
  data,
  onChange,
  value,
}) {
  // Convert string to object
  const convertToObj = (string, index) => ({ label: string, value: index + 1 });

  // Check only array of string to convert, otherwise keep the original data
  const options =
    data && typeof data[0] !== 'object' ? data.map(convertToObj) : data;

  // Dropdown style
  const styles = {
    control: () => ({
      display: 'none', // Remove dropdown control search
    }),
    menu: () => ({
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
    }),
    option: provided => ({
      ...provided,
      '&:hover, &:read-only': {
        backgroundColor: 'var(--color-white)',
      },
      fontWeight: 'var(--weight-normal)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
  };
  return (
    <Filter
      options={options || []}
      defaultValue={value}
      value={value}
      onChange={onChange}
      placeholderButtonLabel={placeholderButtonLabel}
      styles={styles}
      width="100%"
      rightAligned={true}
    />
  );
};

export default FilterComponent;

FilterComponent.propTypes = {
  placeholderButtonLabel: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.array,
};
