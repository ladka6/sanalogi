var mongoose = require('mongoose');
var Order = mongoose.Schema({
  tarih: Date,
  firma: String,
  adi: String,
  adet: Number,
  tutar: Number,
});

module.exports = mongoose.model('order', Order);