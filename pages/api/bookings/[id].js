import connectDb from "../../../DB/connectDb";
import Bookings from "../../../DB/models/bookings";
// import Screenings from "../../../DB/models/screenings";

// Find a single booking with id from /api/bookings/[id].
export default async function handler(req, res) {
    try {
        connectDb().then(async () => {
            const { id } = req.query;
            const booking = await Bookings.findOne({ id: id });
            if (booking) {
                res.status(200).json(booking);
            } else {
                // If no booking is found, return 404.
                res.status(404).json({ message: "No booking found!" });
            }
        });
    } catch (error) {
        // If error (Database unavailable), return 500.
        res.status(500).json({ message: "Error getting booking!" });
    }
}