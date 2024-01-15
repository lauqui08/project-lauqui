import mongoose from "mongoose";
const TruckingSchema = new mongoose.Schema({
  truckingCode: {
    type: String,
    required: [true, "Trucking code is required!"],
    unique: true,
  },
  company: {
    type: String,
    required: [true, "Trucking company name is required!"],
  },
  address: { type: String, required: [true, "Address is required!"] },
  contactPerson: {
    type: String,
  },
  contactNumber: { type: Number },
  isActive: { type: Boolean, default: true },
});

const Trucking = mongoose.model("Truckings", TruckingSchema);
export default Trucking;
