import mongoose from 'mongoose';

const newwSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    text:"",
    shortDescribe:"",
    date:date,
    count:0
});

const Neww = mongoose.model("Neww", newwSchema);

export default Neww;