const baseURL = 'http://localhost:5000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headings: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateBooking = (id, payload) => {
    fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
    }
)}
