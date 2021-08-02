// membuat koleksi dokumen untuk db

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({

    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required: true
    }
},{
    timestamps:true
});

const dishSchema = new Schema({

    name: {
        type: String, //tipe data
        required: true, //kolom ini wajib diisi
        unique:true //gaboleh ada nama yang sama
    },
    description: {
        type:String,
        required:true
    },
    comments: [commentSchema]

},{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema)

module.exports = Dishes;