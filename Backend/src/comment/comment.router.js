import { Router } from "express"

import { createComment, getCommentsByPost } from "./comment.controller.js"
import {commentValidator} from '../../middlewares/validators.js'

const comment = Router()

comment.post('/post', createComment, commentValidator)
comment.get('/:id', getCommentsByPost)

export default comment