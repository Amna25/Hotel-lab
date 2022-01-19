import React,{useEffect, useState} from 'react';
import { getBookings } from '../BookingService';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

 const BookingBox = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() =>{
        getBookings().then((allBookings) =>{
            setBookings(allBookings)
        })
    }, [])


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
