import mongoose from 'mongoose';

const Cart = new mongoose.Schema({
  products: { type: Array, required: true },
  name: { type: String },
  phone: { type: String },
  email: { type: String, required: true },
  flagEnd: { type: Number, required: true },
  allPrice: { type: String, required: true },
});

export default mongoose.model('Cart', Cart);
