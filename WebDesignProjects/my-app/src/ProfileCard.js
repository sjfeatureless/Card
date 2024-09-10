import React from 'react';
import './App.css'; // For individual card styling

function ProfileCard({ name, age, location, image }) {
  return (
    <div className="profile-card">
      <div className="avatar">
        <img src={image} alt={`${name}'s profile`} /> {/* Displaying image */}
      </div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default ProfileCard;
