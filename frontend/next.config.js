const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  env: {
    MONGO_URI:
      'mongodb+srv://frozen:sabesbem1234@cluster0.lsn47.mongodb.net/<dbname>?retryWrites=true&w=majority',
    NEXT_PUBLIC_API_URL: 'http://localhost:1337'
  }
})
