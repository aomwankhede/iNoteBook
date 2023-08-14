const mongoose=require('mongoose');

const NotesSchema={
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        unique:true
    },
    tag:{
        type:String,
        default:'General'
    },
    date:{
        type:Data,
        default:Date.now
    }
};

module.exports=mongoose.model('notes',NotesSchema)