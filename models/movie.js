/**
 * Created by lyh on 2017/1/3.
 */
var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');
var Movie = mongoose.model('Movie',MovieSchema);

module.exports = Movie;