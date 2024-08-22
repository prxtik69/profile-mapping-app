
import React, { useState } from 'react';

const AdminPanel = ({ onAddProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    description: '',
    photo: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProfile(profile);
    setProfile({ name: '', description: '', photo: '', address: '' });
  };

  return (
    <div className="admin-panel">
      <h2 style={{
        marginTop:"50px",
        textAlign:"center"
      }}>Add Profile</h2>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        width:"100%",
        gap:"50px",
        textAlign:"center",
        alignItems:'center'
      }}>
        <input type="text" placeholder="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} required />
        <textarea placeholder="Description" value={profile.description} onChange={(e) => setProfile({ ...profile, description: e.target.value })} required></textarea>
        <input type="text" placeholder="Photo URL" value={profile.photo} onChange={(e) => setProfile({ ...profile, photo: e.target.value })} required />
        <input type="text" placeholder="Address" value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} required />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AdminPanel;
