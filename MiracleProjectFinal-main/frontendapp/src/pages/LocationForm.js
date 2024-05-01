
// import React, { useState } from 'react';
// import socketIOClient from 'socket.io-client';

// const socket = socketIOClient('http://localhost:5000');

// const LocationForm = () => {
//     const [latitude, setLatitude] = useState('');
//     const [longitude, setLongitude] = useState('');

//     // Function to handle fetching user's current location
//     const handleGetLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 position => {
//                     setLatitude(position.coords.latitude);
//                     setLongitude(position.coords.longitude);
//                 },
//                 error => {
//                     console.error('Error getting location:', error);
//                 }
//             );
//         } else {
//             console.error('Geolocation is not supported by this browser.');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Emit the latitude and longitude to the server
//         socket.emit('locationUpdate', { latitude, longitude });
//     };

//     return (
//         <div>
//             <button onClick={handleGetLocation}>Get Current Location</button>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
//                 <input type="text" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
//                 <button type="submit">Update Location</button>
//             </form>
//         </div>
//     );
// };

// export default LocationForm;