// // modify it later on because it isn't clear now whether we need it or not
// import connectDb from "../../../../DB/connectDb";
// import Users from "../../../../DB/models/users"

// // Find all users for the booking with bookingid: id. /api/bookings/[id]/users
// export default async function handler(req, res) {
//   try {
//     connectDb().then(async () => {
//       const { id } = req.query;
//       const screenings = await Screenings.find({ movieid: id });
//       if (screenings) {
//         res.status(200).json(screenings);
//       } else {
//         // If no screenings are found, return 404.
//         res.status(404).json({ message: "No screenings found!" });
//       }
//     });
//   } catch (error) {
//     // If error (Database unavailable), return 500.
//     res.status(500).json({ message: "Error getting screenings!" });
//   }
// }