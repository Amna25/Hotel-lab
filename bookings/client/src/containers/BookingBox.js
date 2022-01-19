import React,{useState} from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

 const BookingBox = () => {

    const [bookings, setBookings] = useState([
        {
            name: "Jack",
            emailAdress : "jack@gmail.com",
            checkIn : true
        }
    ])


    const addBooking = (newBooking) => {
        setBookings([...bookings, newBooking])
    }
  return <div>
      <h1> Hotels Bookings</h1>
      <BookingForm addBooking={addBooking}/>
      <BookingList bookings={bookings}/>
  </div>;
};

export default BookingBox;
