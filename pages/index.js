import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/header/Navbar";
import Logo from "../components/header/Logo";
import Banner from "../components/header/Banner";
import LatestMovies from "../components/LatestMovies";
import RightSidebar from "../components/RightSidebar";
import TestBookings from "../components/TestBookings";

import connectDb from "../DB/connectDb";
import Movies from "../DB/models/movies";
import Screenings from "../DB/models/screenings";
import Bookings from "../DB/models/bookings";
import Salons from "../DB/models/salons";

// export function handleBookingsCollection({ screenings, salons }) {
//   console.log("we are inside handleBookingsCollection function");
//   const bookings = screenings.map((screening) => {
//     return (
//       {
//         id: screening.id,
//         screeningid: screening.id,
//         movieid: screening.movieid,
//         salonid: salons.id,
//         date: screening.date,
//         time: screening.time,
//         seatsmap: salons.seatsmap,
//         users: [],
//       }
//     );
//   });
//   console.log('bookings inside handleBookingsCollection fn = ', bookings);
//   return (bookings);
// };

// export function handleSalonsCollection() {
//   return (
//     {
//       id: 1,
//       name: "Main",
//       seatsmap: [
//         [false, false, false, false],
//         [false, false, false, false],
//         [false, false, false, false],
//       ],
//     }
//   );
// };

// Get all movies and screenings from DB
export async function getServerSideProps() {
  await connectDb();
  const movies = await Movies.find({}, { _id: 0 }).lean();
  const screenings = await Screenings.find({}, { _id: 0 }).lean();
  ////////////////////////////////////////////////////////////////////////////
  //              reading the bookings and the salons collections           //
  ////////////////////////////////////////////////////////////////////////////
  const salons = await Salons.find({}, { _id: 0 }).lean();                    //
  // if (salons.length == 0) {                                                 //
  //   salons = handleSalonsCollection();                                      //
  // };                                                                        //
  const bookings = await Bookings.find({}, { _id: 0 }).lean();                //
  // if (bookings.length == 0) {                                               //
  //   bookings = await handleBookingsCollection({ screenings, salons });      //
  // };                                                                        //
  // console.log('bookings inside getServerSideProps fn = ', bookings);        //
  ////////////////////////////////////////////////////////////////////////////
  return { props: { movies, screenings, bookings, salons } };
}

export default function Home({ movies, screenings, bookings }) {
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
            <p>AKTUELLA FILMER</p>
          </div>
          <LatestMovies movies={movies} />
        </div>
        <div className={styles["right-container"]}>
          <RightSidebar screenings={screenings} movies={movies} />
        </div>
        {/* <div>
          <TestBookings bookings={bookings} />
        </div> */}
      </main>

      <footer className="footer">
        <p>This is the footer</p>
      </footer>
    </div>
  );
}
