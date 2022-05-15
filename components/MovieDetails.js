import Image from "next/image";
import styles from "../styles/Booking.module.css";

export default function MovieDetails({ movie, screening }) {
  return (

    <div className={styles["main-container-content"]}>
      <div className={styles["poster"]}>
        <Image
          className={styles["image"]}
          src={movie.img}
          layout="fill"
        />
      </div>
      <div className={styles["about"]}>{movie.details.about}
        <p className={styles["involved"]}>
          Director: {movie.details.director}
        </p>
        <p className={styles["involved"]}>
          Writer(s): {movie.details.writers}
        </p>
        <p className={styles["involved"]}>
          Starring: {movie.details.stars}
        </p>
        <p className={styles["involved"]}>
          IMDB rating: {movie.details.rating}
        </p>
      </div>
      <div className={styles["screening"]}>
        <p>Screening datum </p>
        <p>{screening.date}</p>
        <p>kl. {screening.time}</p>
      </div>
    </div>

  );
}