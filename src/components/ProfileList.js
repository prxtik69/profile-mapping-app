
import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onSummaryClick }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} onSummaryClick={onSummaryClick} />
      ))}
    </div>
  );
};

export default ProfileList;
