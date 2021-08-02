// membuat koleksi dokumen untuk db

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({

    name: {
        type: String, //tipe data
        required: true, //kolom ini wajib diisi
        unique:true //gaboleh ada nama yang sama
    },
    description: {
        type:String,
        required:true
    }

},{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema)

module.exports = Dishes;