use hotel;

db.dropDatabase();
db.bookings.insertMany([
    {
        name : "Robert",
        emailAdress : "Rbert@gmail.com",
        checkIn : true
    },
    {
        name : "Andy",
        emailAdress : "Andy@gmail.com",
        checkIn : false
    },
    {
        name : "Jill",
        emailAdress : "Jill@gmail.com",
        checkIn : false
    }
])




