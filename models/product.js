const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'product must have a name']
    },

    price:{
        type: Number,
        required:[true, 'product must have a price']
    },

    featured: {
    type: Boolean,
    default: false
   },

   rating:{
       type: Number,
       default: 4.5
   },

   createdAt:{
       type: Date,
       default: Date.now(),
   },

   company:{
       type: String,
       enum:{ 
           values:['ikea', 'walmart', 'affordables', 'one'],
           message: '{VALUE} is not supported',
        },
   }

})

module.exports = mongoose.model('Product', productSchema)