import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Movie.module.css";

import Navbar from "../../components/header/Navbar";
import Logo from "../../components/header/Logo";
import Banner from "../../components/header/Banner";
// import RightSidebar from "../../components/RightSidebar";

import connectDb from "../../DB/connectDb";
import Movies from "../../DB/models/movies";
import Screenings from "../../DB/models/screenings";
import Bookings from "../../DB/models/bookings";
import Salons from "../../DB/models/salons";

import MovieDetails from "../../components/MovieDetails";
import SalonDetails from "../../components/SalonDetails";
import TicketDetails from "../../components/TicketsDetails";

// Get requested booking and seats for that booking from DB
export async function getServerSideProps(context) {
  await connectDb();
  const booking = await Bookings.findOne(context.query, { _id: 0 }).lean();
  const screening = await Screenings.findOne(booking.screeningid, { _id: 0 }).lean();
  const movie = await Movies.findOne(booking.movieid, { _id: 0 }).lean();
  const salon = await Salons.findOne(booking.salonid, { _id: 0 }).lean();

  // const movieID = JSON.parse(`{ "movieid":${context.query.id} }`);
  // const movie = await Movies.findOne(context.query, { _id: 0 }).lean();
  // const screenings = await Screenings.find(movieID, { _id: 0 }).lean();

  if (!booking) {
    return { notFound: true };
  }
  console.log(booking, movie, screening, salon);
  return { props: { booking, movie, screening, salon } };
}

export default function BookingPage({ booking, movie, screening, salon }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kino Luleå</title>
        <meta
          name="description"
          content="Fictional website for cinema in Luleå"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Logo />
          <Navbar />
          <Banner />
        </nav>
      </header>

      {/* <main className={styles.main}>
        <div className={styles["main-container"]}>
          <div className={styles["main-container-content-article-small"]}>
            <p>{movie.title.toUpperCase()}</p>
          </div>
          <div className={styles["main-container-content"]}>
            <p className={styles["about"]}>{movie.details.about}</p>
            <p className={styles["involved"]}>
              Director: {movie.details.director}
            </p>
            <p className={styles["involved"]}>
              Writer(s): {movie.details.writers}
            </p>
            <p className={styles["involved"]}>
              Starring: {movie.details.stars}
            </p>
            <p className={styles["rating"]}>
              IMDB rating: {movie.details.rating}
            </p>
            <div className={styles["poster"]}>
              <Image
                className={styles["image"]}
                src={movie.img}
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className={styles["right-container"]}>
          <RightSidebar screenings={screenings} movie={movie} />
        </div>
      </main> */}

      <main className={styles.main}>
        <div className={styles["main-container"]}>
          <div className={styles["main-container-content-article-small"]}>
            <p>BILJETTBOKNING</p>
          </div>
          <MovieDetails movie={movie} screening={screening} />
          <TicketDetails booking={booking} salon={salon} />
          {/* // move it inside TicketDetails component */}
          {/* <SalonDetails booking={booking} salon={salon} /> */}
        </div>
      </main>

      <footer className="footer">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
