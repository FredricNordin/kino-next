  import { Schema, model, models } from "mongoose";

const bookingsSchema = new Schema({
  id: Number,
  screeningid: Number,
  movieid: Number,
  salonid: Number,
  date: String,
  time: String,
  seatsmap: [[Boolean]],
  users: [
    {
      userid: Number,
      seatrow: Number,
      seatcolumn: Number,
      payment: Boolean
    },
  ],
});

const Bookings = models.Bookings || model("Bookings", bookingsSchema);
export default Bookings;
