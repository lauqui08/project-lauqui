import mongoose from "mongoose";
const TransactionSchema = new mongoose.Schema(
  {
    atw: { type: String, required: [true, "ATW is required!"], unique: true },
    buyer: { type: String, required: [true, "Buyer/Client is required!"] },
    trucker: { type: String, required: [true, "Trucker is required!"] },
    loadCap: {
      type: Number,
      required: [true, "Load cap or EST quantity is required!"],
    },
    plateNumber: {
      type: String,
      required: [true, "Plate number is required!"],
    },
    driver: { type: String, required: [true, "Driver is required!"] },
    source: { type: String, required: [true, "Tanks source is required!"] },
    dr: { type: String, required: [true, "DR is required!"] },
    seal: { type: String, required: [true, "Seal is required!"] },
    remarks: { type: String },
    loadingStart: { type: String },
    weighIn: { type: Number },
    loadingEnd: { type: String },
    weighOut: { type: Number },
    truckScaleTicket: { type: String },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transactions", TransactionSchema);
export default Transaction;
