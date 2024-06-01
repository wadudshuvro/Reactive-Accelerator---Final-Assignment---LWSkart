const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for an item in the shopping cart
const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

// Schema for the shopping cart
const CartSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    items: {
      type: [CartItemSchema],
      require: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
