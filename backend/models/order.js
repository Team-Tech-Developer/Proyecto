const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  sendInfo: {
    departament: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "auth",
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "products",
      },
    },
  ],
  paymentInfo: {
    id:{
        type:String
    },
    status:{
        type:String
    }
  },
  paymentDate:{
    type:Date,
  },
  priceItems:{
    type:Number,
    required:true,
    default: 0.0
  },
  priceTax:{
    type:Number,
    required:true,
    default: 0.0
  },
  priceSend:{
    type:Number,
    required:true,
    default: 0.0
  },
  priceTotal:{
    type:Number,
    required:true,
    default: 0.0
  },
  status:{
    type:String,
    required:true,
    default: "processing"
  },
  dateSend:{
    type:Date
  },
  dateCreated:{
    type:Date,
    default: Date.now()
  }

});

module.exports=mongoose.model("order", orderSchema)