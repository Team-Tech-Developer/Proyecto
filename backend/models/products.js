const mongoose=require("mongoose");

const productsShema=mongoose.Schema({
    name: {
        type:String,
        required:[true, "Please add the name of the product"],
        trim:true,
        maxLength:[120,"The product name max length is 120 characters"]
    },
    price:{
        type: Number,
        required: [true,"Please add the price of the product"],
        maxLength:[9, "The product price must be less than 100'000.000"],
        default: 0.0
    },
    desciption:{
        type:String,
        required:[true,"Please add a description to the product"]
    },
    score:{
        type: Number,
        default: 0
    },
    image:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required: true
        }
    }],
    category:{
        type:String,
        required: [true, "Please select the product category"],
        enum:{
            values:[
                "laptop",
                "desktop",
                "tablet",
                "accesory",
                "gaming",
                "2 in 1"
            ]
        }
    },
    provider:{
        type:String,
        required:[true, "Please add the product provider"]
    },
    stock:{
        type: Number,
        required:[true, "Please add the stock of the product"],
        maxLength:[5,"The max stock for the product is 99999"],
        default:0
    },
    numScore:{
        type: Number,
        default: 0
    },
    reviews:[
        {
            nameClient:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            commentary:{
                type:String,
                required:true
            }

        }
    ],
    dateCreated:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("products", productsShema)