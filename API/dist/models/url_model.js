'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortUrlSchema = new _mongoose2.default.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    unique: true,
    default: _shortid2.default.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  user: { type: _mongoose.Schema.ObjectId, ref: 'usuario', required: true },
  estado: { type: Number, default: 1 },
  createAt: { type: Date, default: Date.now }
});

module.exports = _mongoose2.default.model('shortUrl', shortUrlSchema);