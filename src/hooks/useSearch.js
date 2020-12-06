import { useState } from 'react';

export default () => {
  // Store typed search term by user
  const [searchTerm, setSearchTerm] = useState('');
  const handleChangeSearch = event => setSearchTerm(event.target.value);

  return [searchTerm, handleChangeSearch];
};
