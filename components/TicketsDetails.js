import SalonDetails from "./SalonDetails";
import styles from "../styles/SalonDetails.module.css";
import { useState } from "react/cjs/react.production.min";

export default function TicketsDetails({ booking, salon }) {

  const [seatCondition, setSeatCondition] = useState(booking.seatsmap);

  // Seat Value
  function handleOneSeat(seat) {
    seat = !seat;
    console.log("seat after click = ", seat);

  };

  // Seat List
  function handleSeats(rrow) {
    var j = 0;
    const seatsList = rrow.map((seat) => {
      console.log("seat before click = ", seat);
      j++;
      return (
        <ul className={styles["row-seats"]}>
          <li key={j} className={styles["single-seat"]}>
            <button
              onClick={handleOneSeat(seat)}
              className={styles["free -seat"]}>
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
  const rowsList = salon.seatsmap.map((row) => {
    console.log("row", i, "= ", row);
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