const mongoose = require ("mongoose")

const Orderschema = new mongoose.Schema(
    {
        userId : {type:String , required:true  },
        products : [
        {
            productId : 
            {
                 type : String,
            },
            quantity:
            {
                type : Number,
                default : 1,
            },
        },
    ],
      amount :{type : Number , required : true},
      address : { type : Object , required : true},
       status : { type : String , Object : "pending"},
    },
    {timestamps : true }
)

module.exports = mongoose.model("Order" ,Orderschema )