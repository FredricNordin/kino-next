
export default function MovieDetails({ movie, screening }) {
  return (
    <div>
      <p>{movie.name}</p>
      <p>{screening.time} and {screening.date}</p>
    </div>
  );
}