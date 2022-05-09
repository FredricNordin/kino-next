import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    token: String,
    isAdmin: Boolean,
    registered: Date,
    bookings: [
        {
            bookingid: Number,  // api/bookings/:id.id
            seatrow: Number,    // api/bookings/:id/users.userid -> userid.seatrow
            seatcolumn: Number, // api/bookings/:id/users.userid -> userid.seatcolumn
            payment: Boolean    // api/bookings/:id/users.userid -> userid.payment
        },
    ]
});

const User = models.User || model("User", userSchema);
export default User;