// mau ngebuat model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill: {
        type: String
    },
    skillRating: {
        type: Number,
        min : 1,
        max: 5
    }
})

const anggotaSchema = new Schema({
    nama : {
        type: String,
        required: true,
    },
    kodeSolver : {
        type: String,
        required: true
    },
    skillset : [skillSchema]
},{
    timestamp: true
})

var solveit = mongoose.model('Solveit',anggotaSchema);

module.exports = solveit