import { createContext, useMemo, useContext, useState, PropsWithChildren } from 'react';

export const PropertyDataContext = createContext(null);

export const usePropertyData = () => {
  const context = useContext(PropertyDataContext);

  if (!context) {
    throw new Error('usePropertyData must be used within a PropertyDataProvider');
  }
  return context;
};

export const PropertyDataProvider = ({ children }: PropsWithChildren) => {
  const [searchLocation, setSearchLocation] = useState('Reading, MA');
  const [searchFilters, setSearchFilters] = useState([
    {
      name: 'price',
      value: 2000,
    },
    {
      name: 'bedrooms',
      value: 2,
    },
    {
      name: 'bathrooms',
      value: 1,
    },
    {
      name: 'sqft',
      value: 1000,
    },
    {
      name: 'hasDishwasher',
      value: false,
    },
    {
      name: 'hasLaundryInUnit',
      value: false,
    },
    {
      name: 'hasParking',
      value: false,
    },
    {
      name: 'catsAllowed',
      value: false,
    },
    {
      name: 'dogsAllowed',
      value: false,
    },
    {
      name: 'hasPool',
      value: false,
    },
    {
      name: 'hasGym',
      value: false,
    },
    {
      name: 'hasElevator',
      value: false,
    },
    {
      name: 'hasWheelchairAccess',
      value: false,
    },
    {
      name: 'hasAirConditioning',
      value: false,
    },
    {
      name: 'hasBalcony',
      value: false,
    },
    {
      name: 'hasPatio',
      value: false,
    },
    {
      name: 'hasFireplace',
      value: false,
    },
  ]);
  const [propertyData, setPropertyData] = useState([{
    address: '98 Hartshorn St. Reading, MA 01867',
    price: 2000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    description: 'This is a great apartment!',
    hidden: false,
  }]);

  const getProperties = async () => {
    const response = await fetch('https://api.apartment-finder.com/properties');
    const data = await response.json();
    setPropertyData(data);
  }

  const contextValue = useMemo(() => {
    return {
      searchLocation,
      setSearchLocation,
      propertyData,
      setPropertyData,
      searchFilters,
      setSearchFilters,
    };
  }, [
    searchLocation,
    setSearchLocation,
    propertyData,
    setPropertyData,
    searchFilters,
    setSearchFilters,
  ]);

  return (
    <PropertyDataContext.Provider value={contextValue}>
      {children}
    </PropertyDataContext.Provider>
  );
};

export default PropertyDataProvider;