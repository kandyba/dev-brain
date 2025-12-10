import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    diskSpace: { type: Number, default: 1024 ** 3 * 10 }, // 10 GB
    usedSpace: { type: Number, default: 0 },
    avatar: { type: String, default: '' },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]
  }, {
    timestamps: true
  }
);

export default mongoose.model('User', UserSchema);