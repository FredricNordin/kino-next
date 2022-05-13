import Head from "next/head";
import styles from "../styles/Movies.module.css";

import Navbar from "../components/header/Navbar";
import Logo from "../components/header/Logo";
import Banner from "../components/header/Banner";

import MovieDetails from "../components/MovieDetails";
import SaloonDetails from "../components/SalonDetails";
import TicketDetails from "../components/TicketsDetails";

import connectDb from "../DB/connectDb";
import Movies from "../DB/models/movies";
import Screenings from "../DB/models/screenings";

// Get all movies and screenings from DB
export async function getServerSideProps() {
  await connectDb();
  const movies = await Movies.find({}, { _id: 0 }).lean();
  const screenings = await Screenings.find({}, { _id: 0 }).lean();
  return { props: { movies, screenings } };
}

export default function BookingPage({ movies, screenings }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kino Luleå / Alla Filmer</title>
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
            <p>MOVIE TICKET RESERVATION</p>
          </div>
          <LatestMovies movies={movies} />
        </div>
        <div className={styles["right-container"]}>
          <RightSidebar screenings={screenings} movies={movies} />
        </div>
      </main> */}

      <main className={styles.main}>
        <div className={styles["main-container"]}>
          <div className={styles["main-container-content-article-small"]}>
            <p>BILJETTBOKNING</p>
          </div>
          <MovieDetails movies={movies} />
          <TicketDetails />
          <SaloonDetails />
        </div>
      </main>

      <footer className="footer">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
