const mongoose = require("mongoose");
const userModel = new mongoose.Schema(
    {
        nomusu:{
            type: String
        },
        password:{
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false, 
    }
)

const ModelUser = mongoose.model("usuarios", userModel);
module.exports = ModelUser;