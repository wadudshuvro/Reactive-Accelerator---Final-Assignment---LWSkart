import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    image: [{ type: String, required: true }],
    price: { type: Number, required: true },
    discount_price: { type: Number, required: true },
    reviewsNumber: { type: Number, required: true },
    ratings: { type: Number, required: true },
    availability: { type: Boolean, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true, lowercase: true },
    details: Schema.Types.Mixed,
    description: { type: String, required: true },
    sizes: { type: [String] },
    colors: { type: [String] },
    sku: { type: Number, required: true },
    soldCounts: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product || model("Product", productSchema);

const sofaSizes = [
  "2-seater",
  "3-seater",
  "L-shaped",
  "Sectional",
  "Recliner",
  "Chaise Lounge",
  "Modular",
  "Sleeper Sofa",
  "Futon",
  "Armchair",
  "Loveseat",
  "Daybed",
  "Corner Sofa",
];
