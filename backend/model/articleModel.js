import mongoose from 'mongoose';
const commentSchema=mongoose.Schema({
    title:String,
    postedAt:{
        type:String,
        default: new Date(toString())
    },

});
const articleSchema=mongoose.Schema({
    title:String,
    content:String,
    categorie:{type: mongoose.Schema.Types.ObjectId, ref:'Categorie'},
    postedAt: {
        type: String,
        default: new Date(toString()),
      },
    image:String,

    comments:[commentSchema],
   
    
   
})
const  Article=mongoose.model(' Article',articleSchema)
export default Article;