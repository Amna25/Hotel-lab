import React from 'react';
import Booking from './Booking';

 const BookingList = ({bookings}) => {

    const bookingNodes = bookings.map((booking, index) => {
        return <Booking booking={booking} key={index}/>
    })
  return <div>
      {bookingNodes}
  </div>;
};

export default BookingList;
