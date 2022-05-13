import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Booking.module.css";

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
  // console.log("context query = ", context.query);
  const booking = await Bookings.findOne(context.query, { _id: 0 }).lean();
  const screening = await Screenings.findOne(context.query, { _id: 0 }).lean();

  const movieID = JSON.parse(`{ "id":${booking.movieid}}`);
  const salonID = JSON.parse(`{ "id":${booking.salonid}}`);
  // console.log("movieID = ", movieID, "and salonID = ", salonID);

  const movie = await Movies.findOne(movieID, { _id: 0 }).lean();
  const salon = await Salons.findOne(salonID, { _id: 0 }).lean();

  if (!booking) {
    return { notFound: true };
  }
  // console.log(booking, screening, movie, salon);
  return { props: { booking, screening, movie, salon } };
}

export default function BookingPage({ booking, screening, movie, salon }) {
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
