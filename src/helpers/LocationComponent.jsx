import { useState } from 'react';
import {UserInfo} from '../components/userInfo/UserInfo';
import axios from 'axios';

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(
              // if i wont API key i schoud pey 
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
            );

            const addressComponents = response.data.results[0].address_components;
            const city = addressComponents.find((component) =>
              component.types.includes('locality')
            ).long_name;
            const street = addressComponents.find((component) =>
              component.types.includes('route')
            ).long_name;
            const postalCode = addressComponents.find((component) =>
              component.types.includes('postal_code')
            ).long_name;

            setUserLocation(`${street}, ${city}, ${postalCode}`);
          } catch (error) {
            setLocationError('Error fetching address details.');
          }
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {userLocation && <UserInfo userLocation={userLocation} />}
      {locationError && <p>Error getting location: {locationError}</p>}
    </div>
  );
};

export default LocationComponent;
