import React from 'react';

 const Booking = ({booking}) => {
  return <div>
     <p> name: {booking.name}</p>
      <p>email_adress : {booking.emailAdress}</p>
      <p >  {booking.checkIn ? "check_in :checked In" :  "check_in :not checked In" }</p>
  </div>;
};

export default Booking;
