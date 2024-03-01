import React, { createContext, useState, useEffect } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setApiData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching API data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={apiData}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
