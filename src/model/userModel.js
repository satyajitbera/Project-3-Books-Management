const mongoose=required("mongoose")


const userSchema=new mongoose.schema({
    
  title: {
    type:String, 
    required:true,
    enum:[Mr, Mrs, Miss]
},
  name: {
    type:String,
    required:true
},
  phone: {
    type:String,
    required:true,
     unique:true
    },
  email: {
    type:String,
     required:true,
     unique:true
    }, 
  password: {
    type:String,
    required:true,
    },
  address: {
    street: {
        type:String
    },
    city: {
        type:String
    },
    pincode: {
        type:String
    }
  },
  
},{timestamp:true});

module.exports=mongoose.model("user",userSchema)