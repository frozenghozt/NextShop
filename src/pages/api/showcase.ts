import { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../models/product.model'
import connectDB from '../../utils/connectDB'

connectDB()

const showcase = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      const data = await Product.find({})
      res.status(200).json({ sucess: true, data })
    } catch (error) {
      res.status(400).json({ sucess: false })
    }
  } else if (req.method === 'POST') {
    try {
      const data = await Product.create(req.body)
      res.status(201).json({ sucess: true, data })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
}

export default showcase
