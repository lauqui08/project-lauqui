import mongoose from "mongoose";
const CommoditySchema = new mongoose.Schema({
  commodityCode: {
    type: String,
    required: [true, "Commodity code/ name is required!"],
    unique: true,
  },
  description: { type: String, required: [true, "Description is required!"] },
  price: { type: Number },
  isActive: { type: Boolean, default: true },
});

const Commodity = mongoose.model("Commodity", CommoditySchema);
export default Commodity;
