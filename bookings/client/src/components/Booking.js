import React from 'react';

 const Booking = ({booking, removeBooking, updateCheckIn}) => {
  
  const handleDelete= () => {
    removeBooking(booking._id)

  }
  
  const handleCheckIn = () => {
    updateCheckIn(booking._id)
  }


  return <div>
     <p> name: {booking.name}</p>
      <p>email_address : {booking.emailAddress}</p>
      {booking.checkIn ? "check_in :checked In" :  "check_in :not checked In" }
      <button onClick={handleDelete}> 🗑 </button>


  </div>;
};

export default Booking;
