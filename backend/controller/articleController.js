import AsyncHandler from "express-async-handler";
import Article from "../model/articleModel.js";
import Categorie from "../model/categoriesModel.js";

const ajoutArticleForm= AsyncHandler (async(req,res)=>{

    let categories= await Categorie.find()
    res.json({categories:categories});
});

const ajoutarticle =AsyncHandler(async(req,res)=>{
    const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const article= new Article({
        title:req.body.title,
        content:req.body.content,
        categorie:req.body.categorie,
        postedAt: date,
        image:req.file.filename
      
    })
   await article.save();
   res.json(article)
});
const showArticle = AsyncHandler(async (req, res) => {
    
 
     let articles = await Article.find({}).populate('categorie')
   
         res.json({ articles, articles })
  
 })

const deletOne=AsyncHandler(async(req,res)=>{
    const query = { _id: (req.params.id) };

    let articles=await Article.deleteOne (query);
   // res.redirect('/showArticle')
   res.json("delet")
});
const update=AsyncHandler(async(req,res)=>{
    const categories=await Categorie.find()
    const query = { _id: (req.params.id) };
    let articles=await Article.findById(query).populate('categorie')
    res.json({article:articles, categories:categories})
});
const modifier=AsyncHandler(async(req,res)=>{
    const categorie=await Categorie.find()
    const query = { _id: (req.params.id) };
    const today = new Date();
    const date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const article= ({
        title:req.body.title,
        content:req.body.content,
        categorie:req.body.categorie,
        postedAt: date,
        image:req.body.image
    })
    await Article.findByIdAndUpdate(query,article).populate('categorie')
   res.json(article)
});
const home=AsyncHandler(async(req,res)=>{
    
   let categories = await Categorie.find().limit(3)
    let articles=await Article.find().populate('categorie')
    res.json({articles:articles, categories: categories})
    //articles utilise dans les reat pour 1 
 });
const category=AsyncHandler(async(req,res)=>{
    const id = { categorie: (req.params.id) };
    const articles=await Article.find(id).populate('categorie')
    let categories =await Categorie.find().limit(3)
    res.render("home",{articles:articles, categories: categories})
});
const recherche=AsyncHandler(async(req,res)=>{
    const titleSerch= req.body.title
    let categories =await Categorie.find().limit(3)
    const articles=await Article.find({title:titleSerch})
    res.render("home",{articles:articles,categories: categories})
});
const detailsArticle=AsyncHandler(async(req,res)=>{
    const id = { _id: (req.params.id) };
    const article=await Article.findById(id).populate('categorie')
    let comments = article.comments
    
    res.json ({article:article,comments:comments})

});
const communt=AsyncHandler(async(req,res)=>{
    const id = { _id: req.params.id };
    const today = new Date();
    const date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const comment= ({
        title:req.body.commenttitle,
        postedAt: date, 
    })
    const article=await Article.findById(id)
     article.comments.push(comment)
    await article.save();
    res.redirect('/detailsArticle/'+req.params.id)
    
})







export{ajoutArticleForm,ajoutarticle,deletOne,update,modifier,home,category,recherche,detailsArticle,communt,showArticle};


