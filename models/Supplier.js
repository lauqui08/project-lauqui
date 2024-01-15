import mongoose from "mongoose";
const SupplierSchema = new mongoose.Schema({
  supplierCode: {
    type: String,
    required: [true, "Supplier code is required!"],
    unique: true,
  },
  supplierName: {
    type: String,
    required: [true, "Supplier name is required!"],
  },
  address: { type: String, required: [true, "Address is required!"] },
  contactPerson: {
    type: String,
    required: [true, "Contact Person is required!"],
  },
  contactNumber: {
    type: Number,
  },
  isActive: { type: Boolean, default: true },
});

const Supplier = mongoose.model("Suppliers", SupplierSchema);
export default Supplier;
