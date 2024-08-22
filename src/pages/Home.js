
import React, { useState, useEffect } from 'react';
import ProfileList from '../components/ProfileList';
import MapComponent from '../components/MapComponent';
import AdminPanel from '../components/AdminPanel';
import axios from 'axios';

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    // Fetch profiles data (this can be replaced with API call)
    const fetchData = async () => {
      const result = await axios.get('/api/profiles');
      setProfiles(result.data);
    };
    fetchData();
  }, []);

  const handleSummaryClick = (profile) => {
    // Geocoding logic here to convert address to lat/lng
    const address = { lat: 40.748817, lng: -73.985428 }; // Example lat/lng
    setSelectedAddress(address);
  };

  const handleAddProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  return (
    <div className="home-page">
      <ProfileList profiles={profiles} onSummaryClick={handleSummaryClick} />
      {selectedAddress && <MapComponent address={selectedAddress} />}
      <AdminPanel onAddProfile={handleAddProfile} />
    </div>
  );
};

export default Home;
