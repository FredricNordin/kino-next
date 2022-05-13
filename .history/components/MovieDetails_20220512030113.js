

export default function MovieDetails() {
  export async function getServerSideProps() {
    await connectDb();
    const movies = await Movies.find({}, { _id: 0 }).lean();
    const screenings = await Screenings.find({}, { _id: 0 }).lean();
    return { props: { movies, screenings } };
  }
  
  return (
      <>
      {/* Hello world */}
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </>
    
    );
  }
