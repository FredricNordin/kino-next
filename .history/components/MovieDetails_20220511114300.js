
import Link from "next/link";

export default function MovieDetails({ movies }) {
 
    return (
      <li key={movie.id}>
        <Link href={`/movies/${movie.id}`}>
          <div
            className={styles["poster"]}
            style={{ backgroundImage: `url("${movie.img}")` }}
          >
            <h1 className={styles["title"]}>{movie.title}</h1>
          </div>
        </Link>
      </li>
    );
  });
  return <ul className={styles["movies-list"]}>{moviesList}</ul>;
}
