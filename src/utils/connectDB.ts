import mongoose from 'mongoose'

const connection = {
  isConnected: null
}

const connectDB = async (): Promise<void> => {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  connection.isConnected = db.connections[0].readyState
}

export default connectDB
