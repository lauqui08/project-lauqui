import mongoose from "mongoose";
const TankSchema = new mongoose.Schema({
  tankLocation: {
    type: String,
    required: [true, "Tank location is required!"],
  },
  tankName: {
    type: String,
    required: [true, "Tank name or number is required!"],
  },
  tankCapacity: { type: Number },
  isActive: { type: Boolean, default: true },
});

const Tank = mongoose.model("Tanks", TankSchema);
export default Tank;
