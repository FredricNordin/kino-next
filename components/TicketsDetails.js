import SalonDetails from "./SalonDetails";
import styles from "../styles/SalonDetails.module.css";
import { useState, useEffect } from "react";

export default function TicketsDetails({ booking, salon }) {

  // const [seatCondition, setSeatCondition] = useState(booking.seatsmap);
  const seatCondition = booking.seatsmap || [];
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
  function handleSeats(rrow, indexrow) {
    const seatsList = rrow.map((seat, indexseat) => {
      console.log("seat(", indexrow, ",", indexseat, ") before click = ", seat);
      return (
        <ul key={indexrow} className={styles["row-seats"]}>
          <li key={indexseat} className={styles["single-seat"]}>

            <button
              key={indexseat}
              // type="checkbox"
              // name="seatCase"
              // checked={seat}
              // onChange={(ev) => seat = ev.target.checked}
              onClick={() => {
                seat = !seat;
                console.log("seat(", indexrow, ",", indexseat, ") after click = ", seat);
                seatCondition[indexrow][indexseat] = seat;
                console.log("setSeatCondition = ", seatCondition);

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
  const rowsList = booking.seatsmap.map((row, indexrow) => {
    console.log("row", indexrow, " = ", row);
    const rrow = row;
    return (
      <li key={indexrow} className={styles["row-line"]}>
        {handleSeats(rrow, indexrow)}
      </li>
    );
  });
  return (<ul key={100} className={styles["salon-rows"]}>{rowsList}</ul>);
}