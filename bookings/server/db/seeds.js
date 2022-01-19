use hotel;

db.dropDatabase();
db.bookings.insertMany([
    {
        name : "Robert",
        emailAddress : "Rbert@gmail.com",
        checkIn : true
    },
    {
        name : "Andy",
        emailAddress : "Andy@gmail.com",
        checkIn : false
    },
    {
        name : "Jill",
        emailAddress : "Jill@gmail.com",
        checkIn : false
    }
])




