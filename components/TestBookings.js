//import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function TestBookings({ bookings }) {
  console.log('bookings arr length = ', bookings.length);
  if (bookings.length > 0) {
    console.log('printing booking details');
    const bookingsList = bookings.map((booking) => {
      return (
        <li style={{ color: "white" }} key={booking.id}>
          <p >Booking id = {booking.id}</p>
          <p >Screening id = {booking.screeningid}</p>
          <p >Movie id = {booking.movieid}</p>
          <p>Salon id = {booking.salonid}</p>
        </li>
      );
    });
    return <ul>{bookingsList}</ul>;
  } else {
    console.log("error in loading or an empty array");
  };

}
