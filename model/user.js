const mongoose =('mongoose')
const validator =require("validator")

const userScheme =new mongoose.schema({
   
    name: {
        type: String,
        required: true,
        validate: (value) => {
          return validator.isAlpha(value);
        },
      },
      age: Number,
      favoriteFoods: [String],

    }

)
module .exports=mongoose.model('user' , userScheme)