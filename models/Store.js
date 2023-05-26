import mongoose from 'mongoose';

const stores = new mongoose.Schema({
  stores: { type: Array, required: true },
});

export default mongoose.model('stores', stores);
