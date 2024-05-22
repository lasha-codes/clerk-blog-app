import { db } from '../db/database.js'

export const addBlog = (req, res) => {
  const { title, description, author, image } = req.body
  try {
    const query =
      'INSERT INTO blogs (title, description, author, image) VALUES(?, ?, ? , ?)'
    db.query(query, [title, description, author, image], (err, result) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ error: 'Error fetching blogs' })
      }

      res.status(200).json({ message: 'U added blog', result })
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getBlogs = async (req, res) => {
  try {
    const query = 'SELECT * FROM blogs'
    db.query(query, (err, result) => {
      if (err) throw err
      res.status(200).json(result)
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
