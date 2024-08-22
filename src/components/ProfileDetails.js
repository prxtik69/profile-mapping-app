
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProfileDetails = ({ profile }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{profile.name}</Typography>
        <Typography variant="body2">{profile.description}</Typography>
        <Typography variant="body2">{profile.contactInfo}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
