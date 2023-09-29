const mongoose = require("mongoose");

const PlacementsDepartmentWiseSchema = mongoose.Schema({
        // Foreign key from the Placement Year wise collection
        Year: {
            type: mongoose.Schema.Types.ObjectId, // object id is pk in user collection
            ref: 'user',
            required: true
        },
        dept:{
            type:String,
            required: true
        },
        UndergradTotal:{
            type:Number,
            required:true
        },
        UndergradPlaced:{
            type:Number,
            required:true
        },
        PostgradTotal:{
            type:Number,
            required:true
        },
        PostgradPlaced:{
            type:Number,
            required:true
        }
    },
    { collection: "placementsDeptWise" }
);

module.exports = mongoose.model("placementsDeptWise", PlacementsDepartmentWiseSchema);
