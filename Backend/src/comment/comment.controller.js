import Comment from './comment.model.js';

export const createComment = async (req, res) => {
  try {
    const { postId, content, name } = req.body
    if (!name || !content) return res.status(400).send({ success: false, message: 'Name and content required' })
    const newComment = new Comment({ name, content, post: postId })
    console.log({ postId, name, content })
    await newComment.save()

    return res.status(201).send({ success: true, message: 'Comment created', comment: newComment })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ success: false, message: 'General error', err })
  }
};

export const getCommentsByPost = async (req, res) => {
  try {
    const postId = req.params.id
    const comments = await Comment.find({ post: postId }).sort({ createdAt: -1 })
    return res.send({ success: true, message: 'Comments retrieved', comments })
  } catch (err) {
    console.error(err);
    return res.status(500).send({ success: false, message: 'General error', err })
  }
}
