
import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  return (
    <div className="profile-details">
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      </div>
  );
};

export default ProfileDetails;
