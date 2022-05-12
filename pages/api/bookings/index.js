import connectDb from "../../../DB/connectDb";
import Bookings from "../../../DB/models/bookings";
// import Screenings from "../../../DB/models/screenings";
// import Movies from "../../../DB/models/movies";
// import Salons from "../../../DB/models/salons";

// Get all bookings from /api/bookings.
export default function handler(req, res) {
  try {
    connectDb().then(async () => {
      const bookings = await Bookings.find();
      res.status(200).json(bookings);
    });
  } catch (error) {
    // If error (Database unavailable), return 500.
    res.status(500).json({ message: "Error getting bookings!" });
  }
};
