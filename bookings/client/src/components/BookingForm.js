import React,{useState} from 'react';

 const BookingForm = ({addBooking}) => {
     const [name, setName] = useState("")
     const [ emailAddress, setEmailAddress] = useState("")
     const [checkIn, setCheckIn] =useState(false)

     const handleNameChange = event => setName(event.target.value)
     const handleEmailChange = event => setEmailAddress(event.target.value)

    const  handleSubmit = (event) => {
        event.preventDefault();
            const booking={
            name,
            emailAddress,
            checkIn
        }

        addBooking(booking)
        setName("")
        setEmailAddress("")
    }



  return <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
      type = "text"
      id = "name"
      value = {name}
      onChange = {handleNameChange}
      required
      />
      <label htmlFor="emailAdress">Email_Address</label>
      <input
      type="email"
      id = "email"
      value = {emailAddress}
      onChange = {handleEmailChange}
      required
      />
      <input
      type = "submit"
      name = "submit"
      value = "Save"
      />


  </form>

  
};

export default BookingForm;
