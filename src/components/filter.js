import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default ({ placeholderButtonLabel }) => {
  const options = [
    { label: 'Thing 1', value: 1 },
    { label: 'Thing 2', value: 2 },
  ];

  const styles = {
    control: () => ({
      display: 'none',
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
      fontWeight: 'var(--normal)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
  };
  return (
    <ReactMultiSelectCheckboxes
      options={options}
      placeholderButtonLabel={placeholderButtonLabel}
      styles={styles}
      width="100%"
      rightAligned={true}
      className="custom-container"
    />
  );
};
