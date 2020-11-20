import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  categorie: { type: Array, required: true },
  title: { type: String, required: true },
  review: { type: Number, required: false },
  price: { type: Number, required: true },
  discountPrice: { type: Number, required: false },
  availability: { type: Number, required: true },
  sku: { type: String, required: true },
  tags: { type: Array, required: true },
  description: { type: String, required: true },
  colors: { type: Object, required: true },
  size: { type: Array, required: true }
})

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema)
