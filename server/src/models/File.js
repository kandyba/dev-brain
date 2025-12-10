import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    access_link: { type: String },
    size: { type: String, default: 0 },
    path: { type: String, default: '' },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      default: null
    },
    children: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "File"
    }]
  }, {
    timestamps: true
  }
);

export default mongoose.model('User', UserSchema);