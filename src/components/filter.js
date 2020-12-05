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
      borderRadius: '6px',
      boxShadow:
        '0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02)',
    }),
    option: provided => ({
      ...provided,
      '&:hover, &:read-only': {
        backgroundColor: 'var(--white-color)',
      },
      fontWeight: 'normal',
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
