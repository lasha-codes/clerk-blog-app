import { db } from '../db/database.js'

export const addBlog = async (req, res) => {
  const { title, description, author, image } = req.body
  try {
    const query =
      'INSERT INTO blogs (title, description, author, image) VALUES(?, ?, ? , ?) RETURNING *'
    db.query(query, [title, description, author, image], (err, result) => {
      if (err) throw err
      res.status(200).json({ message: 'U added blog', result })
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
