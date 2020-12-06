import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default ({ placeholderButtonLabel, data, onChange, value }) => {
  // Convert string to object
  const convertToObj = (string, index) => ({ label: string, value: index + 1 });

  // Check only array of string to convert, otherwise keep the original data
  const options = typeof data[0] !== 'object' ? data.map(convertToObj) : data;

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
    <ReactMultiSelectCheckboxes
      options={options}
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
