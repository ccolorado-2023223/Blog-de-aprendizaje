import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Author name is required']
    },
    content: {
      type: String,
      required: [true, 'Comment content is required'],
      trim: true
    },
    post: {
    type: String,
    required: true
}
  },
  { timestamps: true }
)

export default mongoose.model('Comment', commentSchema)