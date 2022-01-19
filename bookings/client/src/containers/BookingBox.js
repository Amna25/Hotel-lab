import React,{useEffect, useState} from 'react';
import { getBookings, updateBooking } from '../BookingService';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { deleteBooking } from '../BookingService';
import { postBooking } from '../BookingService';

 const BookingBox = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() =>{
        getBookings().then((allBookings) =>{
            setBookings(allBookings)
        })
    }, [bookings])


    const addBooking = (newBooking) => {
        postBooking(newBooking)
        setBookings([...bookings, newBooking])
    }

    const removeBooking =  (id) =>{
        deleteBooking(id)
    }

    // const updateCheckIn = (id) => {
    //     updateBooking(id, )
    // }



  return <div>
      <h1> Hotels Bookings</h1>
      <BookingForm addBooking={addBooking}/>
      <BookingList bookings={bookings} removeBooking ={removeBooking}/>
  </div>;
};

export default BookingBox;
