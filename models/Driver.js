import mongoose from "mongoose";
import bcrypt from "bcrypt";
const DriverSchema = new mongoose.Schema({
  fullname: { type: String, required: [true, "Fullname is required!"] },
  adress: { type: String },
  contactNumber: { type: String },
  driversLicenseNo: {
    type: String,
    required: [true, "Drivers License is required!"],
  },
  isActive: { type: Boolean, default: true },
});

//encrypt drivers license number for data privacy incase the database is hacked
DriverSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt();
  this.driversLicenseNo = await bcrypt.hash(this.driversLicenseNo, salt);
});

const Driver = mongoose.model("Drivers", DriverSchema);
export default Driver;
