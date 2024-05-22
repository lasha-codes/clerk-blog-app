import { Router } from 'express'
import { addBlog, getBlogs } from '../controllers/blogs.js'
const router = Router()

router.post('/add-blog', addBlog)
router.get('/get-blogs', getBlogs)

export default router
