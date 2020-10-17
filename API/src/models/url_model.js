import mongoose,  {Schema} from 'mongoose'
import shortId from 'shortid'


const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    unique:true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  user: {type: Schema.ObjectId, ref: 'usuario', required: true},
  estado: {type: Number, default:1},
  createAt: {type: Date , default:Date.now}
})

module.exports = mongoose.model('shortUrl', shortUrlSchema)