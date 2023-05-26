import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
});

export default mongoose.model('RoleModel', RoleSchema);
