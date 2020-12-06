import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const UseApi = function (url) {
  // Define store for result
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      // Initial loading and error states
      setIsLoading(true);
      setIsError(false);

      try {
        const result = await axios(url);

        // Assign the result to the store
        setData(result.data);
      } catch (error) {
        setIsError(true); // If error caught
      }

      setIsLoading(false); // Finish fetching data
    };

    fetchData();
  }, [url]);

  return [data, isLoading, isError];
};

export default UseApi;

UseApi.propTypes = {
  url: PropTypes.string.isRequired,
};
