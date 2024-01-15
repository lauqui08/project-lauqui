import mongoose from "mongoose";
const CustomerSchema = new mongoose.Schema({
  customerCode: {
    type: String,
    required: [true, "Customer code is required!"],
    unique: true,
  },
  customerName: {
    type: String,
    required: [true, "Customer name is required!"],
  },
  address: { type: String },
  contactPerson: { type: String },
  contactNumber: { type: Number },
  isActive: { type: Boolean, default: true },
});

const Customer = mongoose.model("Customers", CustomerSchema);
export default Customer;
