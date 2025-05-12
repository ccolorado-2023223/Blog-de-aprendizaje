import {body} from 'express-validator'
import {validateErrorsWithoutFiles} from './validate.error.js'

export const commentValidator = [
    body('name','Name is required')
        .notEmpty()
        .isLength({min:1, max:18}),
    body('content','Content is required')
        .notEmpty()
        .isLength({min:1, max:100}),
    body('post','Post cannot be empty')
        .notEmpty(),
    validateErrorsWithoutFiles
]