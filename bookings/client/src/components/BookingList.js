import React from 'react';
import Booking from './Booking';

 const BookingList = ({bookings, removeBooking, updateCheckIn}) => {

    const bookingNodes = bookings.map((booking, index) => {
        return <Booking booking={booking} key={index} removeBooking = {removeBooking} updateCheckIn = {updateCheckIn}/>
    })
  return <div>
      {bookingNodes}
  </div>;
};

export default BookingList;
