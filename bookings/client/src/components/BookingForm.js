import React,{useState} from 'react';

 const BookingForm = ({addBooking}) => {
     const [name, setName] = useState("")
     const [ emailAdress, setEmailAdress] = useState("")
     const [checkIn, setCheckIn] =useState(false)

     const handleNameChange = event => setName(event.target.value)
     const handleEmailChange = event => setEmailAdress(event.target.value)

    const  handleSubmit = (event) => {
        event.preventDefault();
            const booking={
            name,
            emailAdress,
            checkIn
        }

        addBooking(booking)
        setName("")
        setEmailAdress("")
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
      <label htmlFor="emailAdress">Email_Adress</label>
      <input
      type="email"
      id = "email"
      value = {emailAdress}
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
