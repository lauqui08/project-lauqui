import mongoose from "mongoose";
const TruckSchema = new mongoose.Schema({
  plateNo: { type: String, required: [true, "Plate number is required!"] },
  company: { type: String, required: [true, "Company is required!"] },
  isActive: { type: Boolean, default: true },
});
const Truck = mongoose.model("Trucks", TruckSchema);
export default Truck;
