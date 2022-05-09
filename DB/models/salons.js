import { Schema, model, models } from "mongoose";

const salonsSchema = new Schema({
  id: Number,
  name: String,
  seatsmap: [
    [Boolean, Boolean, Boolean, Boolean],   // row1  // false for availabe seat
    [Boolean, Boolean, Boolean, Boolean],   // row2  // true for reserved seat
    [Boolean, Boolean, Boolean, Boolean],    // row3
  ],
});

const Salons = models.Saloons || model("Salons", salonsSchema);
export default Salons;
