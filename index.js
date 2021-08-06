const mongoose = require('mongoose');

const Anggota = require('./dishes');
const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connceted successfully to server');

    Anggota.create({
        nama: "muh hilmi fawwaz",
        kodeSolver : "Solver-SS-015",
        skillset: {
            skill: "ngoding",
            skillRating: 4
        }
    })
    .then((angota)=>{
        console.log(angota);
        return Anggota.findByIdAndUpdate(angota._id, {
            $set: {kodeSolver: "Solver-SS-016"}}, { new : true }

        ).exec();
    })
    .then((angota)=>{
        console.log(angota);
        
        angota.skillset.push({
            skill: "power point",
            skillRating: 3
        })

        return angota.save();
    })
    .then((angota)=> {
        console.log(angota)
        return Anggota.deleteMany({})
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
})