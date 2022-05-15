import SalonDetails from "./SalonDetails";
import styles from "../styles/SalonDetails.module.css";
import { useState, useEffect } from "react";

export default function TicketsDetails({ booking, salon }) {

  const [seatCondition, setSeatCondition] = useState(booking.seatsmap);
  console.log("seatCondition = ", seatCondition);

  // Seat Value
  function handleOneSeat(seat) {
    seat = !seat;
    console.log("seat after click = ", seat);
  };

  // useEffect(() => {
  //   // Update the seatsmap 
  //   booking.seatsmap = booking.seatsmap.forEach(element => {
  //     element = !element;
  //   });;
  //   console.log("seatsmap inside useEffect = ", booking.seatsmap);
  // });

  // Seat List
  function handleSeats(rrow) {
    var j = 0;
    const seatsList = rrow.map((seat) => {
      // console.log("seat before click = ", seat);
      j++;
      return (
        <ul className={styles["row-seats"]}>
          <li key={j} className={styles["single-seat"]}>
            <button
              onClick={() => {
                seat = !seat;
                setSeatCondition(!seatCondition);
                console.log("setSeatCondition = ", seatCondition);
                // console.log("seat (", i, ",", j, ") after click = ", seat);
              }}
              className={seat ? styles["booked-seat"] : styles["free-seat"]}>
              {seat ? "[x]" : "[_]"}
            </button>
          </li>
        </ul>
      );
    });
    return (seatsList);
  };

  // Row List
  var i = 0;
  const rowsList = booking.seatsmap.map((row) => {
    // console.log("row", i, "= ", row);
    i++;
    const rrow = row;
    return (
      <li key={i} className={styles["row-line"]}>
        {handleSeats(rrow)}
      </li>
    );
  });
  return (<ul className={styles["salon-rows"]}>{rowsList}</ul>);
}